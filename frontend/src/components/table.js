import React from "react";
import {
  TableRow,
  TableCell,
  Button,
} from "semantic-ui-react";

const TableData = ({ name, url, date }) => (
  <TableRow textColor="white">
    <TableCell textColor="white">{name}</TableCell>
    <TableCell>{date}</TableCell>
    <TableCell>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button icon="download" />
      </a>
    </TableCell>
  </TableRow>
);

export default TableData;
