import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 text-center lg:text-left">
      <div className="flex-1 flex flex-col gap-8 px-4 md:px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[96px] font-bold leading-tight">
          Creative Thoughts Agency.
        </h1>
        <p className="text-base md:text-lg font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="py-3 px-5 md:py-4 md:px-6 bg-blue-500 text-white rounded-md cursor-pointer">
            Learn More
          </button>
          <button className="py-3 px-5 md:py-4 md:px-6 bg-transparent border border-blue-500 text-blue-500 rounded-md cursor-pointer">
            Contact
          </button>
        </div>
        <div className="w-full md:w-96 h-12 relative grayscale">
          <Image src="/brands.png" alt="Brands" layout="responsive" width={500} height={50} objectFit="contain"/>
        </div>
      </div>
      <div className="w-full h-48 md:h-64 lg:h-96 relative">
        <Image src="/hero.gif" alt="Hero Image" layout="responsive" width={700} height={475} objectFit="contain"/>
      </div>
    </div>
  );
};

export default Home;
