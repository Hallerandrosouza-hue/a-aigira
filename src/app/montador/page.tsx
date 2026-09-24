"use client";

import { useState } from 'react';
import { sizes, bases, fruits, toppings, syrups } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Montador() {
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [step, setStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [selectedBase, setSelectedBase] = useState<any>(null);
  const [selectedFruits, setSelectedFruits] = useState<any[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<any[]>([]);
  const [selectedSyrups, setSelectedSyrups] = useState<any[]>([]);

  const totalSteps = 6;

  const calculateTotal = () => {
    let total = 0;
    if (selectedSize) total += selectedSize.price;
    if (selectedBase) total += selectedBase.extraPrice;
    selectedFruits.forEach(f => total += f.extraPrice);
    selectedToppings.forEach(t => total += t.extraPrice);
    selectedSyrups.forEach(s => total += s.extraPrice);
    return total;
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = () => {
    const total = calculateTotal();
    addToCart({
      id: 'montado-' + Date.now(),
      name: `Açaí Montado - ${selectedSize?.name}`,
      price: total,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&q=80&w=400&h=400',
      details: {
        size: selectedSize?.name,
        base: selectedBase?.name,
        fruits: selectedFruits.map(f => f.name),
        toppings: selectedToppings.map(t => t.name),
        syrups: selectedSyrups.map(s => s.name)
      }
    });
    router.push('/carrinho');
  };

  const toggleMultiple = (item: any, selectedArray: any[], setter: any) => {
    const exists = selectedArray.find(i => i.id === item.id);
    if (exists) {
      setter(selectedArray.filter(i => i.id !== item.id));
    } else {
      setter([...selectedArray, item]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">Monte seu <span className="text-brand-purple">Açaí</span></h1>
        
        {/* Progress bar */}
        <div className="mt-6 flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-purple -z-10 rounded-full transition-all duration-300"
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
          
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div 
              key={i} 
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-2 shadow-sm ${
                step >= i 
                  ? 'bg-brand-purple border-brand-purple text-white' 
                  : 'bg-white border-gray-200 text-slate-400'
              }`}
            >
              {step > i ? <Check size={16} /> : i}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 min-h-[400px]">
        {/* STEP 1: TAMANHO */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">1. Escolha o Tamanho</h2>
            <div className="grid grid-cols-2 gap-4">
              {sizes.map(size => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size)}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    selectedSize?.id === size.id 
                      ? 'border-brand-purple bg-brand-purple/5' 
                      : 'border-gray-200 hover:border-brand-purple/30 bg-white'
                  }`}
                >
                  <div className="font-bold text-lg mb-1 text-slate-800">{size.name}</div>
                  <div className="text-brand-green font-medium">R$ {size.price.toFixed(2).replace('.', ',')}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: BASE */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">2. Escolha a Base</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bases.map(base => (
                <button
                  key={base.id}
                  onClick={() => setSelectedBase(base)}
                  className={`p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${
                    selectedBase?.id === base.id 
                      ? 'border-brand-purple bg-brand-purple/5' 
                      : 'border-gray-200 hover:border-brand-purple/30 bg-white'
                  }`}
                >
                  <span className="font-bold text-slate-800">{base.name}</span>
                  {base.extraPrice > 0 && <span className="text-brand-green font-medium text-sm">+ R$ {base.extraPrice.toFixed(2).replace('.', ',')}</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: FRUTAS */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">3. Escolha as Frutas</h2>
            <p className="text-slate-500 text-center mb-6 text-sm">Selecione quantas desejar</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {fruits.map(fruit => {
                const isSelected = selectedFruits.find(f => f.id === fruit.id);
                return (
                  <button
                    key={fruit.id}
                    onClick={() => toggleMultiple(fruit, selectedFruits, setSelectedFruits)}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      isSelected 
                        ? 'border-brand-purple bg-brand-purple/5' 
                        : 'border-gray-200 hover:border-brand-purple/30 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-800">{fruit.name}</div>
                    {fruit.extraPrice > 0 && <div className="text-brand-green font-medium text-xs mt-1">+ R$ {fruit.extraPrice.toFixed(2).replace('.', ',')}</div>}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: ACOMPANHAMENTOS */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">4. Acompanhamentos</h2>
            
            <h3 className="text-brand-purple font-bold mb-3">Grátis</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {toppings.filter(t => t.type === 'grátis').map(topping => {
                const isSelected = selectedToppings.find(t => t.id === topping.id);
                return (
                  <button
                    key={topping.id}
                    onClick={() => toggleMultiple(topping, selectedToppings, setSelectedToppings)}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      isSelected ? 'border-brand-purple bg-brand-purple/5' : 'border-gray-200 hover:border-brand-purple/30 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-800">{topping.name}</div>
                  </button>
                );
              })}
            </div>

            <h3 className="text-brand-yellow font-bold mb-3">Adicionais</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {toppings.filter(t => t.type === 'adicional').map(topping => {
                const isSelected = selectedToppings.find(t => t.id === topping.id);
                return (
                  <button
                    key={topping.id}
                    onClick={() => toggleMultiple(topping, selectedToppings, setSelectedToppings)}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      isSelected ? 'border-brand-purple bg-brand-purple/5' : 'border-gray-200 hover:border-brand-purple/30 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-800">{topping.name}</div>
                    <div className="text-brand-green font-medium text-xs mt-1">+ R$ {topping.extraPrice.toFixed(2).replace('.', ',')}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: COBERTURAS */}
        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">5. Coberturas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {syrups.map(syrup => {
                const isSelected = selectedSyrups.find(s => s.id === syrup.id);
                return (
                  <button
                    key={syrup.id}
                    onClick={() => toggleMultiple(syrup, selectedSyrups, setSelectedSyrups)}
                    className={`p-3 rounded-xl border-2 text-center transition-all ${
                      isSelected ? 'border-brand-purple bg-brand-purple/5' : 'border-gray-200 hover:border-brand-purple/30 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-800">{syrup.name}</div>
                    <div className="text-brand-green font-medium text-xs mt-1">+ R$ {syrup.extraPrice.toFixed(2).replace('.', ',')}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: RESUMO */}
        {step === 6 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-brand-purple">Seu Açaí está pronto!</h2>
            
            <div className="bg-slate-50 rounded-xl p-5 border border-gray-200 space-y-3 mb-6">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-slate-500">Tamanho:</span>
                <span className="font-bold text-slate-800">{selectedSize?.name}</span>
              </div>
              
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-slate-500">Base:</span>
                <span className="font-bold text-slate-800">{selectedBase?.name}</span>
              </div>
              
              {selectedFruits.length > 0 && (
                <div className="border-b border-gray-200 pb-2">
                  <span className="text-slate-500 block mb-1">Frutas:</span>
                  <span className="font-bold text-slate-800">{selectedFruits.map(f => f.name).join(', ')}</span>
                </div>
              )}
              
              {selectedToppings.length > 0 && (
                <div className="border-b border-gray-200 pb-2">
                  <span className="text-slate-500 block mb-1">Acompanhamentos:</span>
                  <span className="font-bold text-slate-800">{selectedToppings.map(t => t.name).join(', ')}</span>
                </div>
              )}
              
              {selectedSyrups.length > 0 && (
                <div className="pb-2">
                  <span className="text-slate-500 block mb-1">Coberturas:</span>
                  <span className="font-bold text-slate-800">{selectedSyrups.map(s => s.name).join(', ')}</span>
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-center text-xl font-bold bg-brand-purple/10 p-4 rounded-xl border border-brand-purple/20 text-slate-800">
              <span>Total:</span>
              <span className="text-brand-green">R$ {calculateTotal().toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between items-center">
        {step > 1 ? (
          <button 
            onClick={handlePrev}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-slate-600 hover:bg-gray-50 hover:text-slate-900 transition-colors bg-white shadow-sm"
          >
            <ArrowLeft size={20} /> Voltar
          </button>
        ) : <div></div>}
        
        {step < totalSteps ? (
          <button 
            onClick={handleNext}
            disabled={step === 1 && !selectedSize}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-colors shadow-sm ${
              (step === 1 && !selectedSize) || (step === 2 && !selectedBase)
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                : 'bg-brand-purple text-white hover:bg-brand-purple/90'
            }`}
          >
            Avançar <ArrowRight size={20} />
          </button>
        ) : (
          <button 
            onClick={handleFinish}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-brand-green text-white hover:bg-brand-green/90 transition-colors shadow-md shadow-brand-green/20"
          >
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </div>
  );
}
