"use client";

import { useState } from 'react';
import { orders as initialOrders } from '@/data/mockData';
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
  ChevronRight,
  Eye,
  ArrowUpRight
} from 'lucide-react';

export default function Admin() {
  const [ordersList, setOrdersList] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = ordersList.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdvanceStatus = (id: string) => {
    setOrdersList(prev => prev.map(order => {
      if (order.id === id) {
        const nextStatus = order.status === 'Pedido recebido' ? 'Em preparação' : 'Concluído';
        return { ...order, status: nextStatus };
      }
      return order;
    }));
  };

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
    <div className="flex min-h-[calc(100vh-64px)] bg-[#F8F9FA]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6">
          <h2 className="text-xs font-bold text-[#4B5563] mb-6 uppercase tracking-wider">Menu Admin</h2>
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 bg-brand-purple/10 text-brand-purple px-4 py-3 rounded-xl font-medium border border-brand-purple/20">
              <LayoutDashboard size={20} /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 text-[#4B5563] hover:text-brand-purple hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-colors">
              <Package size={20} /> Pedidos
            </a>
            <a href="#" className="flex items-center gap-3 text-[#4B5563] hover:text-brand-purple hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-colors">
              <Users size={20} /> Clientes
            </a>
            <a href="#" className="flex items-center gap-3 text-[#4B5563] hover:text-brand-purple hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-colors">
              <Settings size={20} /> Configurações
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#1F2421]">Visão Geral</h1>
            <p className="text-sm text-[#4B5563]">Acompanhamento em tempo real das vendas da Gira Açaí</p>
          </div>
          <div className="text-xs font-semibold bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-gray-500 shadow-sm">
            Atualizado agora
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Pedidos Hoje */}
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
          
          {/* Em Preparação */}
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
          
          {/* Concluídos */}
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
          
          {/* Faturamento com KPI de crescimento */}
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

        {/* Visualização Gráfica — Volume de Pedidos por Horário */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 mb-8">
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

        {/* Orders Table Section */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
          {/* Header da Tabela com Barra de Pesquisa */}
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#1F2421]">Pedidos Recentes</h2>
              <p className="text-xs text-[#4B5563]">Gerencie e avance o status dos pedidos em tempo real</p>
            </div>

            {/* Barra de Pesquisa */}
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar pedido ou cliente..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 pl-10 text-sm text-[#1F2421] focus:outline-none focus:border-brand-purple transition-colors"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Tabela de Pedidos */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[#4B5563] text-sm border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Pedido</th>
                  <th className="px-6 py-4 font-semibold">Cliente</th>
                  <th className="px-6 py-4 font-semibold">Valor</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Horário</th>
                  <th className="px-6 py-4 font-semibold text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map(order => (
                    <tr key={order.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-6 py-4 font-bold text-[#1F2421]">{order.id}</td>
                      <td className="px-6 py-4 text-[#4B5563] font-medium">{order.customer}</td>
                      <td className="px-6 py-4 text-[#1F2421] font-semibold">R$ {order.total.toFixed(2).replace('.', ',')}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === 'Em preparação' 
                            ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' 
                            : order.status === 'Pedido recebido'
                            ? 'bg-blue-50 text-blue-600 border border-blue-200'
                            : 'bg-green-100 text-green-700 border border-green-200'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#4B5563]">{order.time}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {order.status !== 'Concluído' ? (
                            <button 
                              onClick={() => handleAdvanceStatus(order.id)}
                              className="bg-brand-purple text-white px-3 py-1.5 rounded-lg font-bold text-xs hover:bg-brand-purple/90 transition-colors shadow-sm"
                            >
                              {order.status === 'Pedido recebido' ? 'Iniciar Preparo' : 'Concluir'}
                            </button>
                          ) : (
                            <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                              <CheckCircle2 size={14} /> Finalizado
                            </span>
                          )}
                          <button className="p-1.5 text-gray-400 hover:text-brand-purple transition-colors rounded-lg hover:bg-gray-100">
                            <Eye size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                      Nenhum pedido encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Rodapé da Tabela */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-[#4B5563]">
            <span>Exibindo {filteredOrders.length} pedido(s)</span>
            <a href="#" className="font-bold text-brand-purple hover:underline flex items-center gap-1">
              Ver todos os pedidos <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
