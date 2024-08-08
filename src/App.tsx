import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HomePage } from "@pages/HomePage/index";
import { QuestionsPage } from "@pages/QuestionsPage";

import "@shared/styles/global.scss";
import AdvantagesPage from "@pages/Advantages";
import ContraindicationsPage from "@pages/Contraindications";
import CertificatePage from "@pages/Certificate";
import VerificationPage from "@pages/Verification";
import ContactsPage from "@pages/Contacts";
import FeedbackPage from "@pages/Feedback";

function App() {
  localStorage.setItem("theme", "dark");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/index.html" element={<Navigate to="/home" />} />
          <Route path="/index.shtml" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/advantages" element={<AdvantagesPage />} />
          <Route
            path="/contraindications"
            element={<ContraindicationsPage />}
          />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
