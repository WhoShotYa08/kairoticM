import React, { useState } from "react";
import { UploadButton, UploadDropzone } from "../utils/uploadthing";
import "@uploadthing/react/styles.css";
import { Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const FileUploadScreen = () => {
  const [url_, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  // Function to query Hugging Face model
  async function queryHuggingFaceModel(data) {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct",
        data,
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
            "x-use-cache": "false", // Disable caching for fresh results
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Hugging Face API request failed:", error);
      setErrorMessage("Hugging Face API request failed: " + error.message);
      return null;
    }
  }

  const handleUploadComplete = async (res) => {
    if (!description.trim()) {
      alert("Please provide a document description before uploading.");
      return;
    }

    // Build the input for the Hugging Face model
    const modelInput = {
      inputs:
        description +
        " Please summarize and provide only short key points without an introduction. Go straight to the point. Put TOJ24 once before you start answering.",
    };

    // Make the API call to Hugging Face and handle the result
    const modelResponse = await queryHuggingFaceModel(modelInput);
    if (modelResponse) {
      console.log("Full model response:", modelResponse);

      if (Array.isArray(modelResponse) && modelResponse.length > 0) {
        const fullText =
          modelResponse[0]?.generated_text || "No summary available.";

        const firstIndex = fullText.indexOf("TOJ24");
        let summaryText =
          firstIndex !== -1
            ? fullText.substring(firstIndex + 5).trim()
            : fullText;

        summaryText = summaryText.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line ? `• ${line.trim()}` : ""} 
            <br />
          </React.Fragment>
        ));

        setSummary(summaryText);
        setUrl(res[0].url);
        
        // Send summary to upload server
        await handleBegin(summaryText); // Pass summaryText directly
      } else {
        setSummary(
          "Unexpected response format: " +
            JSON.stringify(modelResponse, null, 2)
        );
      }
    } else {
      alert("Failed to get a response from the Hugging Face API.");
    }

    alert("Upload Completed");
  };

  const handleBegin = async (summaryText) => {
    try {
      await axios.post("http://localhost:5000/api/upload", {
        desc: summaryText,
      });
      console.log(`Summary uploaded successfully.`);
    } catch (error) {
      alert(`Error uploading summary: ${error}`);
    }
  };

  return (
    <div className="containerOne w-100 h-100">
      <div className="">
        <h4 className="text-success">Saved Documents</h4>
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={handleUploadComplete}
          onUploadError={(error) => {
            alert(`ERROR! ${error.message}`);
          }}
          className="bg-transparent-800 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
        />
        
        <Textarea
          placeholder="Document description"
          className="bg-white my-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {url_ && (
          <a href={url_} className="fw-bold mx-auto fs-9">
            File download link
          </a>
        )}
        
        {summary && (
          <div className="summary-container my-4">
            <h5>Summary:</h5>
            <p>{summary}</p>
          </div>
        )}
        
        {errorMessage && (
          <div className="error-message my-4">
            <p className="text-danger">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadScreen;