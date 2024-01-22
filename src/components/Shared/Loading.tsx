import { textLabels } from "../../constants";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => (
  <>
    <Spinner animation="border" role="status" variant="light" />
    <span className="over-background large-font">
      {" "}
      {textLabels.loadingLabel}
    </span>
  </>
);

export default Loading;
