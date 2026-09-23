import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import Projects from "../components/projects/Projects";

export const metadata: Metadata = {
  title: "Work | Osama Abushama",
  description: "All portfolio projects by Osama Abushama.",
};

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <Projects showAllProjects kicker={null} title="All Works" />
    </main>
  );
}
