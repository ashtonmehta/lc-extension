import Button from "./Button";
import Header from "./Header";
import Container from "./Container";
import "../index.css";
import { useCreateAttemptMutation } from "../features/apiSlice";
import { AttemptStatus } from "../types";

interface StatusFormProps {
  title: string;
}

interface ButtonData {
  label: string;
  color: "green" | "yellow" | "red" | "blue";
  status: AttemptStatus;
}

const StatusForm: React.FC<StatusFormProps> = ({ title }) => {

  const [createAttempt] = useCreateAttemptMutation();

  const handleCreateAttempt = (status: AttemptStatus) => {
    createAttempt({
      username: "ashtonmehta",
      problemName: "two-sum",
      status: status,
      date: new Date(),
    });
  }

  const attemptButtons: ButtonData[] = [
    { label: "Mastered", color: "green", status: AttemptStatus.MASTERED },
    { label: "Needed Hint", color: "yellow", status: AttemptStatus.NEEDED_HINT },
    { label: "Needed Solution", color: "red", status: AttemptStatus.NEEDED_SOLUTION },
  ];

  return (
    <Container>
      <Header level={2}>{`Current Problem: ${title}`}</Header>
      <Container className="m-2 flex flex-row ">
        {attemptButtons.map(({label, color, status}, index) => (
          <Button
            key={index}
            color={color}
            onClick={() => handleCreateAttempt(status)}
          >
            {label}
          </Button>
        ))}
      </Container>
    </Container>
  );
};

export default StatusForm;
