import Introduction from "./ui/Introduction";
import Skills from "./ui/Skills";
import About from "./ui/About";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-dot min-h-screen min-w-full gap-10 bg-white">
      <div className="flex justify-center items-center min-h-screen min-w-full font-mono font-semibold text-4xl bg-white animate-fadeOut fixed z-[99999]">
          <p className="z-[9999] pr-[1rem]">Ngo Van Dat</p>
          <p className="z-[9999] font-thin">Portfolio</p>
      </div>
        <div className="bg-hero bg-cover size-[20rem] lg:size-[25rem] bg-center rounded-hero animate-morph border-[5px] border-black"/>
        <Introduction/>
        <Skills/>
        <div className="flex flex-col lg:flex-row gap-5 py-10">
          <button className="bg-black text-white px-4 py-2 border rounded-lg text-center font-bold text-lg self-center font-mono">
            Download CV
          </button>
          <button className="bg-zinc-100 text-black px-4 py-2 border rounded-lg text-center font-bold text-lg self-center font-mono">
            Contact Me
          </button>
        </div>
      </div>
    {/* About Me */}
  <About/>
  {/* Project */}
  <Projects/>
  {/* Contact */}
  <Contact/>
  {/* Footer */}
  <Footer/>
    </>
  );
}
export default App;
