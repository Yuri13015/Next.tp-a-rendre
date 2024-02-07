import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-x-24 gap-y-12 text-center lg:text-left">
      <div className="flex-1 flex flex-col gap-y-12 px-6">
        <h1 className="text-8xl lg:text-[96px] md:text-7xl sm:text-6xl font-bold">
          Creative Thoughts Agency.
        </h1>
        <p className="text-lg font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex justify-center lg:justify-start gap-5">
          <button className="py-5 px-6 min-w-[120px] bg-blue-500 text-white rounded-md cursor-pointer">
            Learn More
          </button>
          <button className="py-5 px-6 min-w-[120px] bg-transparent border border-blue-500 text-blue-500 rounded-md cursor-pointer">
            Contact
          </button>
        </div>
        <div className="w-full lg:w-[500px] h-[50px] relative grayscale">
          <Image src="/brands.png" alt="Brands" layout="fill" objectFit="contain"/>
        </div>
      </div>
      {/* Adjust the width and height classes to increase the size of the GIF */}
      <div className="flex-1 w-full lg:w-3/5 xl:w-2/3 2xl:w-1/2 relative">
        <Image src="/hero.gif" alt="Hero Image" layout="fill" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Home;
