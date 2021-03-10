import "./App.css";
import Corona from "./pages/Corona";
import { Provider } from "./context";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Vaccine from "./pages/Vaccine";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Provider>
      <Router>
        {" "}
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Corona} />
            <Route exact path="/vaccine" component={Vaccine} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
