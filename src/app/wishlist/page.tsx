import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const WishlistPage = () => {
  return (
    <main>
      <section className="flex items-center justify-center min-h-[70vh]">
        <MaxWidthWrapper>
          <div className="mx-auto text-center flex flex-col items-center max-w-3xl space-y-6">
            <h1 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-7xl">
              Get Early Access
            </h1>
            <p className="text-base md:text-xl text-foreground">
              Enter your email below and you will receive an invite to the web
              app as we roll out access (it can be as fast as 24 hours) Be the
              first of 25,000 to try Indie Makers!
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default WishlistPage;
