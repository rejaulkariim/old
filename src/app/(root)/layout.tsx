import { ReactNode } from "react";

const HomeLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default HomeLayoutPage;
