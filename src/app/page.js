import Banner from "@/components/Banner";
import CowBanner from "@/components/CowBanner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import TextCards from "@/components/TextCards";
import ToAnimals from "@/components/ToAnimals";
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <CowBanner></CowBanner>
      <ToAnimals></ToAnimals>
      <FeaturedAnimals></FeaturedAnimals>
      <TextCards></TextCards>
    </div>
  );
}
