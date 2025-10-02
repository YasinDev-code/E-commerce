import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ShoppingCartIcon() {
    return (
        <Link href='/cart' className='relative'>
            <ShoppingCart className="w-4 h-4 text-gray-600" />
            <span className='absolute -top-4 -right-3 bg-amber-400 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-sm font-medium'>1</span>
        </Link>
    )
}
