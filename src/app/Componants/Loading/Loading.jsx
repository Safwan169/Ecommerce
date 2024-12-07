import Lottie from "lottie-react";
import NutLoading from '../../../../public/NutLoading.json'
const Loading = () => {
  return (
    <Lottie className=" h-28 sm:h-48 w-fit mx-auto" animationData={NutLoading}/>
  )
}

export default Loading
