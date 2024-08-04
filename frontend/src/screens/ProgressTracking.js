import { Container } from "react-bootstrap";
// import Progress from "../components/progressCircle";
import AuthorizedUsers from "../components/authorizedUsers";

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
  return (
      <div className="containerOne table-bordered h-100 table-responsive ">
        <h4 className="text-success">Process Tracking</h4>
        <table class="table table-light table-hover table-striped ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Approved</th>
            </tr>
          </thead>
          <tbody>
            {usersAuthorized.map((item) => (
              <AuthorizedUsers
                name={item.name}
                surname={item.surname}
                approve={item.approve}
                key={item.id}
              />
            ))}
          </tbody>
        </table>
      </div>
  );
}
