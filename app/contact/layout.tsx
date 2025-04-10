import Footer from "@/components/organisms/footer/footer";
import Header from "@/components/organisms/header/Header";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Contact Us | DanielBlac DevHub",
  description:
    "Let's build something great together! Contact our development team for custom websites/apps or inquire about our tech education programs. Fast responses, global service.",
};

export default function ContactLayout({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
