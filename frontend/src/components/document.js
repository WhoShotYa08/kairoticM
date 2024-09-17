const Document = ({date, id, name, category, link}) => {
  return (
    <tr >
      {/* <th scope="row">{id}</th> */}
      <td>{name}</td>
      {/* <td>{category}</td> */}
      <td>{date}</td>
      <td >{link}</td>
    </tr>
  );
};

export default Document;
