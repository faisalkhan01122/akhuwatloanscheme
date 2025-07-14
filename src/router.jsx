import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";

import ServicesPage from "./pages/ServicesPage";
import ImpactPage from "./pages/ImpactPage";
import LoanServicesPage from "./pages/LoanServicesPage";
import MicrofinanceLoansPage from "./pages/MicrofinanceLoansPage";
import PersonalLoansPage from "./pages/PersonalLoansPage";
import HealthcareLoansPage from "./pages/HealthcareLoansPage";
import EducationLoansPage from "./pages/EducationLoansPage";

import EmergencyLoansPage from "./pages/EmergencyLoansPage";
import ContactUsPage from "./pages/ContactUsPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import HousingLoansPage from "./pages/HousingLoansPage";
import BusinessLoansPage from "./pages/BusinessLoansPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import AkhuwatLoansPage from "./pages/AkhuwatLoansPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import OurValuesPage from "./pages/OurValuesPage";
import LeadershipPage from "./pages/LeadershipPage";
import ReportsPage from "./pages/ReportsPage";
import ReachPage from "./pages/ReachPage";
import FamilyEnterpriseLoansPage from "./pages/FamilyEnterpriseLoansPage";
import HealthLoansPage from "./pages/HealthLoansPage";
import MarriageLoansPage from "./pages/MarriageLoansPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AkhuwatLoansPage />,
      },
      {
        path: "about/story",
        element: <SuccessStoriesPage />,
      },
      {
        path: "impact/stories",
        element: <SuccessStoriesPage />,
      },

      {
        path: "about/values",
        element: <OurValuesPage />,
      },
      {
        path: "about/leadership",
        element: <LeadershipPage />,
      },

      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "impact",
        element: <ImpactPage />,
      },
      {
        path: "impact/reports",
        element: <ReportsPage />,
      },
      {
        path: "impact/reach",
        element: <ReachPage />,
      },

      {
        path: "loans",
        element: <LoanServicesPage />,
      },
      {
        path: "loans/family-enterprise",
        element: <FamilyEnterpriseLoansPage />,
      },
      {
        path: "loans/health",
        element: <HealthLoansPage/>,
      },
       {
        path: "loans/marriage",
        element: <MarriageLoansPage/>,
      },
      {
        path: "loans/business",
        element: <BusinessLoansPage />,
      },
      {
        path: "loans/agriculture",
        element: <MicrofinanceLoansPage />,
      },
      {
        path: "loans/personal",
        element: <PersonalLoansPage />,
      },
      {
        path: "loans/healthcare",
        element: <HealthcareLoansPage />,
      },
      {
        path: "loans/education",
        element: <EducationLoansPage />,
      },
      {
        path: "loans/housing",
        element: <HousingLoansPage />,
      },
      {
        path: "loans/emergency",
        element: <EmergencyLoansPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsConditionsPage />,
      },
      {
        path: "disclaimer",
        element: <DisclaimerPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "help-center",
        element: <HelpCenterPage />,
      },
    ],
  },
]);

export default router;
