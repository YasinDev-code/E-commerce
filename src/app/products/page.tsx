import ProductList from "@/components/ProductList";

export default function productsPage({searchParams}:{searchParams:{category?: string}}) {
  const category = searchParams.category || ""
  return (
    <div className="">
        <ProductList category={category} params="products"/>
    </div>
  )
}
