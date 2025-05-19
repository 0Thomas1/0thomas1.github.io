import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import FadeIn from "./components/FadeIn";
import ContactForm from "./components/ContactForm";
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
      <ContactForm />
    </div>
  );
}

export default App;
