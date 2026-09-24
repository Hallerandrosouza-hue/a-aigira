"use client";

import { useState } from 'react';
import { categories, products } from '@/data/mockData';
import { PlusCircle, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Cardapio() {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(p => p.category === categories.find(c => c.id === activeCat)?.name);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Nosso <span className="text-brand-purple">Cardápio</span></h1>
        
        <div className="relative max-w-md">
          <input 
            type="text" 
            placeholder="Buscar produtos..." 
            className="w-full bg-white border border-gray-200 shadow-sm rounded-full py-3 px-5 pl-12 text-slate-700 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
          />
          <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
        </div>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-colors border shadow-sm ${
              activeCat === cat.id 
                ? 'bg-brand-purple text-white border-brand-purple' 
                : 'bg-white border-gray-200 text-slate-600 hover:border-brand-purple/30 hover:text-brand-purple'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:border-brand-purple/30 hover:shadow-md transition-all flex flex-col h-full group">
              <div className="h-48 relative bg-slate-100 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-2 text-slate-800">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-bold text-xl text-brand-green">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <button 
                    onClick={() => {
                      addToCart({
                        id: product.id + Date.now(),
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        image: product.image
                      });
                      alert('Adicionado ao carrinho!');
                    }}
                    className="bg-brand-purple text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-brand-purple/90 transition-colors shadow-sm"
                  >
                    <PlusCircle size={18} />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-500 bg-white border border-gray-100 rounded-2xl border-dashed">
            Nenhum produto encontrado nesta categoria no momento (Apenas MVP demonstrativo).
          </div>
        )}
      </div>
    </div>
  );
}
