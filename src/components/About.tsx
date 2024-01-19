import Container from "react-bootstrap/Container";
import { urls } from "../constants";

const About = () => {
  const openLinkInNewTab = (linkName: string) => {
    let url;
    if (linkName === "railsApi") {
      url = urls.railsBackendGitHubUrl;
    } else if (linkName === "rebrickableApi") {
      url = urls.rebrickableApiDocumentationUrl;
    }
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.opener = null;
    }
  };

  return (
    <Container fluid className="container over-background shaded-background">
      <br></br>
      <h1>About Page</h1>
      <h2>Welcome!</h2>
      <Container className="text-left narrow-container">
        <br></br>
        <h3>
          This app is designed to help you find Lego sets (
          <strong className="font-italic cyan-text">Search Lego Sets</strong>)
          and keep track of the sets you own (
          <strong className="font-italic cyan-text">My Sets</strong>), including
          the parts and instructions for those sets. Finally, you can use this
          app to find other sets that you can build with the parts and sets you
          already own (
          <strong className="font-italic cyan-text">Potential Builds</strong>).
        </h3>
        <br></br>
        <h3>
          For the database, I have built this{" "}
          <button onClick={() => openLinkInNewTab("railsApi")}>
            Rails Api
          </button>{" "}
          to harvest, organize, and create matches for you, but the data I
          harvested ultimately comes from the{" "}
          <button onClick={() => openLinkInNewTab("rebrickableApi")}>
            Rebrickable Api
          </button>
          .
        </h3>
        <br></br>
        <br></br>
        <h3>
          Explore the site using the{" "}
          <strong className="font-italic cyan-text">Navigation Bar</strong>{" "}
          above, and be sure to click the links on particular sets to see more
          information, such as:
        </h3>
        <Container className="text-center narrow-container">
          <h4>All the Parts of the set </h4>
          <h4>A Link to the Building Instructions of a Set</h4>
        </Container>
        <h3>
          After selecting some sets as your own, use the search features in the{" "}
          <strong className="font-italic cyan-text">Potential Builds</strong>{" "}
          section of the site to see what you can build with what you already
          own.
        </h3>
      </Container>
      <br></br>
      <br></br>
    </Container>
  );
};

export default About;
