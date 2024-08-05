import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
