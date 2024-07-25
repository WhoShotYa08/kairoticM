import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const AuthorizedUsers = ({name, surname, approve}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{approve ? <TiTick size={25} color="green"/> : approve == null? "pending": <ImCross color="red" size={18} />}</td>
    </tr>
  );
};

export default AuthorizedUsers;
