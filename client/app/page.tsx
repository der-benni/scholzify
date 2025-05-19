import Link from "next/link";
import Image from 'next/image';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: ['400'],
});

export default async function HomeRoute() {
  return (
    <>
    <div>

      {/* Navigation Bar*/}
      <header className="bg-neutral-50 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold">
            <div className="flex items-center space-x-2">
              <Image
                src="/scholzify-logo.svg"
                width={50}
                height={50}
                alt="Scholzify Logo"
              ></Image>
              <div className={audiowide.className + " flex intem-center flex-col"}>
                <span className="text-xl">Scholzify</span>
                <span className="text-xs">Web, simplified.</span>
              </div>
            </div>
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="#projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zinc-800 to-zinc-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Benedikt Scholz</h1>
          <p className="text-xl mb-6">Full-Stack Developer • JavaScript • React • Node.js</p>
          <a href="#projects" className="inline-block bg-white text-zinc-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">View My Work</a>
        </div>
      </section>

      {/* Content Section*/}
      <main className="container mx-auto py-16 px-4" id="projects">
        <h2 className="text-3xl font-bold text-center mb-10">Projekte</h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-100">
          <article className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-400 mb-4">A short description of the project goes here. Built with React and Tailwind.</p>
            <a href="#" className="text-gray-300 font-medium hover:underline">View Project</a>
          </article>
          <article className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-400 mb-4">A short description of the project goes here. Built with Node.js and Express.</p>
            <a href="#" className="text-gray-300 font-medium hover:underline">View Project</a>
          </article>
          <article className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-400 mb-4">A short description of the project goes here. Built with Next.js.</p>
            <a href="#" className="text-gray-300 font-medium hover:underline">View Project</a>
          </article>
        </div>
      </main>

      {/* Footer Section*/}
      <footer className="bg-zinc-800 border-t border-zinc-700 mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-500">&copy; 2025 Jane Doe. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white">Email</a>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
}
