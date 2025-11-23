import React from 'react';
import { ExtensionData } from '../types';

interface Props {
  data: ExtensionData;
  onBack: () => void;
}

const VALVE_EXTENSIONS = ['VPK', 'VMF', 'VTF', 'VMT', 'MDL', 'DMX', 'DEM', 'BSP', 'SAV'];

const ExtensionDetail: React.FC<Props> = ({ data, onBack }) => {
  const isValve = VALVE_EXTENSIONS.includes(data.extension.toUpperCase().replace('.', ''));

  return (
    <div className="bg-zinc-900 rounded-xl p-6 shadow-2xl border border-zinc-800 animate-fade-in relative overflow-hidden">
      
      {/* Background Glow for Valve Items */}
      {isValve && (
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      )}

      <button 
        onClick={onBack}
        className="mb-6 text-zinc-400 hover:text-orange-500 flex items-center transition-colors group"
      >
        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        ВЕРНУТЬСЯ К СПИСКУ
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b border-zinc-800 pb-6 relative z-10">
        <div>
            <div className="flex items-center gap-4">
                <h1 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter ${isValve ? 'text-orange-500' : 'text-white'}`}>
                  {data.extension}
                </h1>
                <span className={`px-3 py-1 text-xs font-bold rounded-sm uppercase tracking-widest ${isValve ? 'bg-orange-600 text-black' : 'bg-zinc-800 text-zinc-300'}`}>
                  {data.category}
                </span>
            </div>
            <h2 className="text-xl text-zinc-400 mt-2 font-light">{data.name}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Описание</h3>
            <p className="text-zinc-300 leading-relaxed text-lg font-light">{data.description}</p>
          </section>

          <section>
            <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Использование</h3>
            <p className="text-zinc-300 leading-relaxed">{data.usage}</p>
          </section>

          <section>
             <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Технические детали</h3>
             <div className="bg-black/50 p-5 rounded border border-zinc-800 font-mono text-sm text-zinc-400 overflow-x-auto">
                {data.technicalDetails}
             </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <section className="bg-zinc-950 p-5 rounded border border-zinc-800">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Поддержка ОС</h3>
            <div className="flex flex-wrap gap-2">
              {data.osSupport.map((os, idx) => (
                <span key={idx} className="px-2 py-1 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-sm text-xs font-medium uppercase">
                  {os}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-zinc-950 p-5 rounded border border-zinc-800">
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Преимущества</h3>
             <ul className="space-y-3">
                {data.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zinc-300">
                        <span className="mr-3 text-emerald-500 font-bold">+</span> {pro}
                    </li>
                ))}
             </ul>
          </section>

          <section className="bg-zinc-950 p-5 rounded border border-zinc-800">
             <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Недостатки</h3>
             <ul className="space-y-3">
                {data.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zinc-300">
                        <span className="mr-3 text-red-500 font-bold">-</span> {con}
                    </li>
                ))}
             </ul>
          </section>
          
           <section className="bg-zinc-950 p-5 rounded border border-zinc-800">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Технологии</h3>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-sm text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* VALVE EASTER EGG */}
      {isValve && (
        <div className="mt-12 pt-8 border-t border-orange-900/30 text-center">
            <div className="inline-block p-6 border-2 border-orange-600/50 bg-orange-950/20 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-orange-500 font-black text-xl mb-4 uppercase tracking-[0.2em]">⚠️ Внимание: Секретные данные Valve ⚠️</h4>
                <div className="space-y-2 font-mono text-orange-400">
                    <p className="text-lg">1) ХАЛФ ЛАЙФ 3 ВЫЙДЕТ ЗАВТРА</p>
                    <p className="text-sm opacity-75">2) ЕСЛИ ХАЛФ ЛАЙФ 3 НЕ ВЫЙДЕТ ПРОЧИТАЙТЕ ПЕРВОЕ ПРАВИЛО</p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ExtensionDetail;