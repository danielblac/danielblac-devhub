import Footer from "@/components/organisms/footer/footer";
import Header from "@/components/organisms/header/Header";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Tech Stack | DanielBlac DevHub",
  description:
    "We craft high-performance digital solutions using industry-leading tools and frameworks. Our carefully curated tech stack ensures robust, maintainable, and cutting-edge products for every client.",
};

export default function TechStackLayout({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
