"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MenuSquare, PlusCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function MobileNavigation() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  const navItems = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Cardápio', href: '/cardapio', icon: MenuSquare },
    { name: 'Montar', href: '/montador', icon: PlusCircle },
    { name: 'Carrinho', href: '/carrinho', icon: ShoppingBag, badge: itemCount },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 px-2 py-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex flex-col items-center p-2 relative transition-colors ${isActive ? 'text-brand-purple' : 'text-slate-400 hover:text-brand-purple'}`}
            >
              <Icon size={24} className={isActive ? 'animate-pulse' : ''} />
              <span className="text-[10px] mt-1 font-medium">{item.name}</span>
              
              {item.badge && item.badge > 0 && (
                <span className="absolute top-0 right-0 bg-brand-green text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
