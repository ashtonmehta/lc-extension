import { useEffect } from "react";
import StatusForm from "./components/StatusForm";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Review from "./components/Review";
import { URL_PATTERN } from "./constants";
import { getProblemNameFromUrl } from "./utils";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { updateName, updateValidPage } from "./features/problemSlice";
import "./index.css";

function App() {
  const problemName = useAppSelector((state) => state.problemReducer.name);
  const isValidPage = useAppSelector(
    (state) => state.problemReducer.isValidPage
  );
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

  return (
    <Container className="bg-customWhite w-[400px] h-[300px]">
      <NavBar />
      {isValidPage && problemName.length > 0 && (
        <StatusForm title={problemName} />
      )}
      <Review />
    </Container>
  );
}

export default App;
