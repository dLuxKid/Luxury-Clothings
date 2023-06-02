import "./App.css";
import Navbar from "./components/Navbar";
import Routers from "./Routers/Routers";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="max-w-full">
      <Navbar />
      <Routers />
      <Footer />
    </main>
  );
}

export default App;
