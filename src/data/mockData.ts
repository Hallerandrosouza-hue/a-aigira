export const categories = [
  { id: '1', name: 'Monte seu Açaí', slug: 'monte-seu-acai' },
  { id: '2', name: 'Açaís da Casa', slug: 'acais-da-casa' },
  { id: '3', name: 'Barcas', slug: 'barcas' },
  { id: '4', name: 'Combos', slug: 'combos' },
  { id: '5', name: 'Sobremesas', slug: 'sobremesas' },
  { id: '6', name: 'Bebidas', slug: 'bebidas' },
];

export const products = [
  {
    id: 'p1',
    name: 'Açaí Especial da Casa',
    description: 'Açaí trufado com morango, leite condensado, leite em pó e Nutella.',
    price: 25.90,
    category: 'Açaís da Casa',
    image: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: 'p2',
    name: 'Barca Gira Açaí',
    description: 'Barca de açaí de 1L com 5 acompanhamentos à sua escolha.',
    price: 49.90,
    category: 'Barcas',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: 'p3',
    name: 'Combo Gira',
    description: '2 Açaís de 500ml + 2 Águas.',
    price: 39.90,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: 'p4',
    name: 'Açaí com Morango',
    description: 'Açaí tradicional com pedaços frescos de morango.',
    price: 18.90,
    category: 'Açaís da Casa',
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=600&h=600'
  }
];

export const sizes = [
  { id: 's1', name: '300ml', price: 12.00 },
  { id: 's2', name: '500ml', price: 16.00 },
  { id: 's3', name: '700ml', price: 20.00 },
  { id: 's4', name: '1 Litro', price: 28.00 },
];

export const bases = [
  { id: 'b1', name: 'Açaí Tradicional', extraPrice: 0 },
  { id: 'b2', name: 'Açaí Zero Açúcar', extraPrice: 2 },
  { id: 'b3', name: 'Cupuaçu', extraPrice: 0 },
  { id: 'b4', name: 'Pitaya', extraPrice: 3 },
];

export const fruits = [
  { id: 'f1', name: 'Banana', extraPrice: 0 },
  { id: 'f2', name: 'Morango', extraPrice: 2 },
  { id: 'f3', name: 'Kiwi', extraPrice: 2 },
  { id: 'f4', name: 'Manga', extraPrice: 0 },
  { id: 'f5', name: 'Abacaxi', extraPrice: 1 },
];

export const toppings = [
  { id: 't1', name: 'Leite em pó', extraPrice: 0, type: 'grátis' },
  { id: 't2', name: 'Granola', extraPrice: 0, type: 'grátis' },
  { id: 't3', name: 'Paçoca', extraPrice: 0, type: 'grátis' },
  { id: 't4', name: 'Amendoim', extraPrice: 0, type: 'grátis' },
  { id: 't5', name: 'Cereais', extraPrice: 2, type: 'adicional' },
  { id: 't6', name: 'Chocoball', extraPrice: 2, type: 'adicional' },
];

export const syrups = [
  { id: 'sy1', name: 'Leite condensado', extraPrice: 2 },
  { id: 'sy2', name: 'Mel', extraPrice: 2 },
  { id: 'sy3', name: 'Chocolate', extraPrice: 2 },
  { id: 'sy4', name: 'Creme de avelã (Nutella)', extraPrice: 5 },
  { id: 'sy5', name: 'Doce de Leite', extraPrice: 3 },
];

export const orders = [
  {
    id: '#1024',
    customer: 'João Silva',
    total: 35.90,
    status: 'Em preparação',
    time: '19:30'
  },
  {
    id: '#1025',
    customer: 'Maria Souza',
    total: 42.50,
    status: 'Pedido recebido',
    time: '19:45'
  }
];
