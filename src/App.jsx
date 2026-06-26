import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import CursorRipple from "./components/CursorRipple";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <CursorRipple/>
      <Introduction />
      <Skills />
      <Projects/>
    </>
  );
}

export default App;