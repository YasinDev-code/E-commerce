import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between border-b border-gray-200 pb-4">
            {/* Left section */}
            <Link href='/' className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="TrendLama"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9"
                />
                <p className='text-md font-medium tracking-wider'>TRENDLAMA.</p>
            </Link>
            {/* Right section */}
            <div className="flex items-center space-x-6">
                <SearchBar />
                <Link href="/">
                    <Home className="w-4 h-4 text-gray-600" />
                </Link>
                <Bell className="w-4 h-4 text-gray-600" />
                <ShoppingCartIcon />
                <Link href="/login">
                    Sign in
                </Link>
            </div>
        </nav>
    )
}