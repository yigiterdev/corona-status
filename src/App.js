import "./App.css";
import Corona from "./Corona";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="app">
        <Corona />
      </div>
    </Provider>
  );
}

export default App;
