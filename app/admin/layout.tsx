import Footer from "@/components/organisms/footer/footer";
import Header from "@/components/organisms/header/Header";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Admin | DanielBlac DevHub",
  description: "For DanielBlac Devhub Team.",
};

export default function AdminLayout({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
