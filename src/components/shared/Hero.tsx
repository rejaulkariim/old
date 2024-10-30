import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      <MaxWidthWrapper>
        <div className="mx-auto text-center flex flex-col items-center max-w-2xl space-y-6 text-center">
          <h1 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
            Connect with indie makers around the world
          </h1>
          <p className="text-base md:text-xl text-foreground">
            An open-source community for indie makers.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
