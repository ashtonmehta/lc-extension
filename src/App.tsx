import { useEffect } from "react";
import StatusForm from "./components/StatusForm";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Review from "./components/Review";
import { URL_PATTERN } from "./constants";
import { getProblemNameFromUrl } from "./utils";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { updateName, updateValidPage } from "./features/problemSlice";
import SignIn from "./components/SignIn";
import "./index.css";

function App() {
  const problemName = useAppSelector((state) => state.problemReducer.name);
  const isValidPage = useAppSelector(
    (state) => state.problemReducer.isValidPage
  );
  const username = useAppSelector((state) => state.authReducer.username);
  const dispatch = useAppDispatch();

  useEffect(() => {
    /**
     * Only allow this extension to run
     * on a LeetCode problem page
     * */
    async function checkIfValidPage() {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      const URL: string = tab.url!;

      if (URL_PATTERN.test(URL)) {
        dispatch(updateValidPage(true));
        const name: string = getProblemNameFromUrl(URL);
        dispatch(updateName(name));
      }
      
    }

    checkIfValidPage();
  }, [dispatch]);

  if (!username) {
    return <SignIn />;
  }

  return (
    <Container className="bg-customWhite w-[400px] h-[300px]">
      <NavBar />
      {isValidPage && problemName && (
        <StatusForm title={problemName} />
      )}
      <Review />
    </Container>
  );
}

export default App;
