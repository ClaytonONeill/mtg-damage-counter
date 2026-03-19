// Styles
import "./App.css";

// Context Hook
import { useGame } from "./context/useGame";

// Pages
import PromptPage from "./features/prompt/pages/PromptPage";

function App() {
  const { step } = useGame();

  return (
    <div className="app-container">
      {step === "PROMPT" && <PromptPage />}
      {step === "CUSTOMIZE" && <h1>Customize</h1>}
      {/* GoFirst and Game views follow the same pattern */}
    </div>
  );
}

export default App;
