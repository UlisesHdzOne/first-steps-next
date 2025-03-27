import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Contact page description",
  keywords: "contact, page, keywords",
};
export default function Contact() {
  return (
    <>
      <span className="text-7xl">Contact page</span>
    </>
  );
}
