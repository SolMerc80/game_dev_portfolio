const Footer = () => {
  return (
    <footer className="mt-8 p-6 text-center border-t-2 border-[var(--border-color)] bg-[var(--color-parchment-200)] dark:bg-[#2a2a2a]">
      <p className="font-rpg text-xl text-[var(--color-ink-light)] dark:text-[#a0a0a0]">
        &copy; {new Date().getFullYear()} Divine.K Charamba (El Bandido)
      </p>
    </footer>
  );
};

export default Footer;
