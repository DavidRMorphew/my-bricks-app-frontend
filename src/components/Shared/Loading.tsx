import Spinner from "react-bootstrap/Spinner";
import { textLabels } from "../../constants";

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
