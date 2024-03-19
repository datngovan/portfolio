import Introduction from "./ui/Introduction";
import Skills from "./ui/Skills";
import About from "./ui/About";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";
import NavBar from "./ui/NavBar";
function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  function myFunction() {
    var element = document.getElementById("bg");
    var text = document.getElementsByClassName("background-text");
    element.classList.add("animate-fadeOutDelay");
    text.classList.add("animate-fadeOut");
  }
  window.onscroll = function () {
    myFunction();
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-dot min-h-screen min-w-full gap-10 bg-white overflow-hidden">
      {/* <NavBar/> */}
      <div id="bg" className="background-text flex flex-col justify-center items-center min-h-screen min-w-full font-mono font-semibold text-4xl bg-white fixed z-[99999]">
          <p className="background-text z-[9999] pr-[1rem]">Ngo Van Dat</p>
          <p className="background-text z-[9999] font-thin">Portfolio</p>
          <br/>
          <div className="z-[9999] p-2 rounded-[16px] animate-bounce"><img src="/arrowdown.svg" width={"50px"}/></div>
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
