'use client';

const Navbar = () => {
  const scroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed w-full bg-background text-muted-foreground z-50 ">
      <div className="max-w-4xl space-x-5 mx-auto flex justify-center md:justify-start p-4 px-20 text-xl">
        <a href="#skills" className="hover:text-primary" onClick={(e) => scroll(e, 'skills')}>
          Skills
        </a>
        <a href="#projects" className="hover:text-primary" onClick={(e) => scroll(e, 'projects')}>
          Projects
        </a>
        <a href="#blog" className="hover:text-primary" onClick={(e) => scroll(e, 'blog')}>
          Blog
        </a>
        <a href="#contact" className="hover:text-primary" onClick={(e) => scroll(e, 'contact')}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
