"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Package, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Settings, 
  LayoutDashboard, 
  Clock, 
  CheckCircle2,
  Search,
  Phone,
  Save,
  ToggleLeft,
  ToggleRight,
  Printer,
  Bike
} from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'clientes' | 'configuracoes'>('dashboard');

  // Store Settings state
  const [storeIsOpen, setStoreIsOpen] = useState(true);
  const [deliveryFee, setDeliveryFee] = useState('5,00');
  const [deliveryTime, setDeliveryTime] = useState('30-45');
  const [autoWhatsapp, setAutoWhatsapp] = useState(true);

  // Mock Customers Data
  const customers = [
    { id: 'c1', name: 'João Silva', phone: '(11) 98765-4321', totalOrders: 12, totalSpent: 345.80, lastOrder: '26/09/2026' },
    { id: 'c2', name: 'Maria Souza', phone: '(11) 91234-5678', totalOrders: 5, totalSpent: 189.50, lastOrder: '26/09/2026' },
    { id: 'c3', name: 'Guilherme Mendes', phone: '(11) 97711-2233', totalOrders: 8, totalSpent: 260.00, lastOrder: '26/09/2026' },
    { id: 'c4', name: 'Giovanna Esteves', phone: '(11) 96655-4433', totalOrders: 15, totalSpent: 512.90, lastOrder: '26/09/2026' },
  ];

  // Mock hourly peak data for chart
  const hourlyData = [
    { hour: '17:00', count: 4, height: '30%' },
    { hour: '18:00', count: 12, height: '70%' },
    { hour: '19:00', count: 18, height: '100%' },
    { hour: '20:00', count: 15, height: '85%' },
    { hour: '21:00', count: 8, height: '50%' },
    { hour: '22:00', count: 3, height: '20%' },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-[#F4F5F7]">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 hidden md:block shrink-0 print:hidden">
        <div className="p-5">
          <h2 className="text-[10px] font-bold text-gray-400 mb-5 uppercase tracking-[0.15em]">Menu Gestor</h2>
          <nav className="space-y-1.5">
            <Link 
              href="/pedidos"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-[#4B5563] hover:text-brand-purple hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Package size={18} /> Pedidos
              </div>
            </Link>

            <Link 
              href="/entregador"
              target="_blank"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-[#4B5563] hover:text-brand-orange hover:bg-orange-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Bike size={18} /> App do Entregador
              </div>
            </Link>

            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'dashboard' 
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20' 
                  : 'text-[#4B5563] hover:text-brand-purple hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard size={18} /> Dashboard & Kpis
            </button>

            <button 
              onClick={() => setActiveTab('clientes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'clientes' 
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20' 
                  : 'text-[#4B5563] hover:text-brand-purple hover:bg-gray-50'
              }`}
            >
              <Users size={18} /> Clientes
            </button>
            <button 
              onClick={() => setActiveTab('configuracoes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'configuracoes' 
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20' 
                  : 'text-[#4B5563] hover:text-brand-purple hover:bg-gray-50'
              }`}
            >
              <Settings size={18} /> Configurações
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-5 md:p-7 overflow-x-hidden print:p-0">
        
        {/* TAB 1: DASHBOARD & KPIS */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-[#1F2421]">Visão Geral & KPIs</h1>
                <p className="text-sm text-[#4B5563]">Acompanhamento em tempo real das vendas da Gira Açaí</p>
              </div>
              <div className="text-xs font-semibold bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-gray-500 shadow-sm">
                Atualizado agora
              </div>
            </div>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[#4B5563] text-sm mb-1 font-medium">Pedidos Hoje</p>
                    <h3 className="text-3xl font-bold text-[#1F2421]">24</h3>
                  </div>
                  <div className="bg-brand-purple/10 p-3 rounded-xl">
                    <Package className="text-brand-purple" size={24} />
                  </div>
                </div>
                <div className="text-green-600 text-sm flex items-center gap-1 font-medium">
                  <TrendingUp size={16} /> +12% que ontem
                </div>
              </div>
              
              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[#4B5563] text-sm mb-1 font-medium">Em Preparação</p>
                    <h3 className="text-3xl font-bold text-brand-orange">5</h3>
                  </div>
                  <div className="bg-brand-orange/10 p-3 rounded-xl">
                    <Clock className="text-brand-orange" size={24} />
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-medium">Tempo médio: 14 min</p>
              </div>
              
              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[#4B5563] text-sm mb-1 font-medium">Concluídos</p>
                    <h3 className="text-3xl font-bold text-green-600">19</h3>
                  </div>
                  <div className="bg-green-100 p-3 rounded-xl">
                    <CheckCircle2 className="text-green-600" size={24} />
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-medium">Taxa de sucesso: 100%</p>
              </div>
              
              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[#4B5563] text-sm mb-1 font-medium">Faturamento</p>
                    <h3 className="text-3xl font-bold text-[#1F2421]">R$ 845,90</h3>
                  </div>
                  <div className="bg-brand-yellow/20 p-3 rounded-xl">
                    <DollarSign className="text-brand-yellow" size={24} />
                  </div>
                </div>
                <div className="text-green-600 text-sm flex items-center gap-1 font-medium">
                  <TrendingUp size={16} /> +18% que ontem
                </div>
              </div>
            </div>

            {/* Peak Hours Chart */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1F2421]">Horários de Pico</h2>
                  <p className="text-sm text-[#4B5563]">Volume de pedidos recebidos por hora hoje</p>
                </div>
                <span className="text-xs font-semibold bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full">
                  Pico às 19:00 (18 pedidos)
                </span>
              </div>

              <div className="h-44 flex items-end justify-between gap-4 pt-4 border-b border-gray-100 pb-2">
                {hourlyData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <span className="text-xs font-bold text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.count} ped.
                    </span>
                    <div 
                      className="w-full bg-brand-purple/20 hover:bg-brand-purple rounded-t-lg transition-all duration-300 relative"
                      style={{ height: item.height }}
                    ></div>
                    <span className="text-xs font-medium text-[#4B5563]">{item.hour}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CLIENTES */}
        {activeTab === 'clientes' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h1 className="text-3xl font-bold text-[#1F2421]">Clientes</h1>
              <p className="text-sm text-[#4B5563]">Base de clientes cadastrados e histórico de compras</p>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#1F2421]">Lista de Clientes</h2>
                <div className="relative w-64">
                  <input 
                    type="text" 
                    placeholder="Buscar por cliente..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 pl-9 text-xs text-[#1F2421] focus:outline-none focus:border-brand-purple"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-[#4B5563] text-sm border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Cliente</th>
                      <th className="px-6 py-4 font-semibold">Telefone / WhatsApp</th>
                      <th className="px-6 py-4 font-semibold">Total de Pedidos</th>
                      <th className="px-6 py-4 font-semibold">Total Gasto</th>
                      <th className="px-6 py-4 font-semibold">Último Pedido</th>
                      <th className="px-6 py-4 font-semibold text-right">Contato</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {customers.map(c => (
                      <tr key={c.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="px-6 py-4 font-bold text-[#1F2421]">{c.name}</td>
                        <td className="px-6 py-4 text-[#4B5563] font-medium">{c.phone}</td>
                        <td className="px-6 py-4 text-[#1F2421] font-semibold">{c.totalOrders} pedidos</td>
                        <td className="px-6 py-4 text-green-600 font-bold">R$ {c.totalSpent.toFixed(2).replace('.', ',')}</td>
                        <td className="px-6 py-4 text-[#4B5563]">{c.lastOrder}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="bg-[#25D366] text-white px-3 py-1 rounded-lg font-bold text-xs hover:opacity-90 transition-opacity flex items-center gap-1 ml-auto">
                            <Phone size={12} /> WhatsApp
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONFIGURAÇÕES */}
        {activeTab === 'configuracoes' && (
          <div className="space-y-6 max-w-4xl animate-in fade-in duration-300">
            <div>
              <h1 className="text-3xl font-bold text-[#1F2421]">Configurações da Loja</h1>
              <p className="text-sm text-[#4B5563]">Parâmetros de funcionamento, entregas e impressão de comandas</p>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-[#1F2421]">Status da Loja (Aberto / Fechado)</h3>
                <p className="text-sm text-[#4B5563]">Quando fechado, os clientes não conseguirão enviar novos pedidos.</p>
              </div>
              <button 
                onClick={() => setStoreIsOpen(!storeIsOpen)}
                className="flex items-center gap-2 font-bold text-sm cursor-pointer"
              >
                {storeIsOpen ? (
                  <span className="text-green-600 bg-green-50 px-4 py-2 rounded-xl border border-green-200 flex items-center gap-2">
                    <ToggleRight size={24} /> Aberta para Pedidos
                  </span>
                ) : (
                  <span className="text-red-500 bg-red-50 px-4 py-2 rounded-xl border border-red-200 flex items-center gap-2">
                    <ToggleLeft size={24} /> Loja Fechada
                  </span>
                )}
              </button>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-lg text-[#1F2421] border-b border-gray-100 pb-3 flex items-center gap-2">
                <Printer size={20} className="text-brand-purple" /> Impressora Térmica (Comandas)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4B5563] mb-1">Largura da Bobina</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-sm font-bold text-[#1F2421] focus:outline-none focus:border-brand-purple">
                    <option>80mm (Padrão Térmica)</option>
                    <option>58mm (Não fiscal portátil)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4B5563] mb-1">Auto-impressão ao receber pedido</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-sm font-bold text-[#1F2421] focus:outline-none focus:border-brand-purple">
                    <option>Sim (Imprimir automaticamente)</option>
                    <option>Não (Manual por clique)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => alert('Configurações salvas com sucesso!')}
                className="bg-brand-purple text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-brand-purple/90 transition-colors shadow-sm flex items-center gap-2"
              >
                <Save size={18} /> Salvar Alterações
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
