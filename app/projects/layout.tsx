import Footer from "@/components/organisms/footer/footer";
import Header from "@/components/organisms/header/Header";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Projects | DanielBlac DevHub",
  description:
    "Explore my portfolio of projects, jobs, and contracts at DanielBlac DevHub. From custom websites and apps to innovative tech solutions, see how I bring ideas to life and deliver results for clients and businesses. Let’s build something amazing together!",
};

export default function ProjectsLayout({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
