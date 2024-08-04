import { Dropdown } from "react-bootstrap";
import "../assets/notifications.css";
import { MdTipsAndUpdates } from "react-icons/md";

const Messages = ({ message, time, color_ }) => {
  return (
    <>
      <hr className="py-0 my-2" />
      <Dropdown.Item eventKey="1" className="d-flex align-items-center py-0">
        <MdTipsAndUpdates size={40} color={color_} />
        <div className="ms-2 content">
          <p className="fs-9 mb-0 text-dark">{message}</p>
          <p
            className="fs-11 text-muted mb-0"
            style={{ fontSize: 13, color: "lightgrey" }}
          >
            {time}
          </p>
        </div>
      </Dropdown.Item>
    </>
  );
};

export default Messages;
