import Image from 'next/image';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import ContactButton from '@/app/contact-button';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center p-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 max-w-4xl ">
                <div className={"flex-grow"}></div>
                <div className="flex flex-col items-center lg:items-start lg:w-2/5 mb-10 lg:mb-0">
                    <div>
                        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-center lg:text-left">
                            Roko Kovač
                        </h1>
                        <h2 className="uppercase mt-2 mb-4 text-xl text-center lg:text-left">
                            Software Developer
                        </h2>
                    </div>

                    <p className="pb-4 text-center lg:text-left mt-10 text-xl text-foreground">
                        Hi, I’m Roko — a Software Developer with 5+ years of professional experience.
                        I love learning new things, building fun side projects, and writing about software development.
                    </p>
                    <ContactButton className="mt-10"/>
                </div>
                <div className="flex flex-col items-center lg:items-center lg:w-2/5">
                    <div className="relative w-64 h-64">
                        <Image
                            src="/roko.jpg"
                            alt="portrait"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <div className={"flex-grow"}></div>
                    <div className="grid grid-cols-3 gap-4 justify-items-center pt-24">
                        <a href="https://github.com/kova98" className="hover:bg-gray-800 hover:rounded">
                            <GitHubLogoIcon className="h-12 w-12"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kova98/" className="hover:bg-gray-800 hover:rounded">
                            <LinkedInLogoIcon className="h-12 w-12"/>
                        </a>
                        <a href="https://medium.com/@kova98" className="hover:bg-gray-800 hover:rounded">
                            <Image src="/medium-white.svg" height={50} width={50} alt="medium logo"/>
                        </a>
                    </div>
                </div>
                <div className={"flex-grow"}></div>
            </div>
            {/* TODO: projects, blog, contact */}
        </div>
    );
};

export default Home;
