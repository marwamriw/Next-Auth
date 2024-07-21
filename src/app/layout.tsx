import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@radix-ui/themes/styles.css';
import "./globals.css";
import { Theme } from '@radix-ui/themes';
import Provider from "@/components/Provider";
import { getServerSession } from "next-auth";
import { optionAuth } from "@/lib/nextAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default  async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(optionAuth)
  console.log("server session  is   : ",session)
  return (
    <html lang="en">
      <body className={inter.className}>
      <Theme>
        <Provider session={session} >
          {children}
        </Provider>
      </Theme>
      </body>
    </html>
  );
}
