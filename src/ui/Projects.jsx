import ProjectCard from "./ProjectCard"
const data = [
    {name: "Banh Cuon Tay Ho Website 🍽️",
    description: "Banh cuon Tay Ho is a website to delivery the restaurent history, menu, contact information. The website is SEO for keywork search on platform such as Google",
    technologies: "NextJS TailwindCSS",
    github:"#",
    demo: "#",
    img: "../public/banhcuontayho.png"
  },
  {name: "RentCar 🚘",
    description: "Rent Car is a website to rent luxury car for personal and business uses. The website come with searching function base on your location, pickup and return time and reserve cars",
    technologies: "React TailwindCSS",
    github:"#",
    demo: "#",
    img: "../public/rentcar.png"},
    {name: "Suel's Homestay ⛺",
    description: "Suel Homestay managements website is a website for homestays owner and staffs to check the status of each properties and their performace during amount of time",
    technologies: "React StyledComponent Supabase PostgresSQL",
    github:"#",
    demo: "#",
    img: "../public/suel.png"}
  ]
function Projects() {
    return (
        <div className="grid justify-center items-center font-bold text-3xl text-center lg:px-[15rem] font-mono">
                <h3 className="font-bold text-3xl text-sky-400 self-start">PORTFOLIO</h3>
                <h2 className="font-semibold text-2xl self-start">Each project is a unique and passionate piece of development👨🏾‍💻</h2>
            <ProjectCard data={data[1]}/>
            <ProjectCard data={data[0]} reverse={true}/>
            <ProjectCard data={data[2]} />         
        </div>
    )
}

export default Projects
