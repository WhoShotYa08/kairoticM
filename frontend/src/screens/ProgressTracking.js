import { Container } from "react-bootstrap";
import Progress from "../components/progressCircle";

export default function ProgressTracking() {
  return (
    <Container>
      <div>
        <h1 className="text-danger">Progress Tracking</h1>
        <div className="d-flex flex-row my-5">
          <Progress
            color="teal"
            name="Nokuhle Ngubane"
            signed="Signed"
            val="inline"
          />
          <Progress
            color="teal"
            name="Adrien Belo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            signed="Signed"
            val="inline"
          />
          <Progress
            color="white"
            name="Brian Mabukwa&nbsp;&nbsp;&nbsp;&nbsp;"
            signed="Not Signed"
            val="inline"
          />
          <Progress
            color="white"
            name="Kgatliso Mokgatle&nbsp;&nbsp;&nbsp;"
            signed="Not Signed"
            val="none"
          />
        </div>
      </div>
    </Container>
  );
}
