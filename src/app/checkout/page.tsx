"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { MapPin, CreditCard, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const router = useRouter();
  const { total, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [success, setSuccess] = useState(false);

  const deliveryFee = 5.00;
  const grandTotal = total > 0 ? total + deliveryFee : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      clearCart();
    }, 1500);
  };

  if (success) {
    return (
      <div className="container mx-auto px-4 py-16 text-center max-w-md animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-[#1F2421]">Pedido Realizado!</h1>
        <p className="text-[#4B5563] mb-2">Seu pedido foi recebido pela Gira Açaí.</p>
        <div className="bg-white shadow-sm border border-brand-purple/30 p-4 rounded-xl inline-block mb-8">
          <span className="text-sm text-[#4B5563] block">Número do Pedido</span>
          <span className="text-2xl font-bold text-brand-purple">#1024</span>
        </div>
        
        <button 
          onClick={() => router.push('/rastreamento')}
          className="block w-full bg-brand-orange text-white font-bold py-4 rounded-xl hover:bg-brand-orange/90 transition-colors mb-3 shadow-sm"
        >
          Acompanhar Pedido
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-[#1F2421]">Finalizar <span className="text-brand-purple">Pedido</span></h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Address */}
        <section className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-purple/10 p-2 rounded-lg">
              <MapPin size={24} className="text-brand-purple" />
            </div>
            <h2 className="text-xl font-bold text-[#1F2421]">Endereço de Entrega</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#4B5563] mb-1">Nome Completo</label>
              <input required type="text" className="w-full bg-gray-50 border border-gray-200 text-[#1F2421] rounded-xl py-3 px-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4B5563] mb-1">Telefone (WhatsApp)</label>
              <input required type="tel" className="w-full bg-gray-50 border border-gray-200 text-[#1F2421] rounded-xl py-3 px-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4B5563] mb-1">CEP</label>
              <input required type="text" className="w-full bg-gray-50 border border-gray-200 text-[#1F2421] rounded-xl py-3 px-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#4B5563] mb-1">Endereço (Rua/Av)</label>
              <input required type="text" className="w-full bg-gray-50 border border-gray-200 text-[#1F2421] rounded-xl py-3 px-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4B5563] mb-1">Número</label>
              <input required type="text" className="w-full bg-gray-50 border border-gray-200 text-[#1F2421] rounded-xl py-3 px-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4B5563] mb-1">Complemento</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 text-[#1F2421] rounded-xl py-3 px-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#4B5563] mb-1">Observação do Pedido</label>
              <textarea className="w-full bg-gray-50 border border-gray-200 text-[#1F2421] rounded-xl py-3 px-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" rows={3}></textarea>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-purple/10 p-2 rounded-lg">
              <CreditCard size={24} className="text-brand-purple" />
            </div>
            <h2 className="text-xl font-bold text-[#1F2421]">Forma de Pagamento</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setPaymentMethod('pix')}
              className={`p-4 rounded-xl border-2 text-center font-bold transition-colors ${
                paymentMethod === 'pix' ? 'border-brand-purple bg-brand-purple/5 text-brand-purple' : 'border-gray-200 bg-white text-[#4B5563]'
              }`}
            >
              PIX
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod('dinheiro')}
              className={`p-4 rounded-xl border-2 text-center font-bold transition-colors ${
                paymentMethod === 'dinheiro' ? 'border-brand-purple bg-brand-purple/5 text-brand-purple' : 'border-gray-200 bg-white text-[#4B5563]'
              }`}
            >
              Dinheiro
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod('cartao')}
              className={`p-4 rounded-xl border-2 text-center font-bold transition-colors ${
                paymentMethod === 'cartao' ? 'border-brand-purple bg-brand-purple/5 text-brand-purple' : 'border-gray-200 bg-white text-[#4B5563]'
              }`}
            >
              Cartão na Entrega
            </button>
          </div>
        </section>

        {/* Action */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[#4B5563] block text-sm">Total a pagar</span>
            <span className="text-3xl font-bold text-brand-purple">R$ {grandTotal.toFixed(2).replace('.', ',')}</span>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-brand-orange text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-orange/90 transition-colors shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? 'Processando...' : 'Confirmar Pedido'}
          </button>
        </div>
      </form>
    </div>
  );
}
