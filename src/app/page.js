import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import ToAnimals from "@/components/ToAnimals";
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ToAnimals></ToAnimals>
      <FeaturedAnimals></FeaturedAnimals>
    </div>
  );
}
