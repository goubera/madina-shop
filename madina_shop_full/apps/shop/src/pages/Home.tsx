import React from 'react';

function Home() {
  const produits = [
    { id: 1, nom: 'Produit 1', prix: '10€' },
    { id: 2, nom: 'Produit 2', prix: '15€' },
    { id: 3, nom: 'Produit 3', prix: '20€' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Madina Shop</h1>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Produits populaires</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {produits.map((p) => (
            <li key={p.id} className="border rounded p-4 flex flex-col items-center">
              <span className="font-medium">{p.nom}</span>
              <span className="text-sm text-gray-600">{p.prix}</span>
            </li>
          ))}
        </ul>
      </main>

      <footer className="bg-gray-100 text-center p-4">
        &copy; 2025 Madina Shop
      </footer>
    </div>
  );
}

export default Home;
