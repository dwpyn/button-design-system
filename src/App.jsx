import { PrimaryButton, SecondaryButton } from "./components/buttons/Button";
import { ThemeProvider } from "styled-components";
import { jShine, ohHappiness } from "./components/utils/themes";
import "./App.css";
import { CgAirplane } from "react-icons/cg";

function App() {
  return (
    <div className="App">
      <PrimaryButton icon={CgAirplane}>Click</PrimaryButton>
    </div>
  );
}

export default App;
