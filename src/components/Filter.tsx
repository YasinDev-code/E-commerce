"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathName = usePathname()

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("filter", value)
    router.push(`${pathName}?${params.toString()}`, { scroll: false })
  }
  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Sort by:</span>
      <select name="sort" id="sort" className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm outline-0" onChange={(e) => handleFilter(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  )
}
