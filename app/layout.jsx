import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./globals.css";

export const metadata = {
  title: "Ahsan DevHub | MERN Stack Web Developer",
  description:
    "Hi, I'm Ahsan Habib, a MERN Stack Web Developer turning coffee into code since 2021. I create captivating web experiences with React, Tailwind CSS, Node.js, Express.js, and MongoDB. From stunning frontends to efficient backends and dynamic dashboards, my mission is to craft solutions so magical they'll make unicorns jealous. Let's bring your ideas to life with a dash of creativity and a lot of code wizardry!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/ahsan-devhub-icon.png" />
      </head>
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
