import { useEffect, useState } from "react";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PapersPage from "./pages/PapersPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import { siteData } from "./data/siteData";

const FALLBACK_PAGE = "home";

function getPageFromHash(hash) {
  const normalized = hash.replace(/^#\/?/, "").replace(/\/$/, "").trim();

  if (!normalized) {
    return FALLBACK_PAGE;
  }

  const knownPage = siteData.navigation.find((item) => item.id === normalized);

  return knownPage ? normalized : FALLBACK_PAGE;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === "undefined") {
      return FALLBACK_PAGE;
    }

    return getPageFromHash(window.location.hash);
  });

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#/");
    }

    const handleHashChange = () => {
      setCurrentPage(getPageFromHash(window.location.hash));
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const pageLabel =
      siteData.navigation.find((item) => item.id === currentPage)?.label ??
      siteData.siteTitle;

    document.title =
      currentPage === FALLBACK_PAGE
        ? siteData.siteTitle
        : `${pageLabel} | ${siteData.siteTitle}`;

    window.scrollTo(0, 0);
  }, [currentPage]);

  const sharedPageProps = {
    pages: siteData.pages,
  };

  const pageLookup = {
    home: (
      <HomePage
        hero={siteData.hero}
        home={siteData.home}
        papers={siteData.featuredPapers}
      />
    ),
    papers: <PapersPage {...sharedPageProps} papers={siteData.papers} />,
    team: <TeamPage {...sharedPageProps} teamSections={siteData.teamSections} />,
    projects: <ProjectsPage {...sharedPageProps} projects={siteData.projects} />,
    contact: <ContactPage {...sharedPageProps} contacts={siteData.contacts} />,
  };

  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />
      <div className="site-frame">
        <Header
          brand={siteData.brand}
          currentPage={currentPage}
          navigation={siteData.navigation}
        />

        <main className="site-main">{pageLookup[currentPage] ?? pageLookup.home}</main>
      </div>
    </div>
  );
}
