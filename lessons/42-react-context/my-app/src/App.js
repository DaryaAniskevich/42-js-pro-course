import "./App.css";
import RenderPosts from "./components/renderPosts/RenderPosts";
import { ThemeProvider } from "./components/themeContext/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <RenderPosts />
      </ThemeProvider>
    </div>
  );
}

export default App;
