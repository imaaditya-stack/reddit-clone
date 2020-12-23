import React from "react";
import { Dropdown } from "react-bootstrap";

function DropdownItem({ label, Icon }) {
  return (
    <Dropdown.Item className="pl-3">
      <Icon style={{ color: "#555" }} />
      <span className="pl-2" style={{ fontSize: 14 }}>
        {label}
      </span>
    </Dropdown.Item>
  );
}

export default DropdownItem;
