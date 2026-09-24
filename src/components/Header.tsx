"use client";

import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-[#1F2421]">
            <Menu size={24} />
          </button>
          <Link href="/" className="text-2xl font-black text-brand-purple tracking-tighter">
            GIRA<span className="text-brand-orange">AÇAÍ</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-[#4B5563]">
          <Link href="/" className="hover:text-brand-orange transition-colors">Início</Link>
          <Link href="/cardapio" className="hover:text-brand-orange transition-colors">Cardápio</Link>
          <Link href="/admin" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">Admin</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/montador" className="hidden md:flex bg-brand-orange text-white px-5 py-2 rounded-full font-bold hover:bg-brand-orange/90 transition-colors shadow-sm">
            Montar meu Açaí
          </Link>
          
          <Link href="/carrinho" className="relative p-2 text-[#4B5563] hover:text-brand-orange transition-colors">
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
