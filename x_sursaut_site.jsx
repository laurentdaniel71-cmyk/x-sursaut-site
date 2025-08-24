// src/app/page.tsx
export default function Home() {
const videos = [
{ id: "abc123", title: "Webinaire 1 - Relance économique" },
{ id: "def456", title: "Webinaire 2 - Innovation et souveraineté" },
{ id: "ghi789", title: "Webinaire 3 - Transition énergétique" },
];


return (
<div className="min-h-screen bg-gray-50">
{/* Hero Section */}
<header className="bg-white shadow p-10 text-center">
<h1 className="text-4xl font-bold text-gray-800">X‑Sursaut</h1>
<p className="text-lg text-gray-600 mt-2">
20 ans de réflexion et d’action pour un sursaut économique et sociétal
</p>
</header>


{/* Section vidéos */}
<section className="p-10">
<h2 className="text-2xl font-semibold mb-6">Nos derniers webinaires</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{videos.map((v) => (
<div key={v.id} className="bg-white rounded-2xl shadow p-3">
<div className="aspect-video w-full overflow-hidden rounded-xl">
<iframe
className="w-full h-full"
src={`https://www.youtube.com/embed/${v.id}`}
title={v.title}
allowFullScreen
/>
</div>
<p className="mt-2 text-sm font-medium text-gray-800">{v.title}</p>
</div>
))}
</div>
</section>


{/* À propos */}
<section className="p-10 bg-white">
<h2 className="text-2xl font-semibold mb-4">À propos de X‑Sursaut</h2>
<p className="text-gray-700 leading-relaxed max-w-3xl">
Créé en 2005, X‑Sursaut est un think tank composé de plus de 1000 membres issus de l’École polytechnique et au‑delà. Nous combinons l’expérience des praticiens et la recherche académique pour éclairer le débat public et proposer des solutions concrètes face aux défis économiques, sociétaux et environnementaux.
</p>
</section>


{/* Contact */}
<section className="p-10">
<h2 className="text-2xl font-semibold mb-4">Contact</h2>
<p className="text-gray-700">📧 contact@x-sursaut.org</p>
</section>


<footer className="bg-gray-800 text-white text-center p-6">
<p>© 2025 X‑Sursaut – Tous droits réservés</p>
</footer>
</div>
);
}
