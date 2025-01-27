import Image from 'next/image';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import ContactButton from '@/components/contact-button';
import Navbar from '@/components/navbar/navbar';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';

const intro =
  "Hi, I'm Roko — a Software Developer with 6+ years of professional experience. I love learning new things, building fun side projects, and writing about software development.";

const Home = () => {
  function socialMedia() {
    return (
      <>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <a href="https://github.com/kova98" className="hover:bg-gray-800 hover:rounded">
            <GitHubLogoIcon className="h-12 w-12" />
          </a>
          <a href="https://www.linkedin.com/in/kova98/" className="hover:bg-gray-800 hover:rounded">
            <LinkedInLogoIcon className="h-12 w-12" />
          </a>
          <a href="https://medium.com/@kova98" className="hover:bg-gray-800 hover:rounded">
            <Image src="/medium-white.svg" height={50} width={50} alt="medium logo" />
          </a>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Mobile Hero Section */}
      <div className="flex flex-col h-[calc(100vh-64px)] justify-between items-center p-4 lg:hidden">
        <div className={'flex-grow'}></div>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48">
            <Image src="/roko.jpg" height={250} width={250} className={'rounded-full'} alt="portrait" />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-4xl font-bold text-center">Roko Kovač</h1>
            <h2 className="uppercase mt-2 mb-4 text-xl font-bold text-center">Software Developer</h2>
          </div>
          <p className="pb-4 text-center pt-5 text-foreground">{intro}</p>
          <ContactButton className="mt-3" />
        </div>
        <div className={'flex-grow'}></div>
        <div className="scale-50">{socialMedia()}</div>
      </div>

      {/* Desktop Hero Section */}
      <div className=" flex-col h-[calc(100vh-64px)] justify-center items-center p-4 mt-16 hidden lg:flex">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 max-w-4xl">
          <div className={'flex-grow'}></div>
          <div className="flex flex-col items-center lg:items-start lg:w-2/5 mb-10 lg:mb-0">
            <div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-center lg:text-left">
                Roko Kovač
              </h1>
              <h2 className="uppercase mt-2 mb-4 text-xl font-bold text-center lg:text-left">Software Developer</h2>
            </div>

            <p className="pb-4 text-center lg:text-left mt-10 text-xl text-foreground">{intro}</p>

            <ContactButton className="mt-10" />
          </div>
          <div className="flex flex-col items-center lg:items-center lg:w-2/5">
            <div className="relative w-64 h-64">
              <Image src="/roko.jpg" height={250} width={250} className={'rounded-full'} alt="portrait" />
            </div>
            <div className={'flex-grow'}></div>
            <div className={' pt-24'}>{socialMedia()}</div>
            <div className={'flex-grow'}></div>
          </div>
        </div>
      </div>

      <Skills />

      <Projects />

      <Blog />

      <Contact />
    </div>
  );
};

export default Home;
