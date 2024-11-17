import Image from "next/image";
import HeaderText from "@/app/Componants/HeaderText/HeaderText"
import Services from "@/app/Componants/Service/Services"
import TopCategary from "@/app/Componants/Top Categary/TopCategary"
import TreandingCullation from "@/app/Componants/TreandingCollection/TreandingCullation"
import Background from '@/app/Componants/Background/Background'
export default function Home() {
  return (
   <>
   <Background/>
   <Services/>
   <HeaderText text={'Top category'}/>
   <TopCategary/>
   <TreandingCullation />
   
   </>
  );
}
