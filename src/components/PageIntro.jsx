import SectionHeading from "./SectionHeading";

export default function PageIntro({ eyebrow, title, description, plain = false }) {
  return (
    <section className={`page-intro${plain ? " page-intro-plain" : ""}`}>
      <SectionHeading
        description={description}
        eyebrow={eyebrow}
        title={title}
      />
    </section>
  );
}
