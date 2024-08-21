import Container from "./Container";
import Header from "./Header";
import Button from "./Button";
import "../index.css";

const Review: React.FC = () => {
  return (
    <Container>
      <Header level={2}>Review Problems</Header>
      <Container className="p-5 flex flex-row">
        <Button color="blue" onClick={() => {window.close()}}>
          Open in New Tab
        </Button>
      </Container>
    </Container>
  );
};

export default Review;
