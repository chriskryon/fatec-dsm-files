import Providers from "@/components/ui/mytheme";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {children}
        </Providers>
        <script src="prism.js" async />
      </body>
    </html>
  );
}
