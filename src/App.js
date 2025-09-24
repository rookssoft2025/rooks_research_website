import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Pages/Navbar";
import SchoolNews from "./Pages/SchoolNews";
import AcademicAssistance from "./Pages/AcademicAssistance";
import PhDResearchWebsite from "./Pages/planets";
import RRCDesign from "./Pages/RRCDesign";
import ResearchServices from "./Pages/ResearchServices";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import JournalPortal from "./Pages/JournalPortal";
import JournalLogin from "./Pages/jTeam";
import JournalDashboard from "./Pages/JournalDashboard";
import ClientLogin from "./Pages/ClientLogin";
import ClientReview from "./Pages/ClientReview";
import SplashScreen from "./Pages/SplashScreen";
import SupportServices from "./Pages/SupportServices";
import AboutUs from "./Pages/AboutUs";
import CareersPage from "./Pages/CareersPage";
import Journal_client from "./Pages/Journal_client";
import WritingPage from "./Components/WritingPage";
import JournalMainPage from "./Components/JournalMainPage";
import ThesisWritingServices from "./Components/ThesisWritingServices";
import Implementation from "./Components/Implementation";
import Footer from "./Pages/Footer";
import AtoZResearch from "./Pages/AtoZResearch";
import Internship from "./Pages/Internship";
import TabBar from "./Pages/TabBar";
import AchieverServices from "./Pages/AchieverServices";
import FormComponent from "./Pages/FormComponent";
import ScrollToTopButton from "./Pages/ScrollToTopButton";
import ContactUs from "./Pages/ContactUs";
import PaperReview from "./Pages/PaperReview";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<SchoolNews/>} />
<Route path="/academic-assistance" element={<AcademicAssistance />} />
        <Route path="/research-services" element={<ResearchServices />} />
        <Route path="/rrc-design" element={<RRCDesign />} />
        <Route path="/phd-research" element={<PhDResearchWebsite />} />
         {/* Journal-related routes */}
         <Route path="/splashscreen" element={<SplashScreen />} />
         <Route path="/client-portal" element={<JournalPortal />} />
        <Route path="/journal-login" element={<JournalLogin />} />
        {/* <Route path="/journal-dashboard" element={<JournalDashboard />} /> */}
<Route path="/journal-dashboard" element={<PaperReview/>} />
        {/* Client-related routes */}
        <Route path="/client-login" element={<ClientLogin/>} />
        <Route path="/client-review" element={<ClientReview />} />
        <Route path="/support-services" element={<SupportServices/>}></Route>
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/journal-portal" element={<Journal_client />} />
        <Route path="/writingPage" element={<WritingPage/>} />
        <Route path="/journal-page" element={<JournalMainPage/>} />
        <Route path="/thesis-page" element={<ThesisWritingServices/>} />
        <Route path="/implementation" element={<Implementation />} />
        <Route path="/atoz-research" element={<AtoZResearch/>}/>
        <Route path="/internship-program" element={<Internship/>}/>
        <Route path="/journal" element={<TabBar/>}/>
        <Route path="/achiever-services" element={<AchieverServices/>}/>
        <Route path="/enquiry" element={<FormComponent/>}/>
        <Route path="/contactUS" element={<ContactUs/>}/>
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>

  );
};

export default App;
