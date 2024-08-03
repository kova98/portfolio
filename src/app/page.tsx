import Image from 'next/image';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import ContactButton from '@/app/contact-button';
import Navbar from '@/components/navbar';
import Skills from '@/components/skills';

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
      <div className="flex flex-col h-screen justify-between items-center p-4 lg:hidden">
        <div className={'flex-grow'}></div>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48">
            <Image src="/roko.jpg" alt="portrait" layout="fill" objectFit="cover" className="rounded-full" />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-4xl font-bold text-center">Roko Kovač</h1>
            <h2 className="uppercase mt-2 mb-4 text-xl font-bold text-center">Software Developer</h2>
          </div>
          <p className="pb-4 text-center pt-5 text-foreground">
            Hi, I&rsquo;m Roko — a Software Developer with 5+ years of professional experience. I love learning new
            things, building fun side projects, and writing about software development.
          </p>
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

            <p className="pb-4 text-center lg:text-left mt-10 text-xl text-foreground">
              Hi, I&rsquo;m Roko — a Software Developer with 5+ years of professional experience. I love learning new
              things, building fun side projects, and writing about software development.
            </p>

            <ContactButton className="mt-10" />
          </div>
          <div className="flex flex-col items-center lg:items-center lg:w-2/5">
            <div className="relative w-64 h-64">
              <Image src="/roko.jpg" alt="portrait" layout="fill" objectFit="cover" className="rounded-full" />
            </div>
            <div className={'flex-grow'}></div>
            <div className={' pt-24'}>{socialMedia()}</div>
            <div className={'flex-grow'}></div>
          </div>
        </div>
      </div>

      {/* Skills Section */}

      <Skills />

      {/* Projects Section */}
      <div id="projects" className="flex flex-col min-h-screen justify-center items-center p-4 bg-background">
        <h1 className="text-4xl font-bold mb-8">Hobby Projects</h1>
        {/* Add your projects content here */}
      </div>

      {/* Blog Section */}
      <div
        id="blog"
        className="flex flex-col min-h-screen justify-center items-center p-4 bg-foreground text-background"
      >
        <h2 className="text-4xl font-bold mb-8">Blog</h2>
        {/* Add your blog content here */}
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="flex flex-row min-h-screen p-4 justify-center align-middle bg-background text-foreground items-center"
      >
        <div className={'p-10'}></div>
        <h1 className="text-4xl font-bold mb-8">Let&rsquo;s get in touch!</h1>
        {/* Add your contact content here */}
      </div>
    </div>
  );
};

export default Home;
