import React from "react";
import Document from "../components/document";
import { FaSearch, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Container, Table, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";

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
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filesPerPage] = useState(5); 

  const getFiles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/files/getFiles"
      );
      setFiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  // Get the files to display on the current page
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(files.length / filesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
<<<<<<< HEAD
    <div className="containerOne w-100 border h-100 table-responsive">
      <h4 className="text-success">Saved Documents</h4>
      <Table celled inverted selectable className="border-primary">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date Uploaded</TableHeaderCell>
            <TableHeaderCell>Download</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody className="text-white">
          {currentFiles.map((item) => (
            <TableData
              key={item._id} 
              name={item.name} 
              date={new Date(item.createdAt).toLocaleDateString()} 
              url={item.url} 
            />
          ))}
        </TableBody>
      </Table>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-light bg-transparent mx-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FaCircleArrowLeft size={20} color="black" />
        </button>
        <button
          type="button"
          className="btn btn-light bg-transparent"
          onClick={nextPage}
          disabled={currentPage === Math.ceil(files.length / filesPerPage)} 
        >
          <FaCircleArrowRight size={20} color="black" />
        </button>
        
=======
    <Container fluid className="py-4 px-4 bg-light min-vh-100">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <Row className="align-items-center mb-4">
          <Col>
            <h2 className="text-primary fw-bold mb-0" style={{fontSize: '20px'}}>Saved Documents</h2>
          </Col>
          <Col xs={12} md={4} lg={3} className="mt-3 mt-md-0">
            <InputGroup>
              <InputGroup.Text className="bg-white border-end-0">
                <FaSearch className="text-muted" />
              </InputGroup.Text>
              <FormControl
                placeholder="Search documents"
                className="border-start-0"
              />
            </InputGroup>
          </Col>
        </Row>

        <div className="table-responsive">
          <Table hover className="align-middle">
            <thead className="bg-light">
              <tr>
                <th>Document ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Date Uploaded</th>
                <th>E-Signatures</th>
              </tr>
            </thead>
            <tbody>
              {docData.map((item) => (
                <Document
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  category={item.category}
                  date={item.date}
                  signature={item.signatures}
                />
              ))}
            </tbody>
          </Table>
        </div>

        <Row className="mt-4 align-items-center">
          <Col>
            <p className="text-muted mb-0">Showing 1 to 5 of 5 entries</p>
          </Col>
          <Col xs="auto">
            <div className="d-flex">
              <Button variant="outline-primary" className="me-2">
                <FaArrowCircleLeft size={20} />
              </Button>
              <Button variant="outline-primary">
                <FaArrowCircleRight size={20} />
              </Button>
            </div>
          </Col>
        </Row>
>>>>>>> origin/Mtshali
      </div>
    </Container>
  );
}
