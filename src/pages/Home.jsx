import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const dummyProjects = [
  {
    id: '1',
    title: 'SunnyLand',
    description: 'A 2D pixel platformer game of a rodent collecting cherries and other collectables while battling  ',
    tags: ['Godot', 'GDScript', '2D', 'Pixel Art'],
    image: null
  },
  {
    id: '2',
    title: 'Coming Soon...',
    description: 'Coming Soon...',
    tags: ['...'],
    image: null
  },
  {
    id: '3',
    title: 'Coming Soon...',
    description: 'Coming Soon...',
    tags: ['...'],
    image: null
  }
];

const Home = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      
      <section id="quest-log" className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 flex-grow bg-[var(--border-color)]"></div>
          <h2 className="text-3xl font-rpg text-center m-0">Quest Log (Projects)</h2>
          <div className="h-1 flex-grow bg-[var(--border-color)]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
