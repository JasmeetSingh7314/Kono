import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="">
      <div className="container flex justify-between p-24">
        <div className="flex flex-col justify-center font-urbanist py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Ac mattis
            <span className="dark:text-violet-600">senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Button variant="faded" color="secondary" className="px-4 py-3">
              <span className="text-xl font-bold">Download Now!</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center p-2 ">
          <img
            src="https://imgs.search.brave.com/qTlLB03z4oJ-jPw8sT6W0buRbiLXCBzdT0MxJI7Dxic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy8yODc5MjEt/dG9reW8tcGljdHVy/ZS1zY2VuaWMtdHJh/dmVsLXBob3RvLWRv/d25sb2FkLWZyZWUt/aW1hZ2UuanBn"
            alt="tokyo_night"
            className="object-contain h-[500px] w-[600px] rounded-md opacity-85"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
