import { CheckCircle2, Clock, ChefHat, Bike, MapPin } from 'lucide-react';

export default function Rastreamento() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 text-[#1F2421]">Acompanhe seu <span className="text-brand-purple">Pedido</span></h1>
        <p className="text-[#4B5563]">Pedido <span className="text-[#1F2421] font-bold">#1024</span></p>
      </div>

      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 z-0"></div>
          
          {/* Status 1 */}
          <div className="relative z-10 flex gap-4 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-green-200">
              <CheckCircle2 size={24} className="text-green-600" />
            </div>
            <div className="pt-2">
              <h3 className="font-bold text-lg text-[#1F2421]">Pedido Recebido</h3>
              <p className="text-sm text-[#4B5563]">19:30 - Seu pedido foi confirmado.</p>
            </div>
          </div>
          
          {/* Status 2 */}
          <div className="relative z-10 flex gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-brand-orange/20">
              <ChefHat size={24} className="text-brand-orange" />
            </div>
            <div className="pt-2">
              <h3 className="font-bold text-lg text-[#1F2421]">Em Preparação</h3>
              <p className="text-sm text-[#4B5563]">19:35 - Estamos montando seu açaí com muito capricho.</p>
            </div>
          </div>
          
          {/* Status 3 */}
          <div className="relative z-10 flex gap-4 mb-8">
            <div className="w-12 h-12 bg-white border-2 border-brand-purple rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <Bike size={24} className="text-brand-purple animate-pulse" />
            </div>
            <div className="pt-2">
              <h3 className="font-bold text-lg text-brand-purple">Saiu para Entrega</h3>
              <p className="text-sm text-[#4B5563]">O entregador está a caminho do seu endereço.</p>
            </div>
          </div>
          
          {/* Status 4 */}
          <div className="relative z-10 flex gap-4">
            <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center shrink-0">
              <MapPin size={24} className="text-gray-400" />
            </div>
            <div className="pt-2 opacity-50">
              <h3 className="font-bold text-lg text-[#1F2421]">Entregue</h3>
              <p className="text-sm text-[#4B5563]">Aguardando entrega.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-brand-purple/5 border border-brand-purple/20 rounded-2xl p-6 text-center shadow-sm">
        <p className="mb-4 text-[#1F2421] font-medium">Dúvidas sobre o pedido?</p>
        <button className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 justify-center mx-auto hover:bg-opacity-90 transition shadow-sm">
          Falar no WhatsApp
        </button>
      </div>
    </div>
  );
}
