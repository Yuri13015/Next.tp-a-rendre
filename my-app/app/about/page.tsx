import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-x-24 gap-y-12">
      <div className="flex-1 flex flex-col gap-y-8 px-6 text-center lg:text-left">
        <h2 className="text-blue-600 text-2xl font-semibold">About Agency</h2>
        <h1 className="text-5xl font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-lg font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision. We’re the world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-start lg:gap-y-0">
          <div className="flex flex-col items-center lg:items-start gap-y-2.5">
            <h1 className="text-blue-600 text-3xl font-bold">10 K+</h1>
            <p className="text-base font-normal">Year of experience</p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-y-2.5">
            <h1 className="text-blue-600 text-3xl font-bold">234 K+</h1>
            <p className="text-base font-normal">People reached</p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-y-2.5">
            <h1 className="text-blue-600 text-3xl font-bold">5 K+</h1>
            <p className="text-base font-normal">Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full h-64 lg:h-auto"> 
        <Image
          src="/about.png"
          alt="About Image"
          layout="responsive"
          width={800} 
          height={700} 
          style={{ objectFit: 'contain' }}     
         />
      </div>
    </div>
  );
};

export default AboutPage;
