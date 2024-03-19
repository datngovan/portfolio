function About() {
    return (
        <div className="grid grid-rows-2 lg:grid-cols-2 grid-rows-1 font-mono lg:py-[150px] items-center gap-10 lg:p-[15rem] py-[5rem]">
      <div className="lg:mx-auto  mx-5">
      <img className="rounded-[16px]" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D"/>
      </div>
      <div className="grid gap-5  mx-5 lg:w-[80%] mx-auto max-lg:text-center">
        <h3 className="font-bold text-3xl text-sky-400">ABOUT ME</h3>  
        <h4 className="font-bold text-2xl text-black">Front-end Developer <br/> based in HCMC, Vietnam 📍</h4>
        <p className="font-medium text-lg text-gray-400">Hello my name is Dat, I'm a front-end developer. My passion is to create and develop clean and user-friendly UI/UX.</p>
        <p className="font-medium text-lg text-gray-400">My main stacks currently is ReactJS/NextJS combine with Tailwind CSS, Bootstrap and Styped Components</p> 
      </div>
    </div>
    )
}

export default About
