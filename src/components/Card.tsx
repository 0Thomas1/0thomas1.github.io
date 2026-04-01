import { CodeXml, ExternalLink } from "lucide-react";

export interface CardProps {
  img?: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  link?: string; // ? means optional
  gitLink?: string;
}
const Card = ({
  img,
  title,
  category,
  tech,
  description,
  link,
  gitLink,
}: CardProps) => {
  return (
    <div className="card shadow-sm h-100" role="button" tabIndex={0}>
      {/* card top */}
      {img && (
        <img
          src={img}
          className="card-img-top"
          alt={title}
          style={{ objectFit: "cover", height: "200px" }}
        />
      )}

      {/* card body */}
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h4 className="card-title mb-0">{title}</h4>
          <span className="badge bg-primary">{category}</span>
        </div>
        <p className="card-text text-muted mb-4">{description}</p>

        {/* techs */}
        <div className="mt-auto">
          <div className="d-flex flex-wrap gap-2 mb-3">
            {tech.map((t) => (
              <span key={t} className="badge bg-secondary text-light fw-medium">
                {t.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* card footer */}
      <div className="card-footer bg-transparent border-top-0 d-flex gap-3 pb-3">
        {gitLink && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2"
          >
            <CodeXml size={18} />
            <span>Source</span>
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm d-flex align-items-center gap-2"
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
