const contacts = [
    {
      url: "../src/assets/location.svg",
      title: "Location",
      content: "Ho Chi Minh City, Vietname",
    },

    {
      url: "../src/assets/email.svg",
      title: "Email",
      content: "datngo.qlct@gmail.com",
    },
  ];
function ContactItems() {
    return (
        <div className="flex lg:flex-row flex-col">
            {
                contacts.map(data=>{
                    return (
                        <div className="flex lg:flex-row flex-col items-center justify-center p-10 gap-3 font-mono" key={data.title}>
                        <img src={data.url} className="size-10 border-2 drop-shadow-2xl rounded-[9999px] p-2"/>
            <div>
                <p className="font-semibold text-xl">{data.title}</p>
                <p className="font-base text-base">{data.content}</p>
            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactItems
