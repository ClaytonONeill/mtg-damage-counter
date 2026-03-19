// Styles
import "./App.css";

// Context Hook
import { useGame } from "./context/useGame";

// Pages
import PromptPage from "./features/prompt/pages/PromptPage";
import GoFirstPage from "./features/go-first/pages/GoFirstPage";

function App() {
  const { step } = useGame();

  return (
    <div className="app-container">
      {step === "PROMPT" && <PromptPage />}
      {step === "GO_FIRST" && <GoFirstPage />}
      {/* GoFirst and Game views follow the same pattern */}
    </div>
  );
}

export default App;
