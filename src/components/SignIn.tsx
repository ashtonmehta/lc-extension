import Container from "./Container";
import Header from "./Header";
import Button from "./Button";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { signIn } from "../features/authSlice";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign in");
    dispatch(signIn(username));
  };

  return (
    <Container className="bg-customWhite w-[200px] h-[200px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <Header level={2}>Sign In</Header>
        <input
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full max-w-sm p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          color="blue"
          onClick={() => console.log("Sign in")}
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
