import type { Metadata } from "next";
import "./globals.scss";
import MUIProvider from "./material-ui/provider";
import { AuthProvider } from "./next-auth/provider";

export const metadata: Metadata = {
  title: "DanielBlac DevHub",
  description:
    "DanielBlac DevHub specializes in custom web & app development and tech education. Let’s transform your ideas into digital excellence. Start your project today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <AuthProvider>
          <MUIProvider>{children}</MUIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
