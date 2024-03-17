function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-dot min-h-screen">
      <p className="text-xs lg:text-base text-neutral-600 dark:text-neutral-400"> Hello, my name's Dat Ngo. A passionate Software Engineer.</p>
      <p className="text-sm lg:text-3xl text-black font-semibold flex relative w-[max-content] font-mono 
before:absolute before:inset-0 before:animate-typewriter before:bg-white 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black"><p className="text-amber-400">{`<h1>`}&ensp;</p>I'm develop&ensp;<p className="text-sm lg:text-3xl text-sky-500 font-bold">ReactJS/NextJS</p>&nbsp;aplications&ensp;<p className="text-amber-400">{`</h1>`}&ensp;</p></p>
<div className="flex flex-col lg:flex-row gap-5 py-10">
<button className="bg-black text-white px-4 py-2 border rounded-lg text-center font-bold text-lg self-center font-mono">Download CV</button>
<button className="bg-zinc-100 text-black px-4 py-2 border rounded-lg text-center font-bold text-lg self-center font-mono">Contact Me</button>
</div>
      </div>
    </>
  )
}

export default App
