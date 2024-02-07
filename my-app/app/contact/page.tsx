import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-24 md:gap-28 p-6">
      <div className="flex-1 relative h-[500px]">
        <Image src="/contact.png" alt="Contact" layout="fill" objectFit="contain" />
      </div>
      <div className="flex-1">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-5 rounded-md bg-gray-200 text-gray-700"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-5 rounded-md bg-gray-200 text-gray-700"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="p-5 rounded-md bg-gray-200 text-gray-700"
          />
          <textarea
            
            placeholder="Message"
            className="p-5 rounded-md bg-gray-200 text-gray-700"
          />
          <button className="p-5 bg-blue-500 text-white font-bold rounded-md cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
