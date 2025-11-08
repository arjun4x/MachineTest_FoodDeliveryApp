import BannerSection from "@/components/Mainpage/BannerSection";
import ItemList from "@/components/Mainpage/ItemList";
import LowerSection from "@/components/Mainpage/LowerSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <BannerSection />   
       {/* Featured Items */}
      <ItemList />
      {/* Features Section */}
      <LowerSection />
    </div>
  );
}
