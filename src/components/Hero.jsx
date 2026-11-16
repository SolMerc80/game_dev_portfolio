import { motion } from 'framer-motion';

const Hero = () => {
  const line1 = "Welcome, Traveler.";
  const line2 = "I am a Game Developer forging digital worlds.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.08 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mb-12">
      <div className="rpg-box p-8 md:p-12 min-h-[300px] flex flex-col justify-center items-start">
        <motion.h1 
          className="text-4xl md:text-6xl mb-4 text-[var(--color-ruby)]"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line1.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl mb-8 font-rpg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {line2}
        </motion.p>
        
        <motion.button 
          className="rpg-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, type: 'spring', bounce: 0.5 }}
          onClick={() => document.getElementById('quest-log').scrollIntoView({ behavior: 'smooth' })}
        >
          View Quest Log
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
