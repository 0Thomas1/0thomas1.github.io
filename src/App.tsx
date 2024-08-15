import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import FadeIn from "./components/FadeIn";
function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <FadeIn>
        <Projects />
      </FadeIn>
      <Experience />
      <Education />
    </div>
  );
}

export default App;
