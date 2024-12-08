import Services from "@/app/Componants/Service/Services";
import TopCategary from "@/app/Componants/Top Categary/TopCategary";
import TreandingCullation from "@/app/Componants/TreandingCollection/TreandingCullation";
import Background from "@/app/Componants/Background/Background";
import NewsletterSection from "@/app/Componants/NewsletterSection/NewsletterSection";
import Categories from "./Componants/Navbar/Top-Categories/Categories";
import CartMain from "@/app/Componants/Cart/CartMain";
import SpecialProductMain from "@/app/Componants/specialProduct/SpecialProductMain"
export default function Home() {
  return (
    <>
      <div className="space-y-24 md:space-y-32 lg:space-y-44 ">
        <Background />
        <Services />

        <TopCategary />
        <TreandingCullation />

        <SpecialProductMain/>
        {/* NewsletterSection  */}
        <NewsletterSection />
        <CartMain />
        <div className="absolute  -top-5 w-[255px] hidden lg:block md:hidden z-50 bg-white">
          <Categories />
        </div>
      </div>
    </>
  );
}
