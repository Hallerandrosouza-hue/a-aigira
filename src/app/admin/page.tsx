import { orders } from '@/data/mockData';
import { Package, TrendingUp, Users, DollarSign, Settings, LayoutDashboard, Clock, CheckCircle2 } from 'lucide-react';

export default function Admin() {
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar - hidden on mobile for simplicity in MVP */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#4B5563] mb-6 uppercase tracking-wider text-sm">Menu Admin</h2>
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
      <main className="flex-1 p-6 md:p-8 bg-[#F8F9FA]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1F2421]">Visão Geral</h1>
          <div className="text-sm text-[#4B5563]">Mock MVP Dashboard</div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[#4B5563] text-sm mb-1">Pedidos Hoje</p>
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
                <p className="text-[#4B5563] text-sm mb-1">Em Preparação</p>
                <h3 className="text-3xl font-bold text-brand-orange">5</h3>
              </div>
              <div className="bg-brand-orange/10 p-3 rounded-xl">
                <Clock className="text-brand-orange" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[#4B5563] text-sm mb-1">Concluídos</p>
                <h3 className="text-3xl font-bold text-green-600">19</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-xl">
                <CheckCircle2 className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[#4B5563] text-sm mb-1">Faturamento</p>
                <h3 className="text-3xl font-bold text-[#1F2421]">R$ 845,90</h3>
              </div>
              <div className="bg-brand-yellow/20 p-3 rounded-xl">
                <DollarSign className="text-brand-yellow" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-[#1F2421]">Pedidos Recentes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[#4B5563] text-sm">
                <tr>
                  <th className="px-6 py-4 font-medium">Pedido</th>
                  <th className="px-6 py-4 font-medium">Cliente</th>
                  <th className="px-6 py-4 font-medium">Valor</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Horário</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#1F2421]">{order.id}</td>
                    <td className="px-6 py-4 text-[#4B5563]">{order.customer}</td>
                    <td className="px-6 py-4 text-[#1F2421]">R$ {order.total.toFixed(2).replace('.', ',')}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Em preparação' ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' : 'bg-green-100 text-green-700 border border-green-200'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#4B5563]">{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
