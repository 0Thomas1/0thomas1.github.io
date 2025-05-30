import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import FadeIn from "./components/FadeIn";
//import ContactForm from "./components/ContactForm";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        const webhookUrl = import.meta.env.VITE_VANCOUVER_TRAIL_WEBHOOK_URL;
        
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "page_loaded", timestamp: Date.now() }),
    });
  }, []);
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
