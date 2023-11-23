import Link from "next/link";
import React from "react";

const  NavigationBar: React.FC = () => {
    return (
        <nav className="bg-transparent text-black py-4 border-b border-gray-300 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <Link href="/" className="text-xl font-bold">Skyhub Inventory </Link>
            </div>
            <div className="hidden md:flex space-x-4">
                <Link href="/product">Product</Link>
                <Link href="/features">Features</Link>
                <Link href="/marketplace"> Marketplace</Link>
                <Link href="/company">Company</Link>
            </div>
            <div>
                <Link href="/login" className="px-4 py-2 rounded border border-black hover:bg-black hover:text-white transition-colors">
                    Log in
                </Link>
            </div>
        </div>
    </nav>
    )
}

export default NavigationBar;
