import CreateUniqueLinkForm from "@/components/forms/CreateUniqueLinkForm";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding",
  description: "Claim your unique link to get started to create your canvas",
};

const SignupPage = () => {
  return (
    <section className="min-h-screen">
      <MaxWidthWrapper className="flex h-full flex-col md:flex-row justify-between items-center min-h-screen gap-4">
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center md:justify-between p-4">
          <div className="flex w-full flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">
                First, claim your unique link
              </h1>
              <p className="text-lg text-muted-foreground">
                The good ones are still available!
              </p>
            </div>
            <CreateUniqueLinkForm />
          </div>
        </div>
        <div className="w-1/2"></div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SignupPage;
