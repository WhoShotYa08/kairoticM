import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import "../assets/notifications.css";
import Messages from "./messages";
import { FaAngleRight } from "react-icons/fa6";

const CustomDropdownItem = () => {
  const notifications = [
    {
      message: "Electric Blueprints uploaded",
      time: "5 hours ago",
      color_: "blue",
    },
    {
      message: "Adrien Belo Approved Electric Blueprints",
      time: "2 hours ago",
      color_: "green",
    },
    {
      message: "Nokuhle Ngubae Denied Electric Blueprints",
      time: "1 hours ago",
      color_: "red",
    },
    {
      message: "Please update the wiring on the Electrical Blueprints",
      time: "30 minutes ago",
      color_: "orange",
    },
  ];
  return (
    <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic">
        <FaBell color="grey" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu">
        <h6 className="text-center fw-bold pt-2 pb-0">
          You have 4 new notifications
        </h6>
        {notifications.map((item) => (
          <Messages
            iconName={item.iconName}
            message={item.message}
            time={item.time}
            color_={item.color_}
          />
        ))}
        <hr className="py-0 my-0"/>
        <div className="d-flex justify-content-around h-25">
          <p className="align-self-center mt-2">See all notifications</p>
          <button className="btn btn-outline h-25">
            <FaAngleRight />
          </button>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdownItem;
