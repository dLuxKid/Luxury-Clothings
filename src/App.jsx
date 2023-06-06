import "./App.css";
import Navbar from "./components/Navbar";
import Routers from "./Routers/Routers";
import Footer from "./components/Footer";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { checkAuthState } = useAuth();

  const authChecked = useSelector((state) => state.auth.authChecked);

  useEffect(() => {
    document.body.style.zoom = "100%";
    window.scrollTo(0, 0);
    checkAuthState();
  }, []);

  if (!authChecked) {
    return null;
  }

  return (
    <main className="max-w-full">
      <BrowserRouter>
        <Navbar />
        <Routers />
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
