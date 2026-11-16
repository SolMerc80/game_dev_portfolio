import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, tags, image }) => {
  return (
    <div className="rpg-box flex flex-col h-full group hover:-translate-y-1 transition-transform duration-200">
      <div className="h-48 border-b-2 border-[var(--border-color)] overflow-hidden bg-black/10">
        {/* Placeholder for game thumbnail */}
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-rpg text-[var(--color-ink-light)] text-2xl">
            [ Image Missing ]
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl mb-2 font-bold">{title}</h3>
        <p className="text-sm mb-4 flex-grow line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs font-rpg px-2 py-1 bg-[var(--color-wood-800)] text-[var(--color-parchment-100)] rounded-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <Link to={`/project/${id}`} className="rpg-button w-full text-center mt-auto text-sm py-2">
          Inspect Item
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
