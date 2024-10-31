import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const ThankYouPage = () => {
  return (
    <main>
      {" "}
      <section className="flex items-center justify-center min-h-[70vh]">
        <MaxWidthWrapper>
          <div className="mx-auto text-center flex flex-col items-center max-w-3xl space-y-6">
            <h1 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-7xl">
              You’re On The List
            </h1>
            <p className="text-base md:text-xl text-foreground">
              First, check your email to be sure you're on the waitlist. Inside
              that email are instructions to bump yourself up in the waitlist
              queue. It may take a few minutes for the email to show up (double
              check spam.)
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default ThankYouPage;
