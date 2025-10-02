import ProductList from "@/components/ProductList";
import { ProductPageProps } from "@/types";

export default async function ProductsPage({ searchParams }: ProductPageProps) {
  const params = await searchParams;
  const category = params?.category ?? "";
  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
}
