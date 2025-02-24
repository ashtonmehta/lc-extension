import Container from "./Container";
import Header from "./Header";
import Button from "./Button";
import "../index.css";
import { useGetReviewProblemsQuery } from "../features/apiSlice";
import { Problem } from "../types";

const Review: React.FC = () => {
  const { data: problems, isSuccess } =
    useGetReviewProblemsQuery("ashtonmehta");

  if (!isSuccess) {
    return null;
  }

  const openLinksInNewTab = async () => {
    if (typeof chrome === "undefined") {
      return;
    }
    await Promise.all(
      problems.map((problem: Problem) => chrome.tabs.create({ url: problem.link }))
    );
  };

  return (
    isSuccess && (
      <Container>
        <Header level={2}>Review Problems</Header>
        <Container className="p-5 flex flex-row">
          <Button color="blue" onClick={openLinksInNewTab}>
            Open in New Tab
          </Button>
        </Container>
      </Container>
    )
  );
};

export default Review;
