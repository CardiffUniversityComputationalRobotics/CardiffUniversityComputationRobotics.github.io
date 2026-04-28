import SmartLink from "./SmartLink";

function getYoutubeEmbedUrl(url) {
  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");
    let videoId = null;

    if (hostname === "youtu.be") {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[0];
    } else if (
      hostname === "youtube.com" ||
      hostname.endsWith(".youtube.com") ||
      hostname === "youtube-nocookie.com" ||
      hostname.endsWith(".youtube-nocookie.com")
    ) {
      if (parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/").filter(Boolean)[1];
      } else if (parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/").filter(Boolean)[1];
      } else {
        videoId = parsedUrl.searchParams.get("v");
      }
    }

    return videoId ? `https://www.youtube.com/embed/${encodeURIComponent(videoId)}` : null;
  } catch {
    return null;
  }
}

export default function PaperCard({ compact = false, paper }) {
  const titleHref = paper.titleHref ?? paper.href;
  const youtubeEmbedUrl = compact ? null : getYoutubeEmbedUrl(paper.youtubeUrl);
  const paperLinks =
    compact || !Array.isArray(paper.links)
      ? []
      : paper.links.filter((link) => link.href && link.label);

  return (
    <article className={`paper-card${compact ? " paper-card-compact" : ""}`}>
      <div className="paper-meta">
        <span>{paper.venue}</span>
        <span>{paper.year}</span>
        {paper.tag ? <span className="paper-chip">{paper.tag}</span> : null}
      </div>

      <h3 className="paper-title">
        {titleHref ? (
          <SmartLink className="paper-title-link" href={titleHref}>
            {paper.title}
          </SmartLink>
        ) : (
          paper.title
        )}
      </h3>

      {paper.authors ? <p className="paper-authors">{paper.authors}</p> : null}
      {paper.summary ? <p className="paper-summary">{paper.summary}</p> : null}

      {youtubeEmbedUrl ? (
        <div className="paper-video">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={youtubeEmbedUrl}
            title={`${paper.title} video`}
          />
        </div>
      ) : null}

      {paperLinks.length ? (
        <div className="inline-links paper-links">
          {paperLinks.map((link) => (
            <SmartLink
              className="text-link"
              href={link.href}
              key={`${paper.title}-${link.label}`}
              label={link.label}
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
