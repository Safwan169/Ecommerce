import Services from "@/app/Componants/Service/Services";
import TopCategary from "@/app/Componants/Top Categary/TopCategary";
import TreandingCullation from "@/app/Componants/TreandingCollection/TreandingCullation";
import Background from "@/app/Componants/Background/Background";
import NewsletterSection from "@/app/Componants/NewsletterSection/NewsletterSection";
import CartMain from "@/app/Componants/Cart/CartMain";
import SpecialProductMain from "@/app/Componants/specialProduct/SpecialProductMain";
import ModalForCartWatchButton from "../Componants/card/ModalForCartWatchButton"
export default function Home() {
  return (
    <>
      <div className="space-y-24 md:space-y-32 lg:space-y-44  ">
        <Background />
        <Services />

        <TopCategary />
        <TreandingCullation />

        <SpecialProductMain/>
        {/* NewsletterSection  */}
        <NewsletterSection />
        <CartMain />
        <ModalForCartWatchButton/>

      
      </div>
    </>
  );
}
