import { PrimaryButton, SecondaryButton } from "./components/buttons/Button";
import { ThemeProvider } from "styled-components";
import { jShine, ohHappiness } from "./components/utils/themes";
import "./App.css";
import { CgAirplane } from "react-icons/cg";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={jShine}>
        <SecondaryButton
          icon={CgAirplane}
          isLeft={false}
          modifiers="large"
          disabled
        >
          Click
        </SecondaryButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
