"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Layers,
  Globe,
  MousePointer2
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 rounded-lg animate-gradient" />
        <span className="text-xl font-bold tracking-tight text-white">FLOW</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
        <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
        <a href="#about" className="hover:text-white transition-colors">À propos</a>
      </div>
      <button className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all hover:scale-105 active:scale-95">
        Essai Gratuit
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        v2.0 est maintenant disponible
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6"
      >
        Optimisez votre flux de travail <br />
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
          avec une fluidité absolue
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed"
      >
        FLOW redéfinit la productivité moderne en fusionnant intelligence artificielle et design intuitif.
        Gagnez du temps, réduisez la friction et libérez votre créativité.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="shimmer-button group px-8 py-4 text-white bg-indigo-600 rounded-full font-bold text-lg flex items-center gap-2">
          Commencer maintenant <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 text-zinc-300 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
          Voir la démo
        </button>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      title: "Automatisation Intelligente",
      description: "Laissez l'IA gérer vos tâches répétitives pendant que vous vous concentrez sur l'essentiel.",
      icon: <Zap className="text-indigo-400" />,
      size: "col-span-1 md:col-span-2",
      color: "bg-indigo-500/10"
    },
    {
      title: "Sécurité Quantique",
      description: "Vos données sont protégées par un chiffrement de grade militaire.",
      icon: <Shield className="text-purple-400" />,
      size: "col-span-1",
      color: "bg-purple-500/10"
    },
    {
      title: "Performance Extreme",
      description: "Zéro latence, même avec des millions de données.",
      icon: <Cpu className="text-cyan-400" />,
      size: "col-span-1",
      color: "bg-cyan-500/10"
    },
    {
      title: "Collaboration Temps Réel",
      description: "Travaillez avec votre équipe comme si vous étiez dans la même pièce.",
      icon: <Globe className="text-indigo-400" />,
      size: "col-span-1 md:col-span-2",
      color: "bg-indigo-500/10"
    },
    {
      title: "Interface Intuitive",
      description: "Une prise en main immédiate sans formation.",
      icon: <MousePointer2 className="text-purple-400" />,
      size: "col-span-1",
      color: "bg-purple-500/10"
    },
    {
      title: "Architecture Modulaire",
      description: "Adaptez FLOW à vos besoins spécifiques.",
      icon: <Layers className="text-cyan-400" />,
      size: "col-span-1",
      color: "bg-cyan-500/10"
    },
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Une puissance sans précédent</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Tout ce dont vous avez besoin pour passer au niveau supérieur, regroupé dans une seule interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`glass-card p-8 ${f.size} ${f.color} transition-all duration-300 hover:border-white/30 group`}
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0€",
      features: ["5 projets", "1 Go de stockage", "Support communautaire", "Mises à jour basiques"],
      button: "Démarrer Gratuitement",
      premium: false
    },
    {
      name: "Pro",
      price: "29€",
      features: ["Projets illimités", "100 Go de stockage", "Support Prioritaire 24/7", "Analytiques Avancées", "Intégrations API"],
      button: "Choisir Pro",
      premium: true
    },
    {
      name: "Enterprise",
      price: "99€",
      features: ["Infrastructure Dédiée", "Stockage Illimité", "Manager de Compte", "Sécurité SSO", "SLA Garanti"],
      button: "Contactez-nous",
      premium: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tarification Transparente</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Que vous soyez un solopreneur ou une équipe mondiale, nous avons l'offre adaptée.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`glass-card p-8 relative transition-all duration-300 ${
              plan.premium ? 'border-indigo-500/50 ring-2 ring-indigo-500/20 scale-105 z-10' : 'border-white/10'
            }`}
          >
            {plan.premium && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold tracking-wide uppercase">
                Le plus populaire
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-400 text-sm">/mois</span>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {plan.features.map((feat, j) => (
                <div key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> {feat}
                </div>
              ))}
            </div>
            <button className={`w-full py-3 rounded-xl font-bold transition-all ${
              plan.premium
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20'
              : 'bg-white/10 text-white hover:bg-white/20'
            }`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 p-12 text-center">
      <div className="absolute inset-0 bg-white/10 animate-gradient" />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt à transformer votre productivité ?</h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
          Rejoignez plus de 10 000 professionnels qui utilisent FLOW pour orchestrer leur succès quotidien.
        </p>
        <button className="shimmer-button px-10 py-5 bg-white text-indigo-600 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
          Lancer mon expérience FLOW
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-md" />
        <span className="text-lg font-bold text-white">FLOW</span>
      </div>
      <div className="flex gap-6 text-sm text-zinc-500">
        <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
      <p className="text-sm text-zinc-600">
        © 2026 FLOW Inc. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0A09] font-sans selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
