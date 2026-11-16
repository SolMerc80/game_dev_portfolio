import { Shield, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl md:text-5xl mb-8 font-rpg text-center text-[var(--color-emerald)]">Character Sheet</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Stats */}
        <div className="rpg-box p-6 flex flex-col gap-6">
          <h2 className="text-2xl border-b-2 border-[var(--border-color)] pb-2">Base Stats</h2>
          
          <div className="space-y-4 font-rpg text-xl">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><Heart className="text-red-500" size={20}/> HP (Stamina):</span>
              <span>100/100</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><Zap className="text-blue-500" size={20}/> MP (Creativity):</span>
              <span>999/999</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2"><Shield className="text-gray-500" size={20}/> DEF (Debugging):</span>
              <span>85</span>
            </div>
          </div>

          <h2 className="text-2xl border-b-2 border-[var(--border-color)] pb-2 mt-4">Equipped Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Godot</li>
            <li>React / Web</li>
          </ul>
        </div>

        {/* Right Column - Lore */}
        <div className="rpg-box p-6 lg:col-span-2 flex flex-col gap-4">
          <h2 className="text-2xl border-b-2 border-[var(--border-color)] pb-2">Character Lore</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Greetings! I am a passionate game developer and an enthusiastic gamer. My goal is to become one of the biggest names in the game development industry and I plan to make projects to help me understand game development and build experience.
            </p>

            <p>
              This portfolio shows all 2D and RPG based projects that I have or will work on.
            </p>
          </div>
          
          <div className="mt-8">
            <button className="rpg-button">Download Scroll (Resume)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
