interface layoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Admin Login | DanielBlac DevHub",
  description: "For DanielBlac Devhub Team.",
};

export default function AdminLoginLayout({ children }: layoutProps) {
  return <>{children}</>;
}
