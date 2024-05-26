import { FaLongArrowAltRight } from "react-icons/fa";

export default function Progress({ color, name, signed, val }) {
  return (
    <div className="d-flex flex-row">
      <div>
        <div
          style={{ width: "80%", height: "50%", backgroundColor: color }}
          className="rounded-circle py-5 px-3 border"
        ></div>
        <p className="p-0 m-0">{name}</p>
        <p className="p-0 m-0">{signed}</p>
      </div>
      <span className="d-inline mx-3 my-3">
        <FaLongArrowAltRight style={{ display: val }} size={60} />
      </span>
    </div>
  );
}