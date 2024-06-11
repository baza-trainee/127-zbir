import { lazy } from "react";

export const Header = lazy(() => import("./components/Header/Header"));
export const Hero = lazy(() => import("./components/Hero/Hero"));
export const Details = lazy(() => import("./components/Details/Details"));
export const About = lazy(() => import("./components/About/About"));
export const Reason = lazy(() => import("./components/Reason/Reason"));
export const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Details />
        <About />
        <Reason />
      </main>
      <Footer />
    </>
  );
}

export default App;
