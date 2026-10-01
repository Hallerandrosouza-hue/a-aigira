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
  Bike,
  ShoppingBag,
  X,
  Image as ImageIcon,
  Upload
} from 'lucide-react';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'clientes' | 'entregadores' | 'produtos' | 'configuracoes'>('dashboard');
  const [productSubTab, setProductSubTab] = useState<'prontos' | 'acompanhamentos'>('prontos');
  const [driverSubTab, setDriverSubTab] = useState<'lista' | 'cadastro'>('lista');
  const [newDriver, setNewDriver] = useState({ name: '', phone: '', vehicle: '', licensePlate: '' });
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);

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

  // Mock Drivers Data
  const [drivers, setDrivers] = useState([
    { id: 'd1', name: 'Carlos Motoboy', phone: '(11) 99999-1111', vehicle: 'Moto Honda CG', licensePlate: 'ABC-1234', status: 'em_rota', currentOrder: '#812' },
    { id: 'd2', name: 'Roberto Entregas', phone: '(11) 98888-2222', vehicle: 'Moto Yamaha', licensePlate: 'XYZ-9876', status: 'livre' },
    { id: 'd3', name: 'João Express', phone: '(11) 97777-3333', vehicle: 'Moto Honda Biz', licensePlate: 'QWE-4321', status: 'offline' },
  ]);

  // Mock Products Data
  const [products, setProducts] = useState([
    { id: 'p1', name: 'Copo Açaí 300ml', category: 'Copos Tradicionais', price: 14.90, active: true, image: 'https://images.unsplash.com/photo-1590137537678-83193e25b121?w=500&q=80' },
    { id: 'p2', name: 'Copo Açaí 500ml', category: 'Copos Tradicionais', price: 20.90, active: true, image: 'https://images.unsplash.com/photo-1550505095-81378a876115?w=500&q=80' },
    { id: 'p3', name: 'Barca Gira Açaí 1L', category: 'Especiais', price: 45.00, active: true, image: 'https://images.unsplash.com/photo-1579954115545-a95711fe5922?w=500&q=80' },
    { id: 'p4', name: 'Água Mineral', category: 'Bebidas', price: 5.00, active: false, image: '' },
  ]);

  // Mock Accompaniments Data
  const [acompanhamentos, setAcompanhamentos] = useState([
    { id: 'a1', name: 'Leite em Pó', type: 'Topping', weight: '50g', price: 2.00, active: true },
    { id: 'a2', name: 'Morango', type: 'Fruta', weight: '100g', price: 3.50, active: true },
    { id: 'a3', name: 'Nutella', type: 'Cobertura', weight: '30g', price: 4.00, active: true },
    { id: 'a4', name: 'Açaí Tradicional', type: 'Base/Peso', weight: '300ml', price: 10.00, active: true },
  ]);

  // Modal State for New Product
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isAcompanhamentoModalOpen, setIsAcompanhamentoModalOpen] = useState(false);

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
              onClick={() => setActiveTab('entregadores')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'entregadores' 
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20' 
                  : 'text-[#4B5563] hover:text-brand-purple hover:bg-gray-50'
              }`}
            >
              <Bike size={18} /> Entregadores
            </button>
            <button 
              onClick={() => setActiveTab('produtos')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                activeTab === 'produtos' 
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20' 
                  : 'text-[#4B5563] hover:text-brand-purple hover:bg-gray-50'
              }`}
            >
              <ShoppingBag size={18} /> Produtos (Cardápio)
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

            {/* Status da Frota (Entregadores) */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#1F2421] flex items-center gap-2">
                    <Bike className="text-brand-orange" size={24} /> Status da Frota
                  </h2>
                  <p className="text-sm text-[#4B5563]">Acompanhe seus entregadores em tempo real</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#4B5563] bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    {drivers.filter(d => d.status === 'em_rota').length} em Rota
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#4B5563] bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {drivers.filter(d => d.status === 'livre').length} Livres
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {drivers.map(d => (
                  <div key={d.id} className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-bold text-[#1F2421]">{d.name}</p>
                        <p className="text-xs text-[#4B5563]">{d.vehicle} • {d.licensePlate}</p>
                      </div>
                      
                      {d.status === 'em_rota' && (
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Em Rota
                        </span>
                      )}
                      {d.status === 'livre' && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span> Livre
                        </span>
                      )}
                      {d.status === 'offline' && (
                        <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-gray-400"></span> Offline
                        </span>
                      )}
                    </div>
                    
                    {d.status === 'em_rota' ? (
                      <div className="mt-2 pt-3 border-t border-gray-50">
                        <p className="text-xs font-bold text-gray-500 mb-2">Entregando Pedido <span className="text-brand-purple">{d.currentOrder}</span></p>
                        <button 
                          onClick={() => window.open(`https://wa.me/${d.phone.replace(/\D/g,'')}`, '_blank')}
                          className="w-full bg-blue-50 text-blue-600 border border-blue-100 py-2 rounded-lg font-bold text-xs hover:bg-blue-100 transition-colors flex items-center justify-center gap-1"
                        >
                          <Phone size={14} /> Falar com Entregador
                        </button>
                      </div>
                    ) : d.status === 'livre' ? (
                      <div className="mt-2 pt-3 border-t border-gray-50">
                        <button 
                          onClick={() => window.open(`https://wa.me/${d.phone.replace(/\D/g,'')}?text=Temos entregas pra você, ${d.name}! Pode pegar?`, '_blank')}
                          className="w-full bg-[#25D366] text-white py-2 rounded-lg font-bold text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                        >
                          <Phone size={14} /> Chamar para Entrega
                        </button>
                      </div>
                    ) : (
                      <div className="mt-2 pt-3 border-t border-gray-50">
                        <p className="text-xs text-gray-400 text-center font-medium">Entregador Indisponível</p>
                      </div>
                    )}
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

        {/* TAB 2.5: ENTREGADORES */}
        {activeTab === 'entregadores' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h1 className="text-3xl font-bold text-[#1F2421]">Entregadores</h1>
              <p className="text-sm text-[#4B5563]">Gerencie e cadastre sua equipe de entregas (Motoboys)</p>
            </div>

            {/* Sub-tabs */}
            <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 p-1 w-max">
              <button
                onClick={() => { setDriverSubTab('lista'); setGeneratedLink(null); }}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors ${
                  driverSubTab === 'lista' ? 'bg-brand-purple text-white shadow' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Equipe Cadastrada
              </button>
              <button
                onClick={() => { setDriverSubTab('cadastro'); setGeneratedLink(null); setNewDriver({ name: '', phone: '', vehicle: '', licensePlate: '' }); }}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors ${
                  driverSubTab === 'cadastro' ? 'bg-brand-purple text-white shadow' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                + Cadastrar Novo Entregador
              </button>
            </div>

            {/* SUB-TAB: LISTA */}
            {driverSubTab === 'lista' && (
              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-[#1F2421]">Equipe Cadastrada</h2>
                  <div className="relative w-64">
                    <input 
                      type="text" 
                      placeholder="Buscar por nome ou placa..." 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 pl-9 text-xs text-[#1F2421] focus:outline-none focus:border-brand-purple"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-[#4B5563] text-sm border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Nome</th>
                        <th className="px-6 py-4 font-semibold">Telefone</th>
                        <th className="px-6 py-4 font-semibold">Veículo</th>
                        <th className="px-6 py-4 font-semibold">Placa</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold">Link do App</th>
                        <th className="px-6 py-4 font-semibold text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {drivers.map(d => (
                        <tr key={d.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="px-6 py-4 font-bold text-[#1F2421]">{d.name}</td>
                          <td className="px-6 py-4 text-[#4B5563] font-medium">{d.phone}</td>
                          <td className="px-6 py-4 text-[#4B5563] font-medium">{d.vehicle}</td>
                          <td className="px-6 py-4">
                            <span className="font-mono font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded text-xs">{d.licensePlate}</span>
                          </td>
                          <td className="px-6 py-4">
                            {d.status === 'livre' && (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Livre
                              </span>
                            )}
                            {d.status === 'em_rota' && (
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Em Rota
                              </span>
                            )}
                            {d.status === 'offline' && (
                              <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span> Offline
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <code className="text-xs text-brand-purple bg-brand-purple/10 px-2 py-1 rounded-lg">
                                /entregador?id={d.id}
                              </code>
                              <button 
                                onClick={() => {
                                  navigator.clipboard?.writeText(`https://a-aigira.vercel.app/entregador?id=${d.id}`);
                                  alert('Link copiado!');
                                }}
                                className="text-xs text-gray-500 hover:text-brand-purple font-bold border border-gray-200 px-2 py-1 rounded-lg hover:border-brand-purple transition-colors"
                              >
                                Copiar
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button onClick={() => alert(`Editar ${d.name}`)} className="text-brand-purple hover:underline font-bold text-xs">Editar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SUB-TAB: CADASTRO */}
            {driverSubTab === 'cadastro' && (
              <div className="max-w-2xl space-y-6">
                {!generatedLink ? (
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-[#1F2421] mb-1">Dados do Entregador</h2>
                      <p className="text-sm text-[#4B5563]">Preencha os dados abaixo. Ao salvar, será gerado um link exclusivo para ele acessar o app.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-bold text-[#1F2421] mb-2">Nome Completo *</label>
                        <input 
                          type="text"
                          value={newDriver.name}
                          onChange={e => setNewDriver(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Ex: Carlos da Silva"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#1F2421] mb-2">Telefone / WhatsApp *</label>
                        <input 
                          type="text"
                          value={newDriver.phone}
                          onChange={e => setNewDriver(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="(11) 99999-9999"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#1F2421] mb-2">Placa da Moto *</label>
                        <input 
                          type="text"
                          value={newDriver.licensePlate}
                          onChange={e => setNewDriver(prev => ({ ...prev, licensePlate: e.target.value.toUpperCase() }))}
                          placeholder="ABC-1234"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm font-mono font-bold text-[#1F2421] uppercase focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                        />
                      </div>

                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-bold text-[#1F2421] mb-2">Veículo</label>
                        <input 
                          type="text"
                          value={newDriver.vehicle}
                          onChange={e => setNewDriver(prev => ({ ...prev, vehicle: e.target.value }))}
                          placeholder="Ex: Moto Honda CG 160"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button 
                        onClick={() => setDriverSubTab('lista')}
                        className="px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                      >
                        Cancelar
                      </button>
                      <button 
                        onClick={() => {
                          if (!newDriver.name || !newDriver.phone || !newDriver.licensePlate) {
                            alert('Preencha nome, telefone e placa para continuar!');
                            return;
                          }
                          const newId = `d${Date.now()}`;
                          const link = `https://a-aigira.vercel.app/entregador?id=${newId}`;
                          setDrivers(prev => [...prev, {
                            id: newId,
                            name: newDriver.name,
                            phone: newDriver.phone,
                            vehicle: newDriver.vehicle || 'Não informado',
                            licensePlate: newDriver.licensePlate,
                            status: 'offline'
                          }]);
                          setGeneratedLink(link);
                        }}
                        className="bg-brand-purple text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-purple/90 transition-colors shadow-md"
                      >
                        Cadastrar e Gerar Link
                      </button>
                    </div>
                  </div>
                ) : (
                  /* SUCCESS: Link Generated */
                  <div className="bg-white border-2 border-green-200 shadow-sm rounded-2xl p-8 text-center space-y-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="text-green-600" size={44} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#1F2421] mb-1">Entregador Cadastrado! 🎉</h2>
                      <p className="text-[#4B5563] text-sm">Compartilhe o link abaixo com <strong>{newDriver.name}</strong>. Ao acessar, ele já entra direto no app de entregas.</p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Link Exclusivo do Entregador</p>
                      <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-xl px-4 py-3 break-all">
                        <code className="text-brand-purple font-bold text-sm">{generatedLink}</code>
                      </div>
                      <div className="flex gap-3 justify-center">
                        <button 
                          onClick={() => {
                            navigator.clipboard?.writeText(generatedLink);
                            alert('Link copiado para a área de transferência!');
                          }}
                          className="flex-1 bg-brand-purple text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-purple/90 transition-colors shadow-md"
                        >
                          📋 Copiar Link
                        </button>
                        <button 
                          onClick={() => {
                            window.open(`https://wa.me/${newDriver.phone.replace(/\D/g,'')}?text=Olá ${newDriver.name}! Seu link de acesso ao app de entregas da Gira Açaí é: ${generatedLink}`, '_blank');
                          }}
                          className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-md"
                        >
                          📲 Enviar por WhatsApp
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={() => { setDriverSubTab('lista'); setGeneratedLink(null); }}
                      className="text-sm font-bold text-[#4B5563] hover:text-brand-purple transition-colors"
                    >
                      ← Ver lista de entregadores
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PRODUTOS */}
        {activeTab === 'produtos' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-[#1F2421]">Produtos (Cardápio)</h1>
                <p className="text-sm text-[#4B5563]">Gerencie os açaís prontos e os adicionais do montador</p>
              </div>
              <button 
                onClick={() => productSubTab === 'prontos' ? setIsProductModalOpen(true) : setIsAcompanhamentoModalOpen(true)} 
                className="bg-brand-orange text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-orange/90 transition-colors shadow-sm flex items-center gap-2"
              >
                + {productSubTab === 'prontos' ? 'Novo Açaí Pronto' : 'Novo Adicional / Peso'}
              </button>
            </div>

            {/* Sub-tabs */}
            <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 p-1 w-max">
              <button
                onClick={() => setProductSubTab('prontos')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors ${
                  productSubTab === 'prontos' ? 'bg-brand-purple text-white shadow' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Açaís Prontos
              </button>
              <button
                onClick={() => setProductSubTab('acompanhamentos')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors ${
                  productSubTab === 'acompanhamentos' ? 'bg-brand-purple text-white shadow' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Acompanhamentos / Pesos
              </button>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#1F2421]">
                  {productSubTab === 'prontos' ? 'Itens Prontos Cadastrados' : 'Adicionais & Quantidades'}
                </h2>
                <div className="relative w-64">
                  <input 
                    type="text" 
                    placeholder="Buscar..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 pl-9 text-xs text-[#1F2421] focus:outline-none focus:border-brand-purple"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                {productSubTab === 'prontos' ? (
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-[#4B5563] text-sm border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 font-semibold w-16">Foto</th>
                        <th className="px-6 py-4 font-semibold">Nome do Produto</th>
                        <th className="px-6 py-4 font-semibold">Categoria</th>
                        <th className="px-6 py-4 font-semibold">Preço</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {products.map(p => (
                        <tr key={p.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="px-6 py-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center shrink-0 border border-gray-200">
                              {p.image ? (
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                              ) : (
                                <ImageIcon className="text-gray-400" size={20} />
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 font-bold text-[#1F2421]">{p.name}</td>
                          <td className="px-6 py-4 text-[#4B5563] font-medium">{p.category}</td>
                          <td className="px-6 py-4 text-brand-purple font-bold">R$ {p.price.toFixed(2).replace('.', ',')}</td>
                          <td className="px-6 py-4">
                            {p.active ? (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold w-max">Ativo</span>
                            ) : (
                              <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-bold w-max">Inativo</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button onClick={() => alert(`Editar ${p.name}`)} className="text-brand-purple hover:underline font-bold text-xs mr-3">Editar</button>
                            <button onClick={() => alert(`Excluir ${p.name}`)} className="text-red-500 hover:underline font-bold text-xs">Excluir</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-[#4B5563] text-sm border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Nome do Adicional/Peso</th>
                        <th className="px-6 py-4 font-semibold">Tipo</th>
                        <th className="px-6 py-4 font-semibold">Quantidade / Peso</th>
                        <th className="px-6 py-4 font-semibold">Preço</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {acompanhamentos.map(a => (
                        <tr key={a.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="px-6 py-4 font-bold text-[#1F2421]">{a.name}</td>
                          <td className="px-6 py-4 text-[#4B5563] font-medium">{a.type}</td>
                          <td className="px-6 py-4 text-[#4B5563] font-medium">{a.weight}</td>
                          <td className="px-6 py-4 text-brand-purple font-bold">{a.price === 0 ? 'Grátis' : `R$ ${a.price.toFixed(2).replace('.', ',')}`}</td>
                          <td className="px-6 py-4">
                            {a.active ? (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold w-max">Ativo</span>
                            ) : (
                              <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs font-bold w-max">Inativo</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button onClick={() => alert(`Editar ${a.name}`)} className="text-brand-purple hover:underline font-bold text-xs mr-3">Editar</button>
                            <button onClick={() => alert(`Excluir ${a.name}`)} className="text-red-500 hover:underline font-bold text-xs">Excluir</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONFIGURAÇÕES */}
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

      {/* MODAL NOVO PRODUTO */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-bold text-[#1F2421] flex items-center gap-2">
                <ShoppingBag className="text-brand-purple" size={24} /> Cadastrar Novo Produto
              </h2>
              <button 
                onClick={() => setIsProductModalOpen(false)} 
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-600 p-2 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              {/* Image Upload Area */}
              <div>
                <label className="block text-sm font-bold text-[#1F2421] mb-2">Foto do Produto</label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-brand-purple/5 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Upload size={28} />
                  </div>
                  <p className="font-bold text-[#1F2421] text-sm mb-1">Clique para enviar ou arraste a imagem</p>
                  <p className="text-xs text-gray-500">Formatos suportados: JPG, PNG (Tamanho ideal: 500x500px)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-[#1F2421] mb-2">Nome do Produto</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Copo Açaí 700ml" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#1F2421] mb-2">Categoria</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple">
                    <option>Copos Tradicionais</option>
                    <option>Especiais</option>
                    <option>Bebidas</option>
                    <option>Adicionais</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1F2421] mb-2">Preço (R$)</label>
                  <input 
                    type="text" 
                    placeholder="0,00" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-[#1F2421] mb-2">Descrição (Opcional)</label>
                  <textarea 
                    placeholder="Descreva os ingredientes ou detalhes do produto..." 
                    rows={3}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-gray-100 flex items-center justify-end gap-3 bg-gray-50">
              <button 
                onClick={() => setIsProductModalOpen(false)} 
                className="px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-200 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={() => {
                  alert('Simulação: Produto salvo com sucesso!');
                  setIsProductModalOpen(false);
                }} 
                className="bg-brand-purple text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-purple/90 transition-colors shadow-md"
              >
                Salvar Produto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL NOVO ADICIONAL / PESO */}
      {isAcompanhamentoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-bold text-[#1F2421] flex items-center gap-2">
                <Package className="text-brand-purple" size={24} /> Cadastrar Adicional / Peso
              </h2>
              <button 
                onClick={() => setIsAcompanhamentoModalOpen(false)} 
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-600 p-2 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-[#1F2421] mb-2">Nome do Adicional</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Leite Ninho, Morango, Base Tradicional..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#1F2421] mb-2">Tipo</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple">
                    <option>Fruta</option>
                    <option>Topping / Crocante</option>
                    <option>Cobertura / Calda</option>
                    <option>Base / Tamanho</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#1F2421] mb-2">Preço (R$)</label>
                  <input 
                    type="text" 
                    placeholder="0,00 (Deixe 0 para Grátis)" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-bold text-[#1F2421] mb-2">Quantidade / Peso / Medida</label>
                  <input 
                    type="text" 
                    placeholder="Ex: 50g, 100ml, 1 colher..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                  />
                  <p className="text-xs text-gray-500 mt-1">Essa informação ajuda o cliente a saber a porção exata.</p>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-gray-100 flex items-center justify-end gap-3 bg-gray-50">
              <button 
                onClick={() => setIsAcompanhamentoModalOpen(false)} 
                className="px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-200 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={() => {
                  alert('Simulação: Adicional salvo com sucesso!');
                  setIsAcompanhamentoModalOpen(false);
                }} 
                className="bg-brand-purple text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-purple/90 transition-colors shadow-md"
              >
                Salvar Adicional
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
