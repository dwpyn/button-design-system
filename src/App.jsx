import { PrimaryButton, SecondaryButton } from "./components/buttons/Button";
import { ThemeProvider } from "styled-components";
import { jShine, ohHappiness } from "./components/utils/themes";
import "./App.css";
import { CgAirplane } from "react-icons/cg";

function App() {
  return (
    <div className="App">
      <SecondaryButton>test</SecondaryButton>
    </div>
  );
}

export default App;
