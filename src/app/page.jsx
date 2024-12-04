import Services from "@/app/Componants/Service/Services";
import TopCategary from "@/app/Componants/Top Categary/TopCategary";
import TreandingCullation from "@/app/Componants/TreandingCollection/TreandingCullation";
import Background from "@/app/Componants/Background/Background";
import NewsletterSection from "@/app/Componants/NewsletterSection/NewsletterSection";
import Categories from "./Componants/Navbar/Top-Categories/Categories";
import Cart from "@/app/Componants/Cart/Cart"
export default function Home() {
  return (
    <>
      <div className="space-y-44 ">
        <Background />
        <Cart/>
        <Services />

        <TopCategary />
        <TreandingCullation />
        {/* NewsletterSection  */}
        <NewsletterSection />
        <div className="absolute  -top-5 w-[255px] hidden lg:block md:hidden z-50 bg-white">
         <Categories/>
        </div>
      </div>

    </>
  );
}
