import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a href="mailto:${CONTACT.email}" className="border-b">{CONTACT.email}</a>
        <a href="mailto:$yogya.agrawal2005@gmail.com" className="border-b">yogya.agrawal2005@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
