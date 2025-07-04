// import { Children } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Wrapper({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="wrapp">{children}</div>

      <Footer />
    </>
  );
}

export default Wrapper;
