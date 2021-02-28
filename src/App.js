import "./App.css";
import Corona from "./pages/Corona";
import { Provider } from "./context";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Provider>
      <div className="app">
        <Navbar />
        <Corona />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
