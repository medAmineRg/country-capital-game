import "./App.css";
import CountryCapitalGame from "./components/CountryCapitalGame";

function App() {
  return (
    <>
      <CountryCapitalGame data={{ Germany: "Berlin", Maroc: "Rabat" }} />
    </>
  );
}

export default App;
