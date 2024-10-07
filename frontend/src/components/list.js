import React, { useState } from "react";
import { TableRow, TableCell } from "semantic-ui-react";
import { Checkbox } from "semantic-ui-react";

const TableList = ({ name, date }) => {
  // Track the checkbox state
  const [checked, setChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>
        {/* Use Semantic UI Checkbox */}
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </TableCell>
    </TableRow>
  );
};

export default TableList;