import Link from "next/link";
import { ArrowRight, Star, Heart, PlusCircle } from "lucide-react";
import { categories, products } from "@/data/mockData";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden px-4 bg-[#F8F9FA]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-[#1F2421]">
            Vem pro <span className="text-gradient-gira">melhor Açaí</span><br className="hidden md:block"/> da cidade!
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] mb-10 max-w-2xl mx-auto font-medium">
            Monte seu açaí do seu jeito, escolha seus acompanhamentos e peça de forma rápida e fácil.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/montador" 
              className="w-full sm:w-auto bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-transform transform hover:scale-105 flex items-center justify-center gap-2 shadow-md shadow-brand-orange/20"
            >
              Montar meu Açaí
              <ArrowRight size={20} />
            </Link>
            <Link 
              href="/cardapio" 
              className="w-full sm:w-auto bg-white border border-gray-200 text-[#4B5563] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
            >
              Ver cardápio
            </Link>
          </div>
        </div>
      </section>

      {/* Como quer pedir */}
      <section className="py-12 bg-white px-4 border-y border-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#1F2421]">Escolha como quer pedir</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.slice(0, 4).map((cat, i) => (
              <Link key={cat.id} href="/cardapio" className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 text-center hover:border-brand-orange/30 hover:shadow-md transition-all group">
                <div className={`w-16 h-16 mx-auto rounded-full mb-4 flex items-center justify-center ${i === 0 ? 'bg-gradient-gira' : 'bg-gray-50'}`}>
                  {i === 0 ? <Heart size={24} className="text-white" /> : <Star size={24} className="text-brand-yellow" />}
                </div>
                <h3 className="font-bold text-sm md:text-base text-[#1F2421] group-hover:text-brand-orange transition-colors">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2421]">Mais pedidos</h2>
            <Link href="/cardapio" className="text-brand-orange font-medium flex items-center gap-1 hover:underline">
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:border-brand-orange/30 hover:shadow-md transition-all group flex flex-col h-full">
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-brand-pink mb-2 uppercase tracking-wide">{product.category}</span>
                  <h3 className="font-bold text-lg mb-2 text-[#1F2421]">{product.name}</h3>
                  <p className="text-[#4B5563] text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-xl text-brand-purple">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <button className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-orange/90 transition-colors shadow-sm">
                      <PlusCircle size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
