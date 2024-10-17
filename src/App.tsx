import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
const App = () => {
  return (
    <div className="bg-black text-white">
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Works />
      </section>
    </div>
  );
};
export default App;
