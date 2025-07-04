import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Birthday from "./Birthday";
import AnniversayDecoration from "./AnniversayDecoration";
import BabyShowerDecoration from "./BabyShowerDecoration";
import BacheloretteDecoration from "./BacheloretteDecoration";
import BirthdayDecoration from "./BirthdayDecoration";
import CarDecoration from "./CarDecoration";
import ClientSection from "./ClientSection";
import ContactPage from "./ContactPage";
import Explore from "./Explore";
import Occasions from "./Occasions";
import Packages from "./Packages";
import ProductPage from "./ProductPage";
import ShopandOfficeDecor from "./ShopandOfficeDecor";
import WelcomeBabyDecoration from "./WelcomeBabyDecoration";
import Wrapper from "./Wrapper";
import Baby from "./Baby";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompRoute />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/baby" element={<Baby />} />
          <Route path="/categary/:id" element={<Baby />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;

export function CompRoute() {
  return (
    <>
      <Wrapper>
        <Explore />
        <Occasions />
        <BirthdayDecoration />
        <WelcomeBabyDecoration />
        <BabyShowerDecoration />
        <AnniversayDecoration />
        <BacheloretteDecoration />
        <CarDecoration />
        <ShopandOfficeDecor />
        <Packages />
        <ClientSection />
        {/* <Footer /> */}
      </Wrapper>
      <ProductPage />
      <ContactPage></ContactPage>
      {/* <Birthday /> */}
    </>
  );
}
