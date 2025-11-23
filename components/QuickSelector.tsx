import React from 'react';
import { FileCategory, QuickLink } from '../types';

interface Props {
  onSelect: (ext: string) => void;
  filter: FileCategory | 'All';
}

const COMMON_EXTENSIONS: QuickLink[] = [
  // Valve / Games
  { ext: 'VPK', cat: FileCategory.GAME },
  { ext: 'BSP', cat: FileCategory.GAME },
  { ext: 'VMF', cat: FileCategory.GAME },
  { ext: 'VTF', cat: FileCategory.GAME },
  { ext: 'VMT', cat: FileCategory.GAME },
  { ext: 'MDL', cat: FileCategory.GAME },
  { ext: 'DEM', cat: FileCategory.GAME },
  { ext: 'DMX', cat: FileCategory.GAME },
  { ext: 'SAV', cat: FileCategory.GAME },
  { ext: 'PAK', cat: FileCategory.GAME },
  { ext: 'WAD', cat: FileCategory.GAME },

  // Images
  { ext: 'JPG', cat: FileCategory.IMAGE },
  { ext: 'PNG', cat: FileCategory.IMAGE },
  { ext: 'GIF', cat: FileCategory.IMAGE },
  { ext: 'WEBP', cat: FileCategory.IMAGE },
  { ext: 'SVG', cat: FileCategory.IMAGE },
  { ext: 'TIFF', cat: FileCategory.IMAGE },
  { ext: 'BMP', cat: FileCategory.IMAGE },
  { ext: 'HEIC', cat: FileCategory.IMAGE },
  { ext: 'RAW', cat: FileCategory.IMAGE },
  { ext: 'PSD', cat: FileCategory.IMAGE },
  { ext: 'AI', cat: FileCategory.IMAGE },
  { ext: 'ICO', cat: FileCategory.IMAGE },

  // Audio
  { ext: 'MP3', cat: FileCategory.AUDIO },
  { ext: 'WAV', cat: FileCategory.AUDIO },
  { ext: 'FLAC', cat: FileCategory.AUDIO },
  { ext: 'OGG', cat: FileCategory.AUDIO },
  { ext: 'AAC', cat: FileCategory.AUDIO },
  { ext: 'M4A', cat: FileCategory.AUDIO },
  { ext: 'WMA', cat: FileCategory.AUDIO },
  { ext: 'MIDI', cat: FileCategory.AUDIO },

  // Video
  { ext: 'MP4', cat: FileCategory.VIDEO },
  { ext: 'MKV', cat: FileCategory.VIDEO },
  { ext: 'AVI', cat: FileCategory.VIDEO },
  { ext: 'MOV', cat: FileCategory.VIDEO },
  { ext: 'WEBM', cat: FileCategory.VIDEO },
  { ext: 'FLV', cat: FileCategory.VIDEO },
  { ext: 'M4V', cat: FileCategory.VIDEO },
  { ext: '3GP', cat: FileCategory.VIDEO },

  // Archives
  { ext: 'ZIP', cat: FileCategory.ARCHIVE },
  { ext: 'RAR', cat: FileCategory.ARCHIVE },
  { ext: '7Z', cat: FileCategory.ARCHIVE },
  { ext: 'TAR', cat: FileCategory.ARCHIVE },
  { ext: 'GZ', cat: FileCategory.ARCHIVE },
  { ext: 'BZ2', cat: FileCategory.ARCHIVE },
  { ext: 'XZ', cat: FileCategory.ARCHIVE },

  // Documents
  { ext: 'PDF', cat: FileCategory.DOCUMENT },
  { ext: 'DOCX', cat: FileCategory.DOCUMENT },
  { ext: 'XLSX', cat: FileCategory.DOCUMENT },
  { ext: 'PPTX', cat: FileCategory.DOCUMENT },
  { ext: 'TXT', cat: FileCategory.DOCUMENT },
  { ext: 'RTF', cat: FileCategory.DOCUMENT },
  { ext: 'ODT', cat: FileCategory.DOCUMENT },
  { ext: 'CSV', cat: FileCategory.DOCUMENT },
  { ext: 'MD', cat: FileCategory.DOCUMENT },
  { ext: 'EPUB', cat: FileCategory.DOCUMENT },

  // Code
  { ext: 'HTML', cat: FileCategory.CODE },
  { ext: 'CSS', cat: FileCategory.CODE },
  { ext: 'JS', cat: FileCategory.CODE },
  { ext: 'TS', cat: FileCategory.CODE },
  { ext: 'PY', cat: FileCategory.CODE },
  { ext: 'JAVA', cat: FileCategory.CODE },
  { ext: 'C', cat: FileCategory.CODE },
  { ext: 'CPP', cat: FileCategory.CODE },
  { ext: 'JSON', cat: FileCategory.CODE },
  { ext: 'XML', cat: FileCategory.CODE },
  { ext: 'SQL', cat: FileCategory.CODE },
  { ext: 'PHP', cat: FileCategory.CODE },

  // Executables
  { ext: 'EXE', cat: FileCategory.EXECUTABLE },
  { ext: 'MSI', cat: FileCategory.EXECUTABLE },
  { ext: 'APK', cat: FileCategory.EXECUTABLE },
  { ext: 'AAB', cat: FileCategory.EXECUTABLE },
  { ext: 'DMG', cat: FileCategory.EXECUTABLE },
  { ext: 'PKG', cat: FileCategory.EXECUTABLE },
  { ext: 'DEB', cat: FileCategory.EXECUTABLE },
  { ext: 'RPM', cat: FileCategory.EXECUTABLE },
  { ext: 'BAT', cat: FileCategory.EXECUTABLE },
  { ext: 'SH', cat: FileCategory.EXECUTABLE },

  // System
  { ext: 'DLL', cat: FileCategory.SYSTEM },
  { ext: 'ISO', cat: FileCategory.SYSTEM },
  { ext: 'SYS', cat: FileCategory.SYSTEM },
  { ext: 'INI', cat: FileCategory.SYSTEM },
  { ext: 'CFG', cat: FileCategory.SYSTEM },
  { ext: 'REG', cat: FileCategory.SYSTEM },
  { ext: 'LOG', cat: FileCategory.SYSTEM },

  // 3D Models
  { ext: 'OBJ', cat: FileCategory.MODEL_3D },
  { ext: 'FBX', cat: FileCategory.MODEL_3D },
  { ext: 'BLEND', cat: FileCategory.MODEL_3D },
  { ext: 'STL', cat: FileCategory.MODEL_3D },
  { ext: 'DAE', cat: FileCategory.MODEL_3D },
  { ext: 'GLTF', cat: FileCategory.MODEL_3D },

  // Fonts
  { ext: 'TTF', cat: FileCategory.FONT },
  { ext: 'OTF', cat: FileCategory.FONT },
  { ext: 'WOFF', cat: FileCategory.FONT },
  { ext: 'WOFF2', cat: FileCategory.FONT },
];

const QuickSelector: React.FC<Props> = ({ onSelect, filter }) => {
  const filtered = filter === 'All' 
    ? COMMON_EXTENSIONS 
    : COMMON_EXTENSIONS.filter(i => i.cat === filter);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {filtered.map((item) => (
        <button
          key={item.ext}
          onClick={() => onSelect(item.ext)}
          className="group relative bg-zinc-900 hover:bg-zinc-800 p-4 rounded-xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-orange-900/10 flex flex-col items-center justify-center gap-2"
        >
          <div className="w-10 h-14 bg-zinc-950 group-hover:bg-zinc-900 rounded-sm relative flex items-center justify-center border border-zinc-700 group-hover:border-orange-500 transition-colors">
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-600 rounded-bl-md shadow-sm"></span>
             <span className="font-bold text-zinc-300 group-hover:text-white text-[10px] sm:text-xs tracking-wider uppercase truncate max-w-full px-1">
                {item.ext}
             </span>
          </div>
          <span className="text-[10px] text-zinc-500 group-hover:text-orange-400 transition-colors uppercase font-medium tracking-wide">
            {item.cat}
          </span>
        </button>
      ))}
    </div>
  );
};

export default QuickSelector;