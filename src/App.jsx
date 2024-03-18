function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-dot min-h-screen min-w-full gap-10 bg-white">
      <div className="flex flex-col justify-center items-center min-h-screen min-w-full font-mono font-semibold text-3xl bg-white animate-fadeOutDelay fixed z-[99999]">
          <p className="z-[9999] animate-fadeOut">Ngo Van Dat</p>
          <p className="z-[9999] font-thin animate-fadeOut">Portfolio</p>
      </div>
        <div className="bg-hero bg-cover size-[20rem] lg:size-[25rem] bg-center rounded-hero animate-morph border-[5px] border-black"/>
        <p className="text-xs lg:text-base text-neutral-600 bg-transparent font-mono">
          Hello, my name's Dat Ngo. A passionate Software Engineer.
        </p>
        <p
          className="text-sm lg:text-3xl text-black font-semibold flex relative w-[max-content] font-mono 
before:absolute before:inset-0 before:animate-typewriter before:bg-white 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black"
        >
          <p className="text-amber-400">{`<h1>`}</p>I'm develop&ensp;
          <p className="text-sm lg:text-3xl text-sky-500 font-bold">
            ReactJS/NextJS
          </p>
          &nbsp;aplications&ensp;
          <p className="text-amber-400">{`</h1>`}</p>
        </p>
        <div className="flex items-center justify-center gap-5">
          <div className="font-mono font-semibold lg:text-3xl border-r-[3px] border-zinc-400 px-2">
            Tech Stacks
          </div>
          <div>
            <img src="https://skillicons.dev/icons?i=html,css" />
          </div>
          <div>
            <img src="https://skillicons.dev/icons?i=js,react,nextjs" />
          </div>
          <div>
            <img src="https://skillicons.dev/icons?i=bootstrap,tailwind" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 py-10">
          <button className="bg-black text-white px-4 py-2 border rounded-lg text-center font-bold text-lg self-center font-mono">
            Download CV
          </button>
          <button className="bg-zinc-100 text-black px-4 py-2 border rounded-lg text-center font-bold text-lg self-center font-mono">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}
//M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875
export default App;
