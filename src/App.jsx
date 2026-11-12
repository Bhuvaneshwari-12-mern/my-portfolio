import { Mail, ExternalLink, Code2, ArrowRight } from 'lucide-react';
import { portfolioData } from './data';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      
      {/* Glowing Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="animate-fade-in-up inline-block mb-4 px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-sm font-semibold tracking-wide">
            Available for hire
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{portfolioData.name}</span>.
          </h1>
          <h2 className="animate-fade-in-up delay-200 text-2xl md:text-3xl text-slate-400 font-medium mb-6">
            {portfolioData.role}
          </h2>
          <p className="animate-fade-in-up delay-200 text-lg text-slate-400 max-w-lg leading-relaxed mb-10 mx-auto md:mx-0">
            {portfolioData.bio}
          </p>
          
          <div className="animate-fade-in-up delay-300 flex items-center justify-center md:justify-start gap-4">
            <a href="#projects" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/30 hover:-translate-y-1">
              View My Work <ArrowRight size={20} />
            </a>
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="animate-fade-in-up flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <img 
              src={portfolioData.photo} 
              alt={portfolioData.name} 
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
            />
          </div>
        </div>

      </header>

      {/* Skills Section */}
      <section className="border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">My Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.skills.map(skill => (
              <span key={skill} className="px-5 py-2.5 bg-slate-800 text-slate-300 rounded-xl text-sm font-medium border border-slate-700 hover:border-indigo-500 hover:text-white transition-all hover:-translate-y-1 shadow-sm cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white justify-center">
          <Code2 className="text-indigo-400" /> Featured Projects
        </h3>
        
        <div className="grid grid-cols-1 gap-8">
          {portfolioData.projects.map(project => (
            <div key={project.title} className="bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-700 p-8 md:p-10 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h4 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-colors">
                    Source Code
                  </a>
                </div>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg max-w-3xl">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-slate-900 text-indigo-300 text-xs font-bold rounded-lg border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 text-center relative z-10">
        <p className="text-slate-500 flex items-center justify-center gap-2 mb-4">
          Built with React & Tailwind by {portfolioData.name}
        </p>
        <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors bg-indigo-500/10 px-6 py-3 rounded-full border border-indigo-500/20 hover:bg-indigo-500/20">
          <Mail size={18} /> {portfolioData.email}
        </a>
      </footer>
    </div>
  );
}

export default App;