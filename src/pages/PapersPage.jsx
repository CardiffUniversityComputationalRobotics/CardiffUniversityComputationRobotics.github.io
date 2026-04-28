import PageIntro from "../components/PageIntro";
import PaperCard from "../components/PaperCard";

function getYearSectionId(year) {
  return `papers-${String(year).replace(/[^a-z0-9_-]/gi, "-")}`;
}

function getSortedYearGroups(papers) {
  const years = [...new Set(papers.map((paper) => paper.year).filter(Boolean))].sort(
    (firstYear, secondYear) =>
      Number.parseInt(secondYear, 10) - Number.parseInt(firstYear, 10) ||
      String(secondYear).localeCompare(String(firstYear)),
  );

  return years.map((year) => ({
    papers: papers.filter((paper) => paper.year === year),
    year,
  }));
}

export default function PapersPage({ pages, papers }) {
  const yearGroups = getSortedYearGroups(papers);

  const scrollToYear = (year) => {
    document.getElementById(getYearSectionId(year))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <PageIntro plain {...pages.papers} />

      <section className="page-section">
        <nav className="paper-year-slider" aria-label="Published papers by year">
          {yearGroups.map(({ year }) => (
            <button
              className="paper-year-button"
              key={year}
              onClick={() => scrollToYear(year)}
              type="button"
            >
              {year}
            </button>
          ))}
        </nav>

        <div className="paper-year-sections">
          {yearGroups.map(({ papers: groupedPapers, year }) => (
            <section
              className="paper-year-section"
              id={getYearSectionId(year)}
              key={year}
            >
              <h2 className="paper-year-title">{year}</h2>
              <div className="paper-grid">
                {groupedPapers.map((paper) => (
                  <PaperCard key={`${paper.title}-${paper.year}`} paper={paper} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
