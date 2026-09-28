"use client";

import { useState } from 'react';
import { 
  Bike, 
  MapPin, 
  Navigation, 
  Phone, 
  CheckCircle2, 
  Banknote, 
  CreditCard, 
  QrCode,
  Clock,
  ChevronRight,
  Menu,
  LogOut
} from 'lucide-react';
import Link from 'next/link';

export default function EntregadorApp() {
  const [activeTab, setActiveTab] = useState<'disponiveis' | 'minhas_corridas' | 'resumo'>('minhas_corridas');

  // Mock Deliveries
  const [deliveries, setDeliveries] = useState([
    {
      id: '#1021',
      customer: 'Giselle Rocha',
      address: 'Rua Haddock Lobo, 800 - Cerqueira César',
      distance: '1.2 km',
      paymentMethod: 'PIX', // Já pago
      status: 'pago', // pago, cobrar_dinheiro, cobrar_cartao
      amountToCollect: 0,
      total: 18.90,
      state: 'em_rota', // disponivel, em_rota, finalizada
      time: '18:55',
    },
    {
      id: '#1022',
      customer: 'Giovanna Esteves',
      address: 'Rua Oscar Freire, 200 - Jardins',
      complement: 'Casa 2',
      distance: '2.5 km',
      paymentMethod: 'Dinheiro (Troco para R$ 100)',
      status: 'cobrar_dinheiro',
      amountToCollect: 54.90,
      total: 54.90,
      changeRequired: 45.10,
      state: 'disponivel',
      time: '19:10',
    },
    {
      id: '#1026',
      customer: 'Carlos Oliveira',
      address: 'Av. Rebouças, 1500 - Pinheiros',
      distance: '3.0 km',
      paymentMethod: 'Cartão de Crédito',
      status: 'cobrar_cartao',
      amountToCollect: 32.50,
      total: 32.50,
      state: 'disponivel',
      time: '19:35',
    }
  ]);

  const minhasCorridas = deliveries.filter(d => d.state === 'em_rota');
  const disponiveis = deliveries.filter(d => d.state === 'disponivel');
  const finalizadas = deliveries.filter(d => d.state === 'finalizada');

  const acceptDelivery = (id: string) => {
    setDeliveries(prev => prev.map(d => d.id === id ? { ...d, state: 'em_rota' } : d));
    setActiveTab('minhas_corridas');
  };

  const finishDelivery = (id: string) => {
    setDeliveries(prev => prev.map(d => d.id === id ? { ...d, state: 'finalizada' } : d));
  };

  const getPaymentIcon = (status: string) => {
    if (status === 'pago') return <CheckCircle2 size={16} className="text-green-500" />;
    if (status === 'cobrar_dinheiro') return <Banknote size={16} className="text-amber-500" />;
    if (status === 'cobrar_cartao') return <CreditCard size={16} className="text-blue-500" />;
    return <QrCode size={16} />;
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans sm:bg-gray-200 flex justify-center">
      {/* Mobile App Container */}
      <div className="w-full sm:max-w-md bg-gray-50 min-h-screen shadow-2xl relative pb-20">
        
        {/* Header */}
        <header className="bg-brand-purple text-white p-4 rounded-b-2xl shadow-md sticky top-0 z-20">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bike size={24} className="text-white" />
              </div>
              <div>
                <h1 className="font-bold leading-tight">Olá, Motoboy 01</h1>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                </p>
              </div>
            </div>
            <Link href="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <LogOut size={20} />
            </Link>
          </div>

          {/* KPI Mini Dashboard */}
          <div className="flex gap-4 bg-black/20 p-3 rounded-xl">
            <div className="flex-1 text-center border-r border-white/20">
              <p className="text-xs text-white/70">Entregas hoje</p>
              <p className="font-bold text-lg">{finalizadas.length}</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs text-white/70">Ganhos (R$ 5/taxa)</p>
              <p className="font-bold text-lg text-green-300">R$ {(finalizadas.length * 5).toFixed(2).replace('.', ',')}</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 space-y-4">
          
          {/* Tabs */}
          <div className="flex bg-gray-200 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('disponiveis')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'disponiveis' ? 'bg-white shadow-sm text-brand-purple' : 'text-gray-500'}`}
            >
              Disponíveis ({disponiveis.length})
            </button>
            <button 
              onClick={() => setActiveTab('minhas_corridas')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'minhas_corridas' ? 'bg-white shadow-sm text-brand-purple' : 'text-gray-500'}`}
            >
              Minhas ({minhasCorridas.length})
            </button>
          </div>

          {/* DISPONÍVEIS */}
          {activeTab === 'disponiveis' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
              {disponiveis.length > 0 ? disponiveis.map(delivery => (
                <div key={delivery.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-brand-orange/10 text-brand-orange px-2 py-1 rounded text-xs font-bold">Pedido {delivery.id}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12}/> {delivery.time}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="text-gray-400 mt-1 shrink-0" size={18} />
                    <div>
                      <p className="text-sm font-bold text-gray-800">{delivery.address}</p>
                      <p className="text-xs text-gray-500 mt-1">Distância est.: {delivery.distance}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => acceptDelivery(delivery.id)}
                    className="w-full bg-brand-purple text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-purple/90 active:scale-95 transition-all shadow-md"
                  >
                    Aceitar Entrega
                  </button>
                </div>
              )) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="text-gray-300" size={32} />
                  </div>
                  <p className="text-gray-500 font-medium">Nenhuma entrega disponível.</p>
                </div>
              )}
            </div>
          )}

          {/* MINHAS CORRIDAS (EM ANDAMENTO) */}
          {activeTab === 'minhas_corridas' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
              {minhasCorridas.length > 0 ? minhasCorridas.map(delivery => (
                <div key={delivery.id} className="bg-white rounded-2xl p-0 shadow-md border border-brand-purple/20 overflow-hidden">
                  {/* Status Banner */}
                  <div className="bg-brand-purple text-white px-4 py-2 text-xs font-bold flex justify-between items-center">
                    <span>EM ROTA - {delivery.id}</span>
                    <span className="animate-pulse flex items-center gap-1"><Bike size={12}/> A caminho</span>
                  </div>

                  <div className="p-4">
                    {/* Customer Info */}
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3">
                      <div>
                        <p className="font-bold text-gray-800">{delivery.customer}</p>
                      </div>
                      <button className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm">
                        <Phone size={18} />
                      </button>
                    </div>

                    {/* Address & Navigation */}
                    <div className="flex gap-3 mb-4 bg-gray-50 p-3 rounded-xl">
                      <MapPin className="text-brand-orange shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-sm font-bold text-gray-800">{delivery.address}</p>
                        {delivery.complement && <p className="text-xs text-gray-600 mt-0.5">Compl: {delivery.complement}</p>}
                        <button className="text-xs text-blue-600 font-bold flex items-center gap-1 mt-2">
                          <Navigation size={12} /> Abrir no Maps
                        </button>
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-xl mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        {getPaymentIcon(delivery.status)}
                        <p className="text-xs font-bold uppercase text-gray-700">Pagamento: {delivery.paymentMethod}</p>
                      </div>
                      
                      {delivery.status === 'pago' ? (
                        <p className="text-sm text-green-700 font-bold mt-1">Pedido já pago online. Apenas entregue.</p>
                      ) : (
                        <div className="mt-2 pt-2 border-t border-yellow-200">
                          <p className="text-sm text-red-600 font-black">COBRAR DO CLIENTE: R$ {delivery.amountToCollect.toFixed(2).replace('.', ',')}</p>
                          {delivery.changeRequired && (
                            <p className="text-xs font-bold text-gray-700 mt-1">Levar troco para R$ 100,00 (Troco: R$ {delivery.changeRequired.toFixed(2).replace('.', ',')})</p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action */}
                    <button 
                      onClick={() => finishDelivery(delivery.id)}
                      className="w-full bg-green-500 text-white py-4 rounded-xl font-black text-lg hover:bg-green-600 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={24} /> Concluir Entrega
                    </button>
                  </div>
                </div>
              )) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bike className="text-gray-300" size={32} />
                  </div>
                  <p className="text-gray-500 font-medium">Você não tem entregas em rota.</p>
                  <button onClick={() => setActiveTab('disponiveis')} className="text-brand-purple font-bold text-sm mt-2">Ver pedidos disponíveis</button>
                </div>
              )}
            </div>
          )}

        </main>
        
      </div>
    </div>
  );
}
