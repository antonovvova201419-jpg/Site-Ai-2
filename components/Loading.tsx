import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[500px]">
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-t-4 border-orange-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-4 border-zinc-700 rounded-full animate-spin animation-delay-150"></div>
        <div className="absolute inset-4 border-b-4 border-zinc-800 rounded-full animate-spin animation-delay-300"></div>
      </div>
      <p className="text-zinc-300 text-xl font-bold uppercase tracking-widest animate-pulse">Сканирование сектора...</p>
      <p className="text-zinc-600 text-sm mt-3 font-mono">Сбор данных через нейросеть Gemini</p>
    </div>
  );
};

export default Loading;