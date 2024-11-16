import Image from "next/image";
import HeaderText from "@/app/Componants/HeaderText/HeaderText"
import Services from "@/app/Componants/Service/Services"
import TopCategary from "@/app/Componants/Top Categary/TopCategary"
export default function Home() {
  return (
   <>
   <Services/>
   <HeaderText text={'Top category'}/>
   <TopCategary/>
   </>
  );
}
