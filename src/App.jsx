import './App.css';
import Navbar from './Components/Navbar';
import React, { useState, useEffect } from 'react';
import './index.css';
import gambar from './assets/FOTO.jpg';
import { data } from './Components/data.js';
import { project } from './Components/project.js';
import Email from './Components/Email.jsx';

function App() {
  // Data teks yang akan diketik bergantian
  const roles = [
    "Full Stack Web Developer ",
    "Laravel, Express JS & React JS ",
   
  ];

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Efek Text Writer (Typewriter)
  useEffect(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    const handleTyping = () => {
      setCurrentText(
        isDeleting 
          ? fullText.substring(0, currentText.length - 1) 
          : fullText.substring(0, currentText.length + 1)
      );

      // Kecepatan saat menghapus teks
      if (isDeleting) {
        setTypingSpeed(75);
      }

      // Jika teks sudah selesai diketik sepenuhnya
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Jeda sebelum menghapus
        setTypingSpeed(150);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-indigo-500 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Background Soft Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <Navbar />

      {/* HERO SECTION */}
      <header className="hero max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 pt-20 pb-28 px-6 lg:px-10 relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full">
            <img src={gambar} alt="Hero" className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs sm:text-sm font-semibold text-indigo-600 tracking-wide min-h-[20px] flex items-center">
              {currentText}
              <span className="animate-pulse ml-0.5 font-bold">|</span>
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Hi, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Yudhis</span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Seorang Full Stack Web Developer yang berfokus menciptakan pengalaman digital berkinerja tinggi, 
            responsif, dan memiliki estetika antarmuka modern yang memukau.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              className="flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer" 
              onClick={() => window.open('/src/assets/CV.pdf')}
            >
              <span>Lihat CV</span> 
              <i className="ri-download-line text-lg"></i>
            </button>
            <a 
              href="#proyek" 
              className="flex items-center gap-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Eksplor Proyek</span> 
              <i className="ri-arrow-down-line text-lg"></i>
            </a>
          </div>
        </div>

        {/* Right Content - Modern Profile Photo Container */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Glow frame behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            {/* Main Card Frame */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 bg-white border border-slate-200/80 p-3 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative">
                <img 
                  src={gambar} 
                  alt="Profile" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  {/* <span className="text-xs font-semibold tracking-wider text-white uppercase bg-slate-900/70 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    Yudhis Dev
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* TOOLS SECTION */}
      <section className="tools max-w-7xl mx-auto mt-12 px-6 lg:px-10 relative z-10">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">Tech Stack & Tools</h2>
          <p className="text-slate-600 text-sm sm:text-base">Teknologi pilihan yang diandalkan untuk membangun aplikasi web handal.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 bg-white hover:bg-slate-100/80 border border-slate-200/80 hover:border-indigo-300 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-xl group-hover:scale-110 transition-transform duration-300 p-2.5">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-slate-800 font-semibold text-sm sm:text-base tracking-wide">{item.name}</h4>
                <span className="text-xs text-slate-400">Framework / Tool</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section id="proyek" className="projects max-w-7xl mx-auto mt-28 px-6 lg:px-10 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">Proyek </h2>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 hover:border-indigo-300 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 group shadow-sm hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-56 bg-slate-100">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={item.name} 
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>
                
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-800 font-medium py-3 rounded-xl transition-all duration-300"
                >
                  <span>Lihat Detail Proyek</span> 
                  <i className="ri-arrow-right-line text-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM EMAIL / CONTACT */}
      {/* <section className="max-w-7xl mx-auto mt-28 px-6 lg:px-10 pb-24 relative z-10">
        <div className="bg-white border border-slate-200/80 p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Mari Berkolaborasi</h2>
            <p className="text-slate-600 text-sm sm:text-base">Punya project menarik atau ingin merekrut saya? Kirimkan pesan langsung melalui form di bawah ini.</p>
          </div>
          <Email />
        </div>
      </section> */}

    </div>
  );
}

export default App;
