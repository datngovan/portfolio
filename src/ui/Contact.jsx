import ContactItems from "./ContactItems";
function Contact() {
  return (
    <div className="flex flex-col lg:items-start items-center justify-center text-center my-20 lg:mx-72">
      <p className="font-bold text-2xl text-sky-400">Contact</p>
      <p className="font-bold text-2xl text-gray-600">
        Don't be bothered! Hit me up !
      </p>
      <ContactItems/>
    </div>
  );
}

export default Contact;
