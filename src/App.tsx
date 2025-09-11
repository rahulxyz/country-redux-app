import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Fish from "./page/fish";
import BearPage from "./page/bear";
import CountryPage from "./page/country";
import Todo from "./page/todo";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/fish" element={<Fish/>}></Route>
            <Route path="/bear" element={<BearPage/>}></Route>
            <Route path="/country" element={<CountryPage/>}></Route>
            <Route path="/todo" element={<Todo />}></Route>

            <Route path="/" element={<>Main</>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
