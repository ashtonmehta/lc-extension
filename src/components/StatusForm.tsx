import Button from "./Button";
import Header from "./Header";
import Container from "./Container";
import "../index.css";

interface StatusFormProps {
  title: string;
}

const StatusForm: React.FC<StatusFormProps> = ({ title }) => {
  return (
    <Container>
      <Header level={2}>{`Current Problem: ${title}`}</Header>
      <Container className="m-2 flex flex-row ">
        <Button
          color="green"
          onClick={() => {
            window.close();
          }}
        >
          Mastered
        </Button>
        <Button
          color="yellow"
          onClick={() => {
            window.close();
          }}
        >
          Needed Hint
        </Button>
        <Button
          color="red"
          onClick={() => {
            window.close();
          }}
        >
          Needed Solution
        </Button>
      </Container>
    </Container>
  );
};

export default StatusForm;
