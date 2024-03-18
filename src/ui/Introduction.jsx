function Introduction() {
    return (
        <div className="flex items-center items-center flex-col">
            <p className="text-xs font-lg lg:text-base text-neutral-600 bg-transparent font-mono">
          Hello, my name's Dat Ngo. A passionate Software Engineer.
        </p>
        <p
          className="text-base lg:text-3xl text-black font-semibold flex relative w-[max-content] font-mono 
before:absolute before:inset-0 before:animate-typewriter before:bg-white 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black"
        >
          <p className="text-amber-400">{`<h1>`}</p>I'm develop&ensp;
          <p className="text-base lg:text-3xl text-sky-500 font-bold">
            ReactJS/NextJS
          </p>
          &nbsp;aplications&ensp;
          <p className="text-amber-400">{`</h1>`}</p>
        </p>
        </div>
    )
}

export default Introduction
