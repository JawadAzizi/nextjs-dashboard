import "@/app/ui/global.css"
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "learning project"
  },
  description: "this a test project dashboard",
  metadataBase: new URL('https://something.com')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="{inter.className}">{children}</body>
    </html>
  );
}
