import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import {SendFeedback} from "./components/SendFeedback";
import { GetFeedback } from "./components/FetchFeedback";
import { createContext, useState } from "react";

const pubKeyData = createContext();

function App() {
  const [pubKey, _setPubKey] = useState("");

  return (
    <div className="App">
      <Header pubKey={pubKey} setPubKey={_setPubKey} />
      <pubKeyData.Provider value={pubKey}>
        <div>
          <SendFeedback />
          <GetFeedback />
        </div>
      </pubKeyData.Provider>
    </div>
  );
}

export default App;
export { pubKeyData };