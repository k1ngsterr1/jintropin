import { HomePage } from "@pages/HomePage/index";
import { QuestionsPage } from "@pages/QuestionsPage";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import AdvantagesPage from "@pages/Advantages";
import CertificatePage from "@pages/Certificate";
import ContactsPage from "@pages/Contacts";
import ContraindicationsPage from "@pages/Contraindications";
import FeedbackPage from "@pages/Feedback";
import VerificationPage from "@pages/Verification";
import "@shared/styles/global.scss";

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
