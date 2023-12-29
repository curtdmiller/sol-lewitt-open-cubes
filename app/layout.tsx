import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incomplete Open Squares",
  description:
    "Transcription of Sol Lewitt: Variations of Incomplete Open Cubes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
