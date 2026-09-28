"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Package, 
  Clock, 
  CheckCircle2,
  Search,
  Printer,
  X,
  Receipt,
  Bike,
  ChefHat,
  BellRing,
  LayoutGrid,
  List,
  ChevronRight,
  Check,
  Plus,
  LayoutDashboard,
  Users,
  Settings,
  Bell
} from 'lucide-react';

export default function Pedidos() {
  const [viewMode, setViewMode] = useState<'kanban' | 'tabela'>('kanban');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const [kanbanOrders, setKanbanOrders] = useState([
    {
      id: '#1024',
      code: '4211',
      customer: 'João Silva',
      shortName: 'João S.',
      phone: '(11) 98765-4321',
      address: 'Rua das Flores, 123',
      number: '123',
      neighborhood: 'Centro',
      complement: 'Apto 42',
      observation: 'Capricha no leite condensado e manda colher extra por favor!',
      paymentMethod: 'PIX',
      total: 35.90,
      subtotal: 30.90,
      deliveryFee: 5.00,
      status: 'novos',
      statusLabel: 'Novo Pedido',
      time: '19:30',
      elapsed: '3 min',
      date: '26/09/2026',
      itemsCount: 2,
      items: [
        {
          name: 'Açaí 500ml',
          price: 25.90,
          details: {
            base: 'Açaí Tradicional',
            fruits: ['Morango', 'Banana'],
            toppings: ['Leite em pó', 'Granola'],
            syrups: ['Leite condensado', 'Nutella']
          }
        },
        { name: 'Água Mineral 500ml', price: 5.00 }
      ]
    },
    {
      id: '#1025',
      code: '0220',
      customer: 'Maria Souza',
      shortName: 'Maria S.',
      phone: '(11) 91234-5678',
      address: 'Av. Paulista, 1000',
      number: '1000',
      neighborhood: 'Bela Vista',
      complement: 'Conjunto 51',
      observation: 'Sem amendoim por favor.',
      paymentMethod: 'Cartão de Crédito',
      total: 42.50,
      subtotal: 37.50,
      deliveryFee: 5.00,
      status: 'novos',
      statusLabel: 'Novo Pedido',
      time: '19:42',
      elapsed: '1 min',
      date: '26/09/2026',
      itemsCount: 1,
      items: [
        {
          name: 'Barca Gira Açaí 1L',
          price: 37.50,
          details: {
            base: 'Açaí Tradicional',
            fruits: ['Morango', 'Kiwi'],
            toppings: ['Paçoca', 'Chocoball'],
            syrups: ['Doce de Leite']
          }
        }
      ]
    },
    {
      id: '#1023',
      code: '7686',
      customer: 'Guilherme Mendes',
      shortName: 'Guilherme M.',
      phone: '(11) 97711-2233',
      address: 'Rua Augusta, 500',
      number: '500',
      neighborhood: 'Consolação',
      complement: '',
      observation: 'Mandar guardanapos.',
      paymentMethod: 'PIX',
      total: 28.00,
      subtotal: 23.00,
      deliveryFee: 5.00,
      status: 'preparacao',
      statusLabel: 'Em Preparo',
      time: '19:15',
      elapsed: '18 min',
      date: '26/09/2026',
      itemsCount: 1,
      items: [
        {
          name: 'Açaí 700ml Tradicional',
          price: 23.00,
          details: {
            base: 'Açaí Tradicional',
            fruits: ['Banana'],
            toppings: ['Granola'],
            syrups: ['Mel']
          }
        }
      ]
    },
    {
      id: '#1022',
      code: '2141',
      customer: 'Giovanna Esteves',
      shortName: 'Giovanna E.',
      phone: '(11) 96655-4433',
      address: 'Rua Oscar Freire, 200',
      number: '200',
      neighborhood: 'Jardins',
      complement: 'Casa 2',
      observation: '',
      paymentMethod: 'Dinheiro (Troco p/ 100)',
      total: 54.90,
      subtotal: 49.90,
      deliveryFee: 5.00,
      status: 'preparacao',
      statusLabel: 'Em Preparo',
      time: '19:10',
      elapsed: '22 min',
      date: '26/09/2026',
      itemsCount: 2,
      items: [
        {
          name: 'Combo Gira (2x 500ml)',
          price: 49.90,
          details: {
            base: 'Açaí Tradicional',
            fruits: ['Morango'],
            toppings: ['Leite em pó'],
            syrups: ['Chocolate']
          }
        }
      ]
    },
    {
      id: '#1021',
      code: '3302',
      customer: 'Giselle Rocha',
      shortName: 'Giselle R.',
      phone: '(11) 95544-3322',
      address: 'Rua Haddock Lobo, 800',
      number: '800',
      neighborhood: 'Cerqueira César',
      complement: '',
      observation: '',
      paymentMethod: 'PIX',
      total: 18.90,
      subtotal: 13.90,
      deliveryFee: 5.00,
      status: 'entrega',
      statusLabel: 'Saiu p/ Entrega',
      time: '18:55',
      elapsed: '35 min',
      date: '26/09/2026',
      itemsCount: 1,
      items: [
        { name: 'Açaí com Morango 300ml', price: 13.90 }
      ]
    },
    {
      id: '#1020',
      code: '0824',
      customer: 'Lucas Ferreira',
      shortName: 'Lucas F.',
      phone: '(11) 94433-2211',
      address: 'Rua Domingos de Morais, 1200',
      number: '1200',
      neighborhood: 'Vila Mariana',
      complement: 'Apto 101',
      observation: '',
      paymentMethod: 'PIX',
      total: 32.00,
      subtotal: 27.00,
      deliveryFee: 5.00,
      status: 'entregues',
      statusLabel: 'Entregue',
      time: '18:30',
      elapsed: 'Finalizado',
      date: '26/09/2026',
      itemsCount: 1,
      items: [
        { name: 'Açaí 500ml Cupuaçu', price: 27.00 }
      ]
    }
  ]);

  const advanceKanbanStatus = (id: string) => {
    setKanbanOrders(prev => prev.map(order => {
      if (order.id === id) {
        let nextStatus = order.status;
        let nextLabel = order.statusLabel;
        if (order.status === 'novos') { nextStatus = 'preparacao'; nextLabel = 'Em Preparo'; }
        else if (order.status === 'preparacao') { nextStatus = 'entrega'; nextLabel = 'Saiu p/ Entrega'; }
        else if (order.status === 'entrega') { nextStatus = 'entregues'; nextLabel = 'Entregue'; }
        return { ...order, status: nextStatus, statusLabel: nextLabel };
      }
      return order;
    }));
  };

  const handlePrint = () => { window.print(); };

  const searchFilteredOrders = kanbanOrders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const novosList = searchFilteredOrders.filter(o => o.status === 'novos');
  const preparacaoList = searchFilteredOrders.filter(o => o.status === 'preparacao');
  const entregaList = searchFilteredOrders.filter(o => o.status === 'entrega');
  const entreguesList = searchFilteredOrders.filter(o => o.status === 'entregues');

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-[#F4F5F7]">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 hidden md:block shrink-0 print:hidden">
        <div className="p-5">
          <h2 className="text-[10px] font-bold text-gray-400 mb-5 uppercase tracking-[0.15em]">Menu Gestor</h2>
          <nav className="space-y-1.5">
            <Link
              href="/pedidos"
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold bg-brand-purple text-white shadow-md shadow-brand-purple/20 transition-colors"
            >
              <div className="flex items-center gap-3"><Package size={18} /> Pedidos</div>
              {novosList.length > 0 && (
                <span className="bg-brand-orange text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-bounce">
                  {novosList.length}
                </span>
              )}
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

            <Link href="/admin" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[#4B5563] hover:text-brand-purple hover:bg-gray-50 transition-colors">
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link href="/admin" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[#4B5563] hover:text-brand-purple hover:bg-gray-50 transition-colors">
              <Users size={18} /> Clientes
            </Link>
            <Link href="/admin" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[#4B5563] hover:text-brand-purple hover:bg-gray-50 transition-colors">
              <Settings size={18} /> Configurações
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 md:p-7 overflow-x-hidden print:p-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm mb-7">
          <div className="flex items-center gap-3">
            <div className="bg-brand-purple/10 p-2.5 rounded-xl text-brand-purple">
              <Package size={24} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-[#1F2421]">Gestor de Pedidos</h1>
              <p className="text-xs text-[#4B5563]">Acompanhe o fluxo da cozinha e entregas em tempo real</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar código (#4211) ou cliente..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 pl-10 text-xs text-[#1F2421] focus:outline-none focus:border-brand-purple transition-colors"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={14} />
            </div>

            <div className="bg-gray-100 p-1 rounded-xl flex items-center gap-1 border border-gray-200">
              <button
                onClick={() => setViewMode('kanban')}
                className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'kanban' ? 'bg-white text-brand-purple shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <LayoutGrid size={14} /> Cards (Kanban)
              </button>
              <button
                onClick={() => setViewMode('tabela')}
                className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'tabela' ? 'bg-white text-brand-purple shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <List size={14} /> Lista
              </button>
            </div>

            <button 
              onClick={() => alert('Simulação: Criar novo pedido balcão')}
              className="bg-brand-orange text-white px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-brand-orange/90 transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Plus size={16} /> Balcão
            </button>
          </div>
        </div>

        {/* KANBAN VIEW */}
        {viewMode === 'kanban' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-start">

            {/* COL 1: NOVOS PEDIDOS */}
            <div className="bg-[#EAECF0] p-4 rounded-2xl border border-gray-200">
              <div className="flex justify-between items-center mb-4 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                  <h2 className="font-extrabold text-sm text-[#1F2421]">Novos Pedidos</h2>
                </div>
                <span className="bg-red-500 text-white font-black text-xs px-2.5 py-0.5 rounded-full">{novosList.length}</span>
              </div>

              <div className="space-y-4 min-h-[420px]">
                {novosList.length > 0 ? novosList.map(order => (
                  <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border-2 border-red-200 hover:border-red-400 transition-all space-y-4 group">
                    <div className="flex justify-between items-start pb-3 border-b border-gray-100">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">📍 Próprio</span>
                        <h3 className="text-3xl font-black text-[#1F2421] leading-none">{order.code}</h3>
                        <p className="text-sm font-bold text-gray-600 mt-1.5">{order.shortName}</p>
                      </div>
                      <span className="bg-red-50 text-red-600 text-[10px] font-black px-2 py-1 rounded-md border border-red-100 flex items-center gap-1">
                        <BellRing size={10} /> {order.elapsed}
                      </span>
                    </div>

                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="font-semibold text-gray-800">{order.itemsCount}x item(s) • R$ {order.total.toFixed(2).replace('.', ',')}</p>
                      <p className="text-xs text-gray-400 line-clamp-1">{order.items[0]?.name}</p>
                    </div>

                    <div className="pt-1 flex items-center gap-2">
                      <button onClick={() => setSelectedOrder(order)} className="p-2.5 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-xl transition-colors" title="Ver Comanda">
                        <Printer size={16} />
                      </button>
                      <button onClick={() => advanceKanbanStatus(order.id)} className="flex-1 bg-brand-orange text-white py-2.5 px-3 rounded-xl font-bold text-sm hover:bg-brand-orange/90 transition-colors shadow-sm flex items-center justify-center gap-1.5">
                        Aceitar / Preparar <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-16 text-xs text-gray-400 font-medium">Nenhum pedido novo no momento.</div>
                )}
              </div>
            </div>

            {/* COL 2: EM PREPARAÇÃO */}
            <div className="bg-[#EAECF0] p-4 rounded-2xl border border-gray-200">
              <div className="flex justify-between items-center mb-4 px-1">
                <div className="flex items-center gap-2">
                  <ChefHat size={16} className="text-brand-orange" />
                  <h2 className="font-extrabold text-sm text-[#1F2421]">Em Preparação</h2>
                </div>
                <span className="bg-brand-orange text-white font-black text-xs px-2.5 py-0.5 rounded-full">{preparacaoList.length}</span>
              </div>

              <div className="space-y-4 min-h-[420px]">
                {preparacaoList.length > 0 ? preparacaoList.map(order => (
                  <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border border-orange-200 hover:border-brand-orange transition-all space-y-4">
                    <div className="flex justify-between items-start pb-3 border-b border-gray-100">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">📍 Próprio</span>
                        <h3 className="text-3xl font-black text-[#1F2421] leading-none">{order.code}</h3>
                        <p className="text-sm font-bold text-gray-600 mt-1.5">{order.shortName}</p>
                      </div>
                      <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-md border border-amber-200 flex items-center gap-1">
                        <Clock size={10} /> {order.elapsed}
                      </span>
                    </div>

                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="font-semibold text-gray-800">{order.itemsCount}x item(s) • R$ {order.total.toFixed(2).replace('.', ',')}</p>
                      <p className="text-xs text-gray-400 line-clamp-1">{order.items[0]?.name}</p>
                    </div>

                    <div className="pt-1 flex items-center gap-2">
                      <button onClick={() => setSelectedOrder(order)} className="p-2.5 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-xl transition-colors" title="Ver Comanda">
                        <Printer size={16} />
                      </button>
                      <button onClick={() => advanceKanbanStatus(order.id)} className="flex-1 bg-brand-purple text-white py-2.5 px-3 rounded-xl font-bold text-sm hover:bg-brand-purple/90 transition-colors shadow-sm flex items-center justify-center gap-1.5">
                        Pronto / Despachar <Bike size={14} />
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-16 text-xs text-gray-400 font-medium">Nenhum açaí sendo montado agora.</div>
                )}
              </div>
            </div>

            {/* COL 3: SAIU P/ ENTREGA */}
            <div className="bg-[#EAECF0] p-4 rounded-2xl border border-gray-200">
              <div className="flex justify-between items-center mb-4 px-1">
                <div className="flex items-center gap-2">
                  <Bike size={16} className="text-blue-600" />
                  <h2 className="font-extrabold text-sm text-[#1F2421]">Saiu p/ Entrega</h2>
                </div>
                <span className="bg-blue-600 text-white font-black text-xs px-2.5 py-0.5 rounded-full">{entregaList.length}</span>
              </div>

              <div className="space-y-4 min-h-[420px]">
                {entregaList.length > 0 ? entregaList.map(order => (
                  <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-200 hover:border-blue-400 transition-all space-y-4">
                    <div className="flex justify-between items-start pb-3 border-b border-gray-100">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">📍 Próprio</span>
                        <h3 className="text-3xl font-black text-[#1F2421] leading-none">{order.code}</h3>
                        <p className="text-sm font-bold text-gray-600 mt-1.5">{order.shortName}</p>
                      </div>
                      <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-md border border-blue-100">Em trânsito</span>
                    </div>

                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="font-semibold text-gray-800">Endereço: {order.address}</p>
                      <p className="text-xs text-gray-400">Pagamento: {order.paymentMethod}</p>
                    </div>

                    <div className="pt-1 flex items-center gap-2">
                      <button onClick={() => setSelectedOrder(order)} className="p-2.5 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-xl transition-colors" title="Ver Comanda">
                        <Printer size={16} />
                      </button>
                      <button onClick={() => advanceKanbanStatus(order.id)} className="flex-1 bg-green-600 text-white py-2.5 px-3 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center gap-1.5">
                        <Check size={14} /> Marcar Entregue
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-16 text-xs text-gray-400 font-medium">Nenhum pedido na rua no momento.</div>
                )}
              </div>
            </div>

            {/* COL 4: ENTREGUES */}
            <div className="bg-[#EAECF0] p-4 rounded-2xl border border-gray-200">
              <div className="flex justify-between items-center mb-4 px-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <h2 className="font-extrabold text-sm text-[#1F2421]">Entregues</h2>
                </div>
                <span className="bg-green-600 text-white font-black text-xs px-2.5 py-0.5 rounded-full">{entreguesList.length}</span>
              </div>

              <div className="space-y-4 min-h-[420px]">
                {entreguesList.length > 0 ? entreguesList.map(order => (
                  <div key={order.id} className="bg-white/80 rounded-2xl p-5 shadow-sm border border-gray-200 space-y-4 opacity-90">
                    <div className="flex justify-between items-start pb-3 border-b border-gray-100">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">📍 Próprio</span>
                        <h3 className="text-3xl font-black text-gray-700 leading-none">{order.code}</h3>
                        <p className="text-sm font-bold text-gray-600 mt-1.5">{order.shortName}</p>
                      </div>
                      <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md border border-green-200 flex items-center gap-1">
                        <Check size={10} /> Concluído
                      </span>
                    </div>

                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="font-semibold text-gray-800">Total: R$ {order.total.toFixed(2).replace('.', ',')}</p>
                      <p className="text-xs text-gray-400">Entregue às {order.time}</p>
                    </div>

                    <div className="pt-1">
                      <button onClick={() => setSelectedOrder(order)} className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-1.5">
                        <Printer size={14} /> Ver Comanda
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-16 text-xs text-gray-400 font-medium">Nenhum pedido concluído recentemente.</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* LISTA / TABELA */
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-[#4B5563] text-sm border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Código</th>
                    <th className="px-6 py-4 font-semibold">Cliente</th>
                    <th className="px-6 py-4 font-semibold">Endereço</th>
                    <th className="px-6 py-4 font-semibold">Valor</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {searchFilteredOrders.map(order => (
                    <tr key={order.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-6 py-4 font-bold text-[#1F2421]">{order.code} ({order.id})</td>
                      <td className="px-6 py-4 text-[#4B5563] font-medium">{order.customer}</td>
                      <td className="px-6 py-4 text-[#4B5563] text-xs max-w-xs truncate">{order.address}</td>
                      <td className="px-6 py-4 text-[#1F2421] font-semibold">R$ {order.total.toFixed(2).replace('.', ',')}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === 'preparacao' ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20'
                            : order.status === 'novos' ? 'bg-red-50 text-red-600 border border-red-200'
                            : order.status === 'entrega' ? 'bg-blue-50 text-blue-600 border border-blue-200'
                            : 'bg-green-100 text-green-700 border border-green-200'
                        }`}>{order.statusLabel}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => setSelectedOrder(order)} className="bg-gray-100 hover:bg-brand-purple hover:text-white text-gray-700 px-3 py-1.5 rounded-lg font-bold text-xs transition-colors flex items-center gap-1.5">
                            <Printer size={14} /> Comanda
                          </button>
                          {order.status !== 'entregues' && (
                            <button onClick={() => advanceKanbanStatus(order.id)} className="bg-brand-purple text-white px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-brand-purple/90 transition-colors">
                              Avançar
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* MODAL COMANDA TÉRMICA */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            <div className="p-4 bg-brand-purple text-white flex justify-between items-center print:hidden">
              <div className="flex items-center gap-2 font-bold"><Receipt size={20} /> Comanda ({selectedOrder.code})</div>
              <button onClick={() => setSelectedOrder(null)} className="hover:bg-white/20 p-1 rounded-lg transition-colors"><X size={20} /></button>
            </div>

            <div className="p-6 overflow-y-auto bg-yellow-50/40 text-black font-mono text-sm leading-tight border-b border-t border-dashed border-gray-300">
              <div className="text-center font-bold border-b border-dashed border-black pb-3 mb-3">
                <h2 className="text-xl font-extrabold uppercase tracking-widest">GIRA AÇAÍ</h2>
                <p className="text-xs">DELIVERY & SOBREMESAS</p>
                <p className="text-xs font-normal">Rua Fictícia, 123 - Centro</p>
                <p className="text-xs font-normal">Tel: (11) 99999-9999</p>
                <div className="mt-2 text-lg bg-black text-white font-bold py-1 px-3 rounded inline-block tracking-widest">CÓDIGO {selectedOrder.code}</div>
              </div>

              <div className="text-xs flex justify-between border-b border-dashed border-black pb-2 mb-3">
                <span>Data: {selectedOrder.date}</span><span>Hora: {selectedOrder.time}</span>
              </div>

              <div className="border-b border-dashed border-black pb-3 mb-3 space-y-1">
                <p className="font-bold">CLIENTE: {selectedOrder.customer}</p>
                <p>FONE: {selectedOrder.phone}</p>
                <p className="font-bold">ENDEREÇO:</p>
                <p>{selectedOrder.address}, {selectedOrder.number}</p>
                <p>BAIRRO: {selectedOrder.neighborhood}</p>
                {selectedOrder.complement && <p>COMPL: {selectedOrder.complement}</p>}
              </div>

              <div className="border-b border-dashed border-black pb-3 mb-3">
                <p className="font-bold mb-2 uppercase border-b border-gray-400 pb-1">ITENS DO PEDIDO</p>
                {selectedOrder.items?.map((item: any, i: number) => (
                  <div key={i} className="mb-3">
                    <div className="flex justify-between font-bold"><span>1x {item.name}</span><span>R$ {item.price.toFixed(2).replace('.', ',')}</span></div>
                    {item.details && (
                      <div className="pl-3 text-xs text-gray-700 mt-1 space-y-0.5 border-l-2 border-gray-400">
                        <p>Base: {item.details.base}</p>
                        {item.details.fruits?.length > 0 && <p>Frutas: {item.details.fruits.join(', ')}</p>}
                        {item.details.toppings?.length > 0 && <p>Acomp: {item.details.toppings.join(', ')}</p>}
                        {item.details.syrups?.length > 0 && <p>Coberturas: {item.details.syrups.join(', ')}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {selectedOrder.observation && (
                <div className="border-b border-dashed border-black pb-3 mb-3 bg-yellow-100 p-2 rounded">
                  <p className="font-bold uppercase text-xs">OBSERVAÇÃO:</p>
                  <p className="italic text-xs">{selectedOrder.observation}</p>
                </div>
              )}

              <div className="space-y-1 border-b border-dashed border-black pb-3 mb-3">
                <div className="flex justify-between text-xs"><span>Subtotal:</span><span>R$ {(selectedOrder.subtotal || selectedOrder.total - 5).toFixed(2).replace('.', ',')}</span></div>
                <div className="flex justify-between text-xs"><span>Taxa Entrega:</span><span>R$ {(selectedOrder.deliveryFee || 5).toFixed(2).replace('.', ',')}</span></div>
                <div className="flex justify-between font-extrabold text-base pt-1 border-t border-black"><span>TOTAL:</span><span>R$ {selectedOrder.total.toFixed(2).replace('.', ',')}</span></div>
              </div>

              <div className="text-center font-bold text-sm bg-gray-200 py-1.5 rounded uppercase">PAGAMENTO: {selectedOrder.paymentMethod}</div>
              <div className="text-center text-[10px] text-gray-500 mt-4">*** OBRIGADO PELA PREFERÊNCIA! ***<br/>Gira Açaí - O Melhor da Cidade</div>
            </div>

            <div className="p-4 bg-gray-50 flex items-center justify-between gap-3 print:hidden">
              <button onClick={() => setSelectedOrder(null)} className="px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-200 rounded-xl transition-colors">Fechar</button>
              <button onClick={handlePrint} className="bg-brand-purple text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-purple/90 transition-colors shadow-md flex items-center gap-2">
                <Printer size={18} /> Imprimir Comanda
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
