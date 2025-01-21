import React from "react";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex gap-2">
            <Image src="icons/logo.svg" alt="logo" height={37} width={37} />
            <Link href="/">
              <h1 className="text-2xl font-semibold text-white">Bookwise</h1>
            </Link>
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="auth illustration"
          height={1000}
          width={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default Layout;
