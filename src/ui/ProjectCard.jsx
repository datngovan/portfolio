function ProjectCard({reverse , data}) {
  const {name, description, technologies, github, demo, img} = data
  return (
    <div className=" flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 justify-items-center font-mono my-[2rem] mx-5">
      <div className={reverse ? "lg:order-1" : "" }><img src={img} className="border-2 border-transparent rounded-[16px]"
      /></div>
      <div className="flex flex-col gap-[1rem] lg:gap-[3rem] justify-center">
        <div>{name}</div>
        {/* Banh Cuon Tay Ho Website 🍽️ */}
        <p className="font-medium text-lg text-gray-400">{description}</p>
        <div className="font-bold text-lg">{technologies}</div>
        <div className="flex gap-2 justify-center items-center">
        <div className="grid grid-cols-2 gap-2">
        <button className="bg-zinc-100 text-black px-4 py-2 border rounded-lg text-center font-bold text-lg self-center font-mono flex justify-center items-center gap-2">
            Code <img src="../public/github.svg" className="size-[20px]"/>
          </button>
          <button className="bg-zinc-100 text-black px-4 py-2 border rounded-lg text-center font-bold text-lg self-center font-mono flex justify-center items-center gap-2">
            Live Demo <img src="../public/newtab.svg" className="size-[20px]"/>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
