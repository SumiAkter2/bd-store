import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Main from "./Layout/Main";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Main />
    </>
  );
}

export default App;
