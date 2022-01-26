import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./components/Todos";
import All from "./components/All";
import Completed from "./components/Completed";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Todos />}>
          <Route path="active" element={<All />} />
          <Route path="completed" element={<Completed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
