'use client'

import { GitBranch, X, AlertTriangle, Bell, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  const getFileType = () => {
    if (pathname === '/') return 'TypeScript JSX';
    if (pathname.includes('project')) return 'JavaScript';
    if (pathname.includes('about')) return 'HTML';
    if (pathname.includes('contact')) return 'CSS';
    if (pathname.includes('skills')) return 'JSON';
    return 'TypeScript JSX';
  };

  return (
    <footer className="hidden md:flex h-[22px] bg-[#007ACC] text-white  items-center justify-between text-[12px] px-2">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 hover:bg-[#005A9E] px-2 py-0.5 cursor-pointer">
          <GitBranch size={14} />
          <span>main</span>
        </div>
        
        <div className="flex items-center gap-1 hover:bg-[#005A9E] px-2 py-0.5 cursor-pointer">
          <X size={14} />
          <span>0</span>
        </div>
        
        <div className="flex items-center gap-1 hover:bg-[#005A9E] px-2 py-0.5 cursor-pointer">
          <AlertTriangle size={14} />
          <span>0</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hover:bg-[#005A9E] px-2 py-0.5 cursor-pointer">
          Ln 1, Col 1
        </div>
        
        <div className="hover:bg-[#005A9E] px-2 py-0.5 cursor-pointer">
          Spaces: 2
        </div>
        
        <div className="hover:bg-[#005A9E] px-2 py-0.5 cursor-pointer">
          UTF-8
        </div>
        
        <div className="hover:bg-[#005A9E] px-2 py-0.5 cursor-pointer">
          {getFileType()}
        </div>

        <div className="flex items-center gap-2">
          <Bell size={14} className="hover:bg-[#005A9E] cursor-pointer" />
          <Settings size={14} className="hover:bg-[#005A9E] cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}