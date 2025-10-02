import ProductList from "@/components/ProductList";
import { HomePageProps } from "@/types";
import Image from "next/image";



export default async function Homepage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const category = params?.category ?? "";

  return (
    <div>
      {/* Slider */}
      TODO:add slider from swiper
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured product" fill />
      </div>
      {/* Product Section */}
      <ProductList category={category} params="homepage" />
    </div>
  );
}
