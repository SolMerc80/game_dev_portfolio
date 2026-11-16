import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SunnyLandData = {
  '1': {
    title: 'SunnyLand',
    fullDescription: 'Play as a rodent collecting cherries and popping any creature that stands in your way. Beware, the possums are immune to damage so be sure to avoid them. Reach the goal to complete levels and be on the look out for power-ups to give yourself a boost and gems that are hidden. ',
    role: 'Lead Programmer',
    duration: '...',
    tech: ['Godot', 'GDScript',]
  }
};

const dummydata = {
  '2': {
    title: 'Coming Soon...',
    fullDescription: 'Coming Soon...',
    role: '...',
    duration: '...',
    tech: ['...']
  }
};

const dummydata2 = {
  '3': {
    title: 'Coming Soon...',
    fullDescription: 'Coming Soon...',
    role: '...',
    duration: '...',
    tech: ['...']
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = SunnyLandData[id] || dummydata['2'] || dummydata2['3']; 

  return (
    <div className="animate-in fade-in duration-500">
      <Link to="/" className="inline-flex items-center gap-2 font-rpg text-xl mb-6 hover:text-[var(--color-ruby)] transition-colors">
        <ArrowLeft size={20} /> Return to Tavern
      </Link>
      
      <div className="rpg-box p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl mb-6 text-center border-b-2 border-[var(--border-color)] pb-4">
          Tome of Knowledge: {project.title}
        </h1>
        
        {/* Main Banner */}
        <div className="w-full h-64 md:h-96 bg-black/20 border-2 border-[var(--border-color)] mb-8 flex items-center justify-center">
          <span className="font-rpg text-2xl text-[var(--color-ink-light)]">[ Gameplay Video / Hero Image ]</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 text-lg">
            <h2 className="font-rpg text-2xl text-[var(--color-ruby)]">The Legend</h2>
            {project.fullDescription.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="p-4 border-2 border-[var(--border-color)] bg-[var(--color-parchment-100)]">
              <h3 className="font-rpg text-xl mb-2 text-[var(--color-emerald)]">Quest Details</h3>
              <ul className="space-y-2">
                <li><strong>Role:</strong> {project.role}</li>
                <li><strong>Duration:</strong> {project.duration}</li>
              </ul>
            </div>
            
            <div className="p-4 border-2 border-[var(--border-color)] bg-[var(--color-parchment-100)]">
              <h3 className="font-rpg text-xl mb-2 text-[var(--color-emerald)]">Tools of the Trade</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-sm font-rpg px-2 py-1 bg-[var(--color-wood-800)] text-[var(--color-parchment-100)] rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="rpg-button w-full">Play Game (External Link)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
