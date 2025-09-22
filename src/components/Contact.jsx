import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a href="mailto:$yaa21@sfu.ca" className="border-b">{CONTACT.email}</a>
        <p><a href="https://drive.google.com/file/d/1WcnUKvf7OE-beSvrDU5EeCnz7vOTLlLk/view?usp=sharing" className="border-b">Resume</a></p>
      </div>
    </div>
  );
};

export default Contact;
