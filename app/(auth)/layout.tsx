import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex gap-2">
            <Image src="icons/logo.svg" alt="logo" height={37} width={37} />
            <h1 className="text-2xl font-semibold text-white">Bookwise</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
