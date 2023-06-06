// REACT
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// COMPONENT
import Navbar from "./components/Navbar";
import Routers from "./routing/Routers";
import Footer from "./components/Footer";
// HOOK
import useAuth from "./hooks/useAuth";
// REDUX
import { useSelector } from "react-redux";

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
