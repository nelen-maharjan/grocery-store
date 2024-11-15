import CategoryList from "./Components/CategoryList";
import Slider from "./Components/Slider";
import GlobalApi from "./utils/GlobalApi";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();

  const categoryList = await GlobalApi.getCategoryList();
  return (
    <div className="p-5 md:p-10 px-16">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
    </div>
  );
}
