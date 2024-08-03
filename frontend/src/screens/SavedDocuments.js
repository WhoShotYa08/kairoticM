import React from "react";
import Document from "../components/document";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

const docData = [
  {
    id: 1,
    name: "242 Wiring",
    category: "Housing",
    date: "30/06/24",
    signatures: 6,
  },
  {
    id: 2,
    name: "Blueprint A",
    category: "Commercial",
    date: "01/07/24",
    signatures: 8,
  },
  {
    id: 3,
    name: "Electrical Layout",
    category: "Industrial",
    date: "05/07/24",
    signatures: 12,
  },
  {
    id: 4,
    name: "Plumbing Plan",
    category: "Residential",
    date: "10/07/24",
    signatures: 5,
  },
  {
    id: 5,
    name: "Fire Safety Diagram",
    category: "Public Building",
    date: "15/07/24",
    signatures: 10,
  },
];

export default function SavedDocumentsScreen() {
  return (
    <div className="containerOne w-100 border">
      <h4 className="text-success">Saved Documents</h4>
      <table className="container-sm table table-striped table-hover table-responsive ">
        <thead>
          <tr className="bg-light">
            <th scope="col">Document ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Date Uploaded</th>
            <th scope="col">E-Signatures</th>
          </tr>
        </thead>
        <tbody>
          {docData.map((item, key) => (
            <Document
              id={item.id}
              name={item.name}
              category={item.category}
              date={item.date}
              signature={item.signatures}
            />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button type="button" class="btn btn-light bg-transparent mx-2 ">
          <FaCircleArrowLeft size={20} color="black"/>
        </button>
        <button type="button" class="btn btn-light bg-transparent">
          <FaCircleArrowRight size={20} color="black"/>
        </button>
      </div>
    </div>
  );
}
