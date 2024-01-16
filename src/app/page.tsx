import { SiteHeader } from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-5 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">New year, new plans.</h1>
        <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">Embarking on a daily journal is a straightforward yet profound journey. Journaling aids in tracking moods, promoting mental well-being, and providing solace for processing complex emotions and ideas.</span>

        <div className="flex gap-4 m-5">
          <Link href="/register" rel="noreferrer" className={buttonVariants()}>
            Get Started
          </Link>
          <Link href="/login" rel="noreferrer" className={buttonVariants({ variant: "outline" })}>
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}
