import "./globals.css";

export const metadata = {
  title: "My Blog",
  description: "A simple blog website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
