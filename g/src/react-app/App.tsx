import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "@/react-app/components/Layout";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ServicesPage from "@/react-app/pages/Services";
import SolutionsPage from "@/react-app/pages/Solutions";
import TrainingsPage from "@/react-app/pages/Trainings";
import CoursesPage from "@/react-app/pages/Courses";
import InternshipsPage from "@/react-app/pages/Internships";
import CareersPage from "@/react-app/pages/Careers";
import ClientsPage from "@/react-app/pages/Clients";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/trainings" element={<TrainingsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
