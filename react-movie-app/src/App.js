import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./routes/Main";
import Home from "./routes/Home";
import Home2 from "./routes/Home2";
import Detail from "./routes/Detail";
import Detail2 from "./routes/Detail2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movierating9" element={<Home />}></Route>
        <Route path="/movierating8" element={<Home2 />}></Route>
        <Route path="/movierating9/:id" element={<Detail />}></Route>
        <Route path="/movierating8/:id" element={<Detail2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
