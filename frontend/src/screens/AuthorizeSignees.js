import React, { useState, useEffect } from 'react';
import { Container, Button, InputGroup, FormControl, Table, FormCheck, Modal, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus, faEdit, faTrash, faSort, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function AuthorizeSigneesScreen() {
  const [selectedRows, setSelectedRows] = useState({});
  const [sortOrder, setSortOrder] = useState({ column: '', order: '' });
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', role: '', email: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(data));
  }, [data]);

  const handleCheckboxChange = (id) => {
    setSelectedRows({ ...selectedRows, [id]: !selectedRows[id] });
  };

  const handleSort = (column) => {
    const order = sortOrder.column === column && sortOrder.order === 'asc' ? 'desc' : 'asc';
    setSortOrder({ column, order });
  };

  const handleShow = () => {
    setEditMode(false);
    setNewUser({ name: '', role: '', email: '' });
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (editMode) {
      setData(data.map((user) => (user.id === editUserId ? { id: editUserId, ...newUser } : user)));
    } else {
      const newId = data.length ? data[data.length - 1].id + 1 : 1;
      setData([...data, { id: newId, ...newUser }]);
    }
    setNewUser({ name: '', role: '', email: '' });
    handleClose();
  };

  const handleEditUser = (user) => {
    setEditMode(true);
    setEditUserId(user.id);
    setNewUser({ name: user.name, role: user.role, email: user.email });
    setShow(true);
  };

  const handleDeleteUser = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const sortedData = [...data]
    .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder.column && sortOrder.order) {
        if (sortOrder.order === 'asc') {
          return a[sortOrder.column].localeCompare(b[sortOrder.column]);
        } else {
          return b[sortOrder.column].localeCompare(a[sortOrder.column]);
        }
      }
      return 0;
    });

  return (
    <Container fluid className="py-4 px-4 bg-light min-vh-100">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h1 className="text-primary mb-4 fw-bold" style={{fontSize: '20px'}}>Authorize Signees</h1>
        <Row className="mb-4 align-items-center">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <div className="d-flex gap-2">
              <Button variant="outline-secondary" className="d-flex align-items-center">
                <FontAwesomeIcon icon={faFilter} className="me-2" />
                Filter
              </Button>
              <Button variant="primary" className="d-flex align-items-center" onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                Add User
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <InputGroup>
              <InputGroup.Text className="bg-white border-end-0">
                <FontAwesomeIcon icon={faSearch} className="text-muted" />
              </InputGroup.Text>
              <FormControl
                placeholder="Search"
                className="border-start-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
        <div className="table-responsive">
          <Table hover className="align-middle">
            <thead className="bg-light">
              <tr>
                <th>Select</th>
                <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                  Names <FontAwesomeIcon icon={faSort} className="ms-1 text-muted" />
                </th>
                <th onClick={() => handleSort('role')} style={{ cursor: 'pointer' }}>
                  Role <FontAwesomeIcon icon={faSort} className="ms-1 text-muted" />
                </th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row) => (
                <tr key={row.id}>
                  <td>
                    <FormCheck
                      type="checkbox"
                      checked={selectedRows[row.id] || false}
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                  </td>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                  <td>{row.email}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEditUser(row)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDeleteUser(row.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <Button variant="outline-primary">Previous</Button>
          <span className="text-muted">Page 1 of 1</span>
          <Button variant="outline-primary">Next</Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-bottom-0">
          <Modal.Title>{editMode ? 'Edit User' : 'Add New User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formRole" className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            {editMode ? 'Save Changes' : 'Add User'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}