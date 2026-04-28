import PageIntro from "../components/PageIntro";
import TeamSection from "../components/TeamSection";

export default function TeamPage({ pages, teamSections }) {
  return (
    <>
      <PageIntro plain {...pages.team} />

      <div className="stacked-sections">
        {teamSections.map((section) => (
          <TeamSection key={section.title} section={section} />
        ))}
      </div>
    </>
  );
}
