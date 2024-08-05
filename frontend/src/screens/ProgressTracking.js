import React from 'react';
import { Container, Table, Card, Badge } from "react-bootstrap";
import AuthorizedUsers from "../components/authorizedUsers";
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from "react-icons/fa";

const usersAuthorized = [
  {
    id: 1,
    name: "Emily",
    surname: "Clark",
    approve: true,
  },
  {
    id: 2,
    name: "Maria",
    surname: "Smith",
    approve: true,
  },
  {
    id: 3,
    name: "John",
    surname: "Doe",
    approve: false,
  },
  {
    id: 4,
    name: "Jane",
    surname: "Roe",
    approve: null,
  },
  {
    id: 5,
    name: "Michael",
    surname: "Johnson",
    approve: false,
  },
];


export default function ProgressTracking() {
  const getApprovalIcon = (approve) => {
    if (approve === true) return <FaCheckCircle className="text-success" />;
    if (approve === false) return <FaTimesCircle className="text-danger" />;
    return <FaQuestionCircle className="text-warning" />;
  };

  const getApprovalCount = () => {
    const approved = usersAuthorized.filter(user => user.approve === true).length;
    return `${approved}/${usersAuthorized.length}`;
  };

  return (
    <Container fluid className="py-4 px-4 bg-light min-vh-100">
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-primary fw-bold mb-0" style={{fontSize: '20px'}}>Process Tracking</h2>
            <Badge bg="primary" pill className="px-3 py-2">
              Approved: {getApprovalCount()}
            </Badge>
          </div>

          <div className="table-responsive">
            <Table hover className="align-middle">
              <thead className="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th className="text-center">Approval Status</th>
                </tr>
              </thead>
              <tbody>
                {usersAuthorized.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td className="text-center">
                      {getApprovalIcon(item.approve)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}