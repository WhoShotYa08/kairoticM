import react from 'react';
import { Container } from 'react-bootstrap';

export default function AuthorizeSigneesScreen(){
    const tableData = [
        { name: 'Nokuhle Ngubane', role: 'Project Manager', email: 'nokuhlengubane@gmail.com' },
        { name: 'Adrien Belo', role: 'Head of Design', email: 'adrienbelo@gmail.com' },
        { name: 'Brian Mabukwa', role: 'Intermediate Designer', email: 'brianmabukwa@gmail.com' },
        { name: 'Kgatlhiso Mokgatlhe', role: 'Junior Designer', email: 'kgatlhisom@gmail.com' },
      ];

    return(
        <Container style={{flex:'1'}}>
      <div className="containerOne">
        <h1 className="text-danger">Authorize Signee's</h1>
        <table className="signee-table">
          <thead>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.role}</td>
                <td>{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
    )
}