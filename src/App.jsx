import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import CursorRipple from "./components/CursorRipple";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <CursorRipple/>
      <Introduction />
      <About/>
      <Skills />
      <Projects/>
      <Contact/>

    </>
  );
}

export default App;