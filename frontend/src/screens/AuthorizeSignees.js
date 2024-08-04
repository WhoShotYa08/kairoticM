import React, { useState, useEffect } from 'react';
import { Container, Button, InputGroup, FormControl, Table, FormCheck, Modal, Form } from 'react-bootstrap';

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
    <Container style={{ flex: '1' }}>
      <div className="containerOne h-100">
        <h1 className="text-primary">Authorize Signee's</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button style={{ backgroundColor: 'white', color: 'grey', borderColor: 'grey' }}>Filter</Button>
            <Button style={{ backgroundColor: 'lightblue', color: 'white' }} onClick={handleShow}>+ Add User</Button>
          </div>
          <InputGroup style={{ width: '300px' }}>
            <FormControl
              placeholder="Search"
              style={{ borderRadius: '25px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Select</th>
                <th onClick={() => handleSort('name')}>
                  Names <span>{sortOrder.column === 'name' ? (sortOrder.order === 'asc' ? '↓' : '↑') : ''}</span>
                </th>
                <th onClick={() => handleSort('role')}>
                  Role <span>{sortOrder.column === 'role' ? (sortOrder.order === 'asc' ? '↓' : '↑') : ''}</span>
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
                    <Button variant="warning" onClick={() => handleEditUser(row)}>Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteUser(row.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
            <Button variant="primary">Previous</Button>
            <span>Page 1 of 1</span>
            <Button variant="primary">Next</Button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit User' : 'Add New User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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