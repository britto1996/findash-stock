import Link from "next/link";
import { PATH } from "../constants/path";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href={PATH.HOME}>
          <Image
            loading="eager"
            src="/Logo/findash.svg"
            alt="Findash_Logo"
            width={125}
            height={32}
            className="w-auto h-32 cursor-pointer"
          />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <Testimonials
        authorName="Ethan R."
        authorJob="Retail Investor"
        quote="Findash turned my watchlist into winning list. The alerts are spot-on, and I feel more confident making moves in the market."
      />
    </main>
  );
};

export default Layout;
