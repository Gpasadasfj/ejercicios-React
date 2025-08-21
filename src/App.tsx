import "./App.css";
import Dashboard from "./components/Dashboard";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
