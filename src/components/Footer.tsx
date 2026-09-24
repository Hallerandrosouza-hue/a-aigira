import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-24 md:pb-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-brand-green tracking-tighter mb-4">
              GIRA <span className="text-brand-purple">AÇAÍ</span>
            </h3>
            <p className="text-slate-500 mb-4 text-sm">
              O melhor açaí da cidade, montado do seu jeito e entregue na sua porta.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-slate-800">Links Rápidos</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><Link href="/cardapio" className="hover:text-brand-purple transition">Cardápio</Link></li>
              <li><Link href="/montador" className="hover:text-brand-purple transition">Monte seu Açaí</Link></li>
              <li><Link href="/rastreamento" className="hover:text-brand-purple transition">Rastrear Pedido</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-slate-800">Contato</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li>Rua Fictícia, 123 - Centro</li>
              <li>(11) 99999-9999</li>
            </ul>
            <button className="mt-4 bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-opacity-90 transition w-full justify-center md:w-auto shadow-sm">
              Pedidos pelo WhatsApp
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Gira Açaí. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
