import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HomePage } from "@pages/HomePage/index";
import { QuestionsPage } from "@pages/QuestionsPage";

import '@shared/styles/global.scss'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/index.html" element={<Navigate to="/home" />} />
          <Route path="/index.shtml" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/questions" element={<QuestionsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
