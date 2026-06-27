import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import CursorRipple from "./components/CursorRipple";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CursorRipple/>
      <Introduction />
      <Skills />
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;