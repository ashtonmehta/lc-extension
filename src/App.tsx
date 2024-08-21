import { useState, useEffect } from "react";
import StatusForm from "./components/StatusForm";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Review from "./components/Review";
import { URL_PATTERN } from "./constants";
import { getProblemNameFromUrl } from "./utils";
import "./index.css";

function App() {
  const [isValidPage, setIsValidPage] = useState(true);
  const [problemName, setProblemName] = useState("");

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

      if (!URL_PATTERN.test(URL)) {
        setIsValidPage(false);
      }

      setProblemName(getProblemNameFromUrl(URL));
    }
    checkIfValidPage();
  }, []);

  return (
    <Container className="bg-customWhite w-[400px] h-[300px]">
      <NavBar />
      {isValidPage && problemName.length > 0 && <StatusForm title={problemName} />}
      <Review />
    </Container>
  );
}

export default App;
