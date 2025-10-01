import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = () => {
  return (
    <div className=''>
      {/* Slider */}
      TODO:add slider from swiper
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured product" fill />
      </div>
      {/* Product Section */}
      <ProductList/>
    </div>
  )
}

export default Homepage