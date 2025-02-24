import Button from "./Button";
import Header from "./Header";
import Container from "./Container";
import "../index.css";
import { useCreateAttemptMutation } from "../features/apiSlice";
import { AttemptStatus } from "../types";
import { useAppSelector } from "../app/hooks";

interface StatusFormProps {
  title: string;
}

interface ButtonData {
  label: string;
  color: "green" | "yellow" | "red" | "blue";
  status: AttemptStatus;
}

const StatusForm: React.FC<StatusFormProps> = ({ title }) => {
  const username = useAppSelector((state) => state.authReducer.username);
  const problemName = useAppSelector((state) => state.problemReducer.name);

  const [createAttempt] = useCreateAttemptMutation();

  const handleCreateAttempt = (status: AttemptStatus) => {
    if (!username || !problemName) return;
    createAttempt({
      username,
      problemName,
      status: status,
      date: new Date(),
    });
    window.close();
  };

  const attemptButtons: ButtonData[] = [
    { label: "Mastered", color: "green", status: AttemptStatus.MASTERED },
    {
      label: "Needed Hint",
      color: "yellow",
      status: AttemptStatus.NEEDED_HINT,
    },
    {
      label: "Needed Solution",
      color: "red",
      status: AttemptStatus.NEEDED_SOLUTION,
    },
  ];

  return (
    <Container>
      <Header level={2}>{`Current Problem: ${title}`}</Header>
      <Container className="m-2 flex flex-row ">
        {attemptButtons.map(({ label, color, status }, index) => (
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
