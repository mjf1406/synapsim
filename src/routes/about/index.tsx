import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { FooterSection } from "../-home-components/footer";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

const ROBOT_ART_URL =
  "https://www.magnific.com/free-vector/cartoon-style-robot-vectorart_125886727.htm#fromView=search&page=1&position=2&uuid=55b9200e-295b-40c4-82a3-68f9da3bf172&query=cute+robot";
const JUICY_FISH_URL = "https://www.magnific.com/author/juicy-fish";

function AboutPage() {
  return (
    <div className="mx-auto flex w-full flex-col items-stretch">
      <article className="w-full max-w-3xl self-center px-6 pt-6 pb-14 lg:px-8">
        <header className="mb-10 space-y-2">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
          <p className="leading-relaxed text-muted-foreground">
            Art credits and attribution for Synapsim
          </p>
        </header>

        <div className="space-y-10">
          <section id="art" className="scroll-mt-28 space-y-3">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">The Art</h2>
            <div className="space-y-3 leading-relaxed text-muted-foreground">
              <p>
                All artwork on the site is either created by me, created by another human, or drawn
                with code. AI was <b>NOT</b> used to create any art assets in this project.
              </p>
              <p>The below is a list of art used on the website that was not made by me.</p>
              <ul className="list-inside list-disc space-y-1 pl-1">
                <li>
                  <a
                    href={ROBOT_ART_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline"
                  >
                    Cartoon style robot
                    <ExternalLink aria-hidden className="size-3.5 shrink-0" />
                    <span className="sr-only">(opens in new tab)</span>
                  </a>{" "}
                  by{" "}
                  <a
                    href={JUICY_FISH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline"
                  >
                    juicy_fish
                    <ExternalLink aria-hidden className="size-3.5 shrink-0" />
                    <span className="sr-only">(opens in new tab)</span>
                  </a>{" "}
                  on Magnific
                </li>
                <li>
                  Icons on the site by{" "}
                  <a
                    href="https://lucide.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline"
                  >
                    Lucide
                    <ExternalLink aria-hidden className="size-3.5 shrink-0" />
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <p className="text-sm text-muted-foreground">
            <Link to="/" className="underline underline-offset-2 hover:text-primary/90">
              Back to home
            </Link>
          </p>
        </div>
      </article>

      <FooterSection className="max-w-3xl self-center px-6 lg:px-8" />
    </div>
  );
}
