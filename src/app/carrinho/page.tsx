"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export default function Carrinho() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const deliveryFee = 5.00;
  const grandTotal = total > 0 ? total + deliveryFee : 0;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center max-w-md">
        <div className="w-24 h-24 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={48} className="text-gray-300" />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-[#1F2421]">Seu carrinho está vazio</h1>
        <p className="text-[#4B5563] mb-8">Que tal adicionar um açaí delicioso?</p>
        <Link 
          href="/cardapio" 
          className="block w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-brand-orange/90 transition-colors shadow-sm"
        >
          Ver Cardápio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1F2421]">Seu <span className="text-brand-purple">Carrinho</span></h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items List */}
        <div className="flex-1 space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 flex gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0 hidden sm:block">
                {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-bold text-lg text-[#1F2421]">{item.name}</h3>
                    {item.details && (
                      <div className="text-sm text-[#4B5563] mt-1">
                        {item.details.base && <div>Base: {item.details.base}</div>}
                        {item.details.fruits?.length ? <div>Frutas: {item.details.fruits.join(', ')}</div> : null}
                        {item.details.toppings?.length ? <div>Acomp: {item.details.toppings.join(', ')}</div> : null}
                        {item.details.syrups?.length ? <div>Cob: {item.details.syrups.join(', ')}</div> : null}
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-brand-pink transition-colors shrink-0"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1 border border-gray-200">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-[#1F2421]"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold w-4 text-center text-[#1F2421]">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-brand-orange hover:text-brand-orange/80"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <span className="font-bold text-brand-purple text-lg">
                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-[#1F2421]">Resumo</h3>
            
            <div className="space-y-3 mb-6 text-[#4B5563]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de entrega</span>
                <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg text-[#1F2421]">
                <span>Total</span>
                <span className="text-brand-purple">R$ {grandTotal.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
            
            <Link 
              href="/checkout"
              className="w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-brand-orange/90 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Continuar pedido
              <ArrowRight size={20} />
            </Link>
            
            <button className="w-full mt-3 bg-white border border-gray-200 text-[#4B5563] font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors">
              Continuar comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
