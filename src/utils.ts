import { PROBLEM_NAME_INDEX } from "./constants";

const formatProblemName: (problemName: string) => string = (problemName) => {
  return problemName
    .replace(/-/g, " ")
    .replace(/\b[a-z]/g, (char) => char.toUpperCase());
};

const getProblemNameFromUrl: (url: string) => string = (url) => {
  const urlParts = url.split("/");
  return formatProblemName(urlParts[PROBLEM_NAME_INDEX]);
};

export { getProblemNameFromUrl };
