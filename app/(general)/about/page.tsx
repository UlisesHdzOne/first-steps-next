import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "About page description",
  keywords: "about, page, keywords",
};
export default function About() {
  return (
      <span className="text-7xl">About page</span>
  );
}
 