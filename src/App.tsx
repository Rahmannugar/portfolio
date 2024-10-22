import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
const App = () => {
  return (
    <div className="bg-black overflow-hidden h-screen w-screen text-white">
      <div>
        <Navbar />
        <section>
          <Hero />
        </section>
        <section>
          <Works />
        </section>
      </div>
    </div>
  );
};
export default App;
