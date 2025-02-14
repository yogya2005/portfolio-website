import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a href="mailto:$yaa21@sfu.ca" className="border-b">{CONTACT.email}</a>
        <p>
        <a href="mailto:$yogya.agrawal2005@gmail.com" className="border-b">yogya.agrawal2005@gmail.com</a></p>
        <p><a href="https://drive.google.com/file/d/1bTTB3z6_Yn-IYtoBog09-yFoVvkXp2Lf/view?usp=sharing" className="border-b">Resume</a></p>
      </div>
    </div>
  );
};

export default Contact;
