export const siteData = {
  siteTitle: "Cardiff University Computational Robotics Team",
  brand: {
    kicker: "Cardiff University",
    title: "Computational Robotics Team",
  },
  navigation: [
    {
      id: "home",
      label: "Home",
      href: "#/",
    },
    {
      id: "papers",
      label: "Published Papers",
      href: "#/papers",
    },
    {
      id: "team",
      label: "Team",
      href: "#/team",
    },
    {
      id: "projects",
      label: "Research Projects",
      href: "#/projects",
    },
    {
      id: "contact",
      label: "Contact",
      href: "#/contact",
    },
  ],
  hero: {
    eyebrow: "",
    title: "Cardiff University Computational Robotics Team",
    intro:
      "Research team founded at the School of Computer Science at Cardiff University in 2022. Focused on different research areas such as perception and navigation for autonomous robots, robot manipulation, object reconstruction and VR with shared autonomy.",
    supportingText:
      "",
    slides: [
      {
        image: "/cucr_team_2025.jpeg",
        alt: "Cardiff University Computational Robotics team group photo",
        caption:
          "Cardiff University Computational Robotics team group photo, 2025.",
      },
      {
        image: "/cucr_team_2024.JPG",
        alt: "Cardiff University Computational Robotics team group photo",
        caption:
          "Cardiff University Computational Robotics team group photo, 2024.",
      },
    ],
    primaryLink: {
      label: "See all papers",
      href: "#/papers",
    },
    secondaryLink: {
      label: "Meet the team",
      href: "#/team",
    },
  },
  home: {
    papersEyebrow: "Presented Papers",
    papersTitle: "Selected papers and presentations highlighted on the landing page.",
    papersDescription:
      "This section sits below the team photograph on the landing page and can feature the latest papers, conference presentations, or the group's most representative outputs.",
  },
  pages: {
    papers: {
      eyebrow: "Published Papers",
      title: "A complete list of the group's papers and scholarly output.",
      description:
        "Use this page for every paper you want visitors to browse, including journal articles, conference papers, workshop contributions, and preprints.",
    },
    team: {
      eyebrow: "Team",
      title: "Principal investigators, doctoral researchers, and collaborators.",
      description:
        "This page is organized by role so visitors can quickly understand the structure of the group and the people involved in each research area.",
    },
    projects: {
      eyebrow: "Research Projects",
      title: "A home for ongoing, completed, and upcoming research efforts.",
      description:
        "Populate these project cards with summaries, links, funding details, datasets, videos, or software repositories as needed.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Collaboration, enquiries, and student opportunities.",
      description:
        "Keep the core contact routes here, along with the location of the group and any preferred channels for project or PhD enquiries.",
    },
  },
  featuredPapers: [
    {
      title: "Placeholder Paper Title for the Home Page",
      venue: "Conference or Journal Name",
      year: "2026",
      authors: "First Author, Second Author, Third Author",
      summary:
        "A short summary placeholder for a paper featured on the main page. Replace this with the real title, authors, and contribution statement.",
      href: "https://example.com/paper-one",
      tag: "Featured",
    },
    {
      title: "Another Highlighted Publication Template",
      venue: "Robotics Venue",
      year: "2025",
      authors: "Author A, Author B, Author C",
      summary:
        "Use this card for another featured publication or conference paper that you want visitors to notice quickly when they open the site.",
      href: "https://example.com/paper-two",
      tag: "Recent",
    },
    {
      title: "Template Entry for a Presented Paper",
      venue: "Workshop or Symposium",
      year: "2025",
      authors: "Researcher One, Researcher Two",
      summary:
        "This slot can hold a third highlighted paper, poster, or invited talk entry depending on what you want to emphasize on the landing page.",
      href: "https://example.com/paper-three",
      tag: "Selected",
    },
  ],
  papers: [
    {
      title: "Placeholder Paper Title for the Home Page",
      venue: "Conference or Journal Name",
      year: "2026",
      authors: "First Author, Second Author, Third Author",
      summary:
        "A short summary placeholder for a paper featured on the main page. Replace this with the real title, authors, and contribution statement.",
      href: "https://example.com/paper-one",
      tag: "Featured",
    },
    {
      title: "Another Highlighted Publication Template",
      venue: "Robotics Venue",
      year: "2025",
      authors: "Author A, Author B, Author C",
      summary:
        "Use this card for another featured publication or conference paper that you want visitors to notice quickly when they open the site.",
      href: "https://example.com/paper-two",
      tag: "Recent",
    },
    {
      title: "Template Entry for a Presented Paper",
      venue: "Workshop or Symposium",
      year: "2025",
      authors: "Researcher One, Researcher Two",
      summary:
        "This slot can hold a third highlighted paper, poster, or invited talk entry depending on what you want to emphasize on the landing page.",
      href: "https://example.com/paper-three",
      tag: "Selected",
    },
    {
      title: "Journal Article Placeholder for the Full Papers Page",
      venue: "Robotics and Automation Journal",
      year: "2024",
      authors: "Author Name, Collaborator Name, Student Name",
      summary:
        "A placeholder for a journal article entry with room for a concise explanation of the paper's focus, result, or application area.",
      href: "https://example.com/paper-four",
      tag: "Journal",
    },
    {
      title: "Conference Paper Placeholder for a Navigation Study",
      venue: "International Robotics Conference",
      year: "2024",
      authors: "Research Group Member, External Collaborator",
      summary:
        "This example shows how the full papers page can hold a larger archive than the short list on the front page.",
      href: "https://example.com/paper-five",
      tag: "Conference",
    },
  ],
  teamSections: [
    {
      title: "Principal Investigators",
      description:
        "Use this section for the faculty leads or senior researchers responsible for the group's direction and supervision.",
      members: [
        {
          name: "Professor Name Placeholder",
          role: "Principal Investigator",
          affiliation: "Cardiff University",
          bio:
            "Short biography placeholder for the lead investigator, including research interests, leadership role, and key expertise.",
          researchAreas: ["Planning", "Navigation", "Robot Learning"],
          links: [
            {
              label: "Profile",
              href: "https://www.cardiff.ac.uk",
            },
            {
              label: "Email",
              href: "mailto:pi-placeholder@cardiff.ac.uk",
            },
          ],
        },
      ],
    },
    {
      title: "PhD Students",
      description:
        "Doctoral researchers, visiting students, or other postgraduate team members can be listed here.",
      members: [
        {
          name: "PhD Student Placeholder",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          bio:
            "A template profile for a doctoral student, with space for a short project description and research focus.",
          researchAreas: ["Human-Robot Interaction", "Perception"],
          links: [
            {
              label: "Profile",
              href: "https://www.cardiff.ac.uk",
            },
          ],
        },
        {
          name: "Second Student Placeholder",
          role: "PhD Researcher",
          affiliation: "Cardiff University",
          bio:
            "Another placeholder card to show how multiple students will sit together in the same section.",
          researchAreas: ["Embodied AI", "Assistive Robotics"],
          links: [
            {
              label: "Email",
              href: "mailto:student-placeholder@cardiff.ac.uk",
            },
          ],
        },
      ],
    },
    {
      title: "Collaborators",
      description:
        "External collaborators, partner institutions, or affiliated researchers can be grouped here.",
      members: [
        {
          name: "Collaborator Placeholder",
          role: "Research Collaborator",
          affiliation: "Partner Institution",
          bio:
            "Use this template for collaborators from other universities, labs, or industry partners connected to the group.",
          researchAreas: ["Field Robotics", "Multi-Robot Systems"],
          links: [
            {
              label: "Institution",
              href: "https://example.com",
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Project Template for an Ongoing Study",
      status: "Active",
      period: "2025 to present",
      summary:
        "A placeholder summary for an active research project, suitable for explaining the aim, the scientific question, or the system being developed.",
      focus:
        "Use this line for the expected impact, methods, or application domain of the project.",
      tags: ["Navigation", "Perception", "Real-World Deployment"],
      links: [
        {
          label: "Project page",
          href: "https://example.com/project-one",
        },
      ],
    },
    {
      title: "Project Template for a Completed Collaboration",
      status: "Completed",
      period: "2023 to 2025",
      summary:
        "A placeholder card for a finished project. This could later link to publications, datasets, code, or videos.",
      focus:
        "Useful for summarizing the main outcome, partner institutions, or what was delivered at the end of the project.",
      tags: ["HRI", "Evaluation", "Field Study"],
      links: [
        {
          label: "Repository",
          href: "https://github.com",
        },
        {
          label: "Video",
          href: "https://example.com/video",
        },
      ],
    },
    {
      title: "Project Template for an Upcoming Direction",
      status: "Planned",
      period: "Starting soon",
      summary:
        "Use this placeholder when you want to signal a new line of work, a funded initiative, or a collaboration currently being prepared.",
      focus:
        "This area can hold a one-line statement about the opportunity, funding source, or open participation call.",
      tags: ["Future Work", "Funding", "Collaboration"],
      links: [
        {
          label: "Learn more",
          href: "https://example.com/project-three",
        },
      ],
    },
  ],
  contacts: {
    message:
      "For collaboration enquiries, student opportunities, media requests, or general questions about the group, the entries below can be replaced with the preferred contact details.",
    methods: [
      {
        label: "General enquiries",
        value: "robotics-group@cardiff.ac.uk",
        href: "mailto:robotics-group@cardiff.ac.uk",
        detail: "Shared inbox placeholder for the whole team.",
      },
      {
        label: "Location",
        value: "School of Computer Science and Informatics, Cardiff University",
        detail: "Replace with building, room, and postal details if needed.",
      },
      {
        label: "Prospective students",
        value: "PhD and visiting researcher enquiries",
        detail:
          "Swap this placeholder for the exact person, form, or application route you want people to use.",
      },
    ],
    links: [
      {
        label: "University page",
        href: "https://www.cardiff.ac.uk",
      },
      {
        label: "GitHub",
        href: "https://github.com",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
      },
    ],
    note:
      "This panel can also include office hours, a collaboration note, lab access information, or a link to an external contact form.",
  },
  footer: {
    note:
      "Initial template for the Cardiff University Computational Robotics research website.",
  },
};
