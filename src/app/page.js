import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./Components/Slider";
import GlobalApi from "./utils/GlobalApi";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();
  return (
    <div>
      <Slider sliderList={sliderList} />
    </div>
  );
}
