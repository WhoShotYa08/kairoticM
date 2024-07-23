const Document = ({date, id, name, category, signature}) => {
  return (
    <tr >
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{category}</td>
      <td>{date}</td>
      <td >{signature}</td>
    </tr>
  );
};

export default Document;
