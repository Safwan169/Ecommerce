import Services from "@/app/Componants/Service/Services"
import TopCategary from "@/app/Componants/Top Categary/TopCategary"
import TreandingCullation from "@/app/Componants/TreandingCollection/TreandingCullation"
import Background from '@/app/Componants/Background/Background'
import NewsletterSection  from '@/app/Componants/NewsletterSection/NewsletterSection'
export default function Home() {
  return (
   <>
<div className="space-y-44">
<Background/>
   <Services/>
   
   <TopCategary/>
   <TreandingCullation />
   {/* NewsletterSection  */}
   <NewsletterSection />
</div>
   </>
  );
}
