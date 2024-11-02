import CreateUniqueLinkForm from "@/components/forms/CreateUniqueLinkForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const SignupPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <MaxWidthWrapper className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            First, claim your unique link
          </h1>
          <p className="text-muted-foreground text-lg">
            The good ones are still available!
          </p>
        </div>

        <CreateUniqueLinkForm />
      </MaxWidthWrapper>
    </section>
  );
};

export default SignupPage;
