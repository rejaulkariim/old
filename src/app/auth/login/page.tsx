import GoogleLogin from "@/components/shared/GoogleLogin";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your account",
};

const SignInPage = () => {
  return (
    <section>
      <MaxWidthWrapper className="flex h-full flex-col md:flex-row justify-between items-center min-h-screen gap-4">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center space-y-4">
          <div className="space-y-4 max-w-sm">
            <h1 className="text-2xl md:text-3xl font-bold">
              Login to your account
            </h1>
            <p className="text-lg text-muted-foreground">
              Good to have you back!
            </p>
            <GoogleLogin />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SignInPage;
