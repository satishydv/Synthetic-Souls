import React, { useState } from 'react';
import { 
  Menu, Twitter, Facebook, Instagram, Phone, 
  Circle, Square, Triangle, MoveUpRight, Star, Smile,
  LayoutTemplate, Palette, Monitor
} from 'lucide-react';
import { NeoButton } from './components/NeoButton';
import { Section } from './components/Section';
import { Project, Service, Testimonial } from './types';

// --- DATA ---
const services: Service[] = [
  {
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Circle className="w-8 h-8" />,
    color: "bg-neo-pink"
  },
  {
    title: "Web design",
    description: "Suspendisse varius enim in eros tristique.",
    icon: <LayoutTemplate className="w-8 h-8" />,
    color: "bg-neo-purple"
  },
  {
    title: "UI/UX Design",
    description: "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    icon: <Monitor className="w-8 h-8" />,
    color: "bg-neo-green"
  },
  {
    title: "Graphic design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-neo-yellow"
  }
];

const projects: Project[] = [
  {
    client: "Rogahn",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit. Suspend varius enim in eros tristique.",
    tags: ["Web design", "Website"],
    image: "https://picsum.photos/id/338/600/600",
    bgColor: "bg-white",
    layout: "left"
  },
  {
    client: "Schultz",
    description: "Suspend varius enim in eros tristique. Duis cursus, mi quis viverra ornare.",
    tags: ["UI/UX Design", "Design"],
    image: "https://picsum.photos/id/331/600/600",
    bgColor: "bg-neo-yellow",
    layout: "right"
  },
  {
    client: "Gohan",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit. Suspend varius enim in eros tristique.",
    tags: ["Branding Design", "Design"],
    image: "https://picsum.photos/id/64/600/600",
    bgColor: "bg-white",
    layout: "left"
  }
];

const testimonials: Testimonial[] = [
  {
    text: "Lorem ipsum dolor sit amet, consect adipiscing elit. Suspend varius enim in eros elementum tristique.",
    name: "Client Name",
    company: "Company Name",
    avatar: "https://picsum.photos/id/65/100/100"
  },
  {
    text: "Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Client Name",
    company: "Company Name",
    avatar: "https://picsum.photos/id/64/100/100"
  },
  {
    text: "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Client Name",
    company: "Company Name",
    avatar: "https://picsum.photos/id/91/100/100"
  }
];

// --- COMPONENTS ---

const Logos = () => (
  <div className="flex items-center gap-16 pr-16">
    <div className="flex items-center gap-2"><Star className="fill-black w-6 h-6" /> <span className="text-xl font-bold">Minty</span></div>
    <div className="flex items-center gap-2"><Square className="fill-black rotate-45 w-5 h-5" /> <span className="text-xl font-bold">Border</span></div>
    <div className="flex items-center gap-2"><Circle className="fill-transparent stroke-[4px] w-5 h-5" /> <span className="text-xl font-bold">Product.</span></div>
    <div className="flex items-center gap-2"><LayoutTemplate className="fill-black w-6 h-6" /> <span className="text-xl font-bold">Glossy</span></div>
    <div className="flex items-center gap-2"><Triangle className="fill-black rotate-180 w-5 h-5" /> <span className="text-xl font-bold">Invert</span></div>
  </div>
);

const ArticleCard1 = () => (
  <div className="w-full h-full bg-neo-pink relative overflow-hidden flex items-center justify-center">
    {/* Abstract Flower */}
    <div className="absolute bottom-[-10%] left-[-10%] text-rose-400 opacity-90">
      <svg width="180" height="180" viewBox="0 0 100 100" className="fill-current stroke-black stroke-2">
        <path d="M50 50 Q70 20 90 50 Q70 80 50 50 Q30 80 10 50 Q30 20 50 50" />
        <circle cx="50" cy="50" r="10" className="fill-neo-yellow" />
        <path d="M50 50 Q50 10 20 20 Q10 50 50 50" />
        <path d="M50 50 Q80 90 90 60" fill="none" />
      </svg>
    </div>
    {/* Top Right Shape */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-neo-purple border-l-2 border-b-2 border-black rounded-bl-[100px]"></div>
    {/* Center Elements */}
    <div className="relative z-10 flex gap-2">
      <div className="w-8 h-8 bg-white border-2 border-black rounded-full"></div>
      <div className="w-8 h-8 bg-neo-green border-2 border-black rounded-full"></div>
    </div>
  </div>
);

const ArticleCard2 = () => (
  <div className="w-full h-full bg-neo-yellow relative overflow-hidden">
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-orange-400 rounded-full border-2 border-black flex items-center justify-center">
       <div className="w-16 h-16 bg-yellow-300 rounded-full border-2 border-black animate-spin-slow" style={{borderStyle: 'dashed'}}></div>
    </div>
    {/* Bottom Arches */}
    <div className="absolute bottom-0 w-full flex justify-center items-end">
       <div className="w-40 h-20 bg-neo-green border-t-2 border-x-2 border-black rounded-t-full"></div>
       <div className="w-32 h-16 bg-neo-pink border-t-2 border-x-2 border-black rounded-t-full absolute bottom-0"></div>
    </div>
  </div>
);

const ArticleCard3 = () => (
  <div className="w-full h-full bg-neo-purple relative overflow-hidden flex flex-col items-center justify-center">
    <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
    <div className="w-48 h-32 border-2 border-black rounded-t-full bg-white relative overflow-hidden z-10">
      <div className="absolute bottom-0 left-0 w-full h-4 bg-black"></div>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-neo-green rounded-full border-2 border-black"></div>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-neo-purple selection:text-black">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
        <div className="flex justify-between items-center h-20 px-4 md:px-8">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-tighter uppercase cursor-pointer">
            SYNTHETIC<span className="text-neo-purple text-3xl">SOULS</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-8 h-8" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-bold">
            <a href="#services" className="hover:text-neo-purple transition-colors">Services</a>
            <a href="#about" className="hover:text-neo-purple transition-colors">About</a>
            <a href="#projects" className="hover:text-neo-purple transition-colors">Projects</a>
            <a href="#blog" className="hover:text-neo-purple transition-colors">Blog</a>
          </nav>

          <div className="hidden md:block">
            <NeoButton variant="white" size="sm" className="bg-neo-pink hover:bg-neo-pink/80">
              <Phone className="w-4 h-4" /> Book a call
            </NeoButton>
          </div>
        </div>
      </header>

      {/* --- HERO --- */}
      <div className="flex flex-col md:flex-row border-b-2 border-black min-h-[85vh]">
        {/* Social Sidebar */}
        <div className="hidden md:flex flex-col justify-center gap-4 px-4 border-r-2 border-black bg-white">
          <a href="#" className="p-2 border-2 border-black rounded-full hover:bg-neo-yellow transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="p-2 border-2 border-black rounded-full hover:bg-neo-pink transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="p-2 border-2 border-black rounded-full hover:bg-neo-purple transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>

        {/* Hero Left */}
        <div className="flex-1 bg-neo-pink p-8 md:p-16 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-black relative overflow-hidden">
           <div className="absolute top-8 left-8 md:left-12">
             <span className="font-bold text-lg">hi!</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 mt-8">
             We're a creative design agency
           </h1>
           <p className="text-lg md:text-xl font-medium mb-8 max-w-md leading-relaxed">
             Lorem ipsum dolor sit amet, consect adipisc elit. Suspend varius enim in eros duis cursus, libero quis viverra ornare.
           </p>
           <div>
             <NeoButton size="lg">Get in touch</NeoButton>
           </div>
        </div>

        {/* Hero Right - Graphic Area */}
        <div className="flex-1 bg-neo-purple p-8 md:p-16 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
            
            {/* Floating Stickers */}
            <div className="relative w-full max-w-md h-[400px] flex flex-col items-center justify-center">
              
              {/* Top Row: Smiley + Creative */}
              <div className="flex items-center gap-4 -rotate-6 translate-x-4 mb-4 z-20 hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-neo-green border-4 border-black rounded-full flex items-center justify-center shadow-neo">
                   <Smile className="w-12 h-12 stroke-[3px]" />
                </div>
                <div className="bg-neo-purple border-4 border-black rounded-full px-8 py-4 shadow-neo">
                   <span className="text-3xl md:text-4xl font-black uppercase tracking-tight">Creative</span>
                </div>
              </div>

              {/* Middle Row: & + Design */}
              <div className="flex items-center gap-4 rotate-3 -translate-x-8 mb-4 z-10 hover:scale-105 transition-transform duration-300">
                 <div className="w-16 h-16 bg-neo-pink border-4 border-black rounded-full flex items-center justify-center shadow-neo">
                    <span className="text-3xl font-black">&</span>
                 </div>
                 <div className="bg-neo-yellow border-4 border-black rounded-[2rem] px-10 py-5 shadow-neo">
                    <span className="text-3xl md:text-4xl font-black uppercase tracking-tight">Design</span>
                 </div>
              </div>

              {/* Bottom Row: Branding */}
              <div className="bg-neo-green border-4 border-black rounded-xl px-10 py-4 -rotate-3 translate-x-8 shadow-neo z-0 hover:scale-105 transition-transform duration-300">
                <span className="text-3xl md:text-4xl font-black uppercase tracking-tight">Branding</span>
              </div>

            </div>
        </div>
      </div>

      {/* --- MARQUEE --- */}
      <div className="w-full border-b-2 border-black flex bg-white overflow-hidden h-20">
        {/* Static label on Desktop */}
        <div className="hidden md:flex items-center px-8 border-r-2 border-black font-medium text-sm text-gray-500 whitespace-nowrap bg-white z-20">
          Partners who trust us
        </div>
        {/* Scrolling Area */}
        <div className="flex-1 flex overflow-hidden relative items-center">
           <div className="flex animate-marquee whitespace-nowrap min-w-full">
              <Logos />
              <Logos />
              <Logos />
              <Logos />
           </div>
        </div>
      </div>

      {/* --- SERVICES --- */}
      <Section id="services">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-black">Services we offer</h2>
          <NeoButton variant="primary" size="sm">All services</NeoButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className={`${service.color} border-2 border-black rounded-2xl p-6 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all flex flex-col h-full min-h-[320px]`}>
              <div className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-neo-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="font-medium leading-relaxed mb-8 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* --- ABOUT --- */}
      <div className="flex flex-col md:flex-row border-b-2 border-black bg-neo-green">
        <div className="flex-1 p-16 md:p-24 border-b-2 md:border-b-0 md:border-r-2 border-black flex items-center justify-center">
           <div className="relative w-full max-w-sm aspect-square">
             {/* Flower shape mask */}
             <div className="absolute inset-0 bg-neo-pink border-4 border-black clip-flower shadow-neo overflow-hidden">
                <img src="https://picsum.photos/id/64/800/800" alt="Team member" className="w-full h-full object-cover scale-110" />
                {/* We simulate the border for clip-path by adding a pseudo element or SVG overlay, but raw CSS border doesn't follow clip-path. 
                    For this brutalist style, a drop shadow filter works best or just the shape itself. */}
             </div>
             {/* Decorative stars */}
             <Star className="absolute -top-4 -right-4 w-12 h-12 fill-white stroke-black stroke-2 animate-spin-slow" />
             <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-neo-purple border-2 border-black"></div>
           </div>
        </div>
        
        <div className="flex-1 p-8 md:p-16 bg-white flex flex-col justify-center">
           <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Our agency started back in 2010</h2>
           <div className="space-y-6 text-lg font-medium text-gray-800">
             <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
             <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus.</p>
           </div>
           <div className="mt-10">
             <NeoButton>About us</NeoButton>
           </div>
        </div>
      </div>

      {/* --- PROJECTS --- */}
      <div id="projects">
        {projects.map((project, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row ${project.bgColor} border-b-2 border-black`}>
            {/* Layout Order Logic */}
            <div className={`flex-1 p-8 md:p-16 flex flex-col justify-center ${project.layout === 'right' ? 'md:order-2 border-b-2 md:border-b-0 md:border-l-2 border-black' : 'md:border-r-2 border-black'}`}>
               <h3 className="text-4xl font-black mb-6">{project.client}</h3>
               <p className="text-lg font-medium mb-8 max-w-md">{project.description}</p>
               <div className="flex gap-4 mb-8">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-4 py-1 border-2 border-black rounded-full bg-white text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                     {tag}
                   </span>
                 ))}
               </div>
               <div>
                 <NeoButton variant="primary">View Project</NeoButton>
               </div>
            </div>

            <div className={`flex-1 p-8 md:p-16 flex items-center justify-center ${project.layout === 'right' ? 'md:order-1' : ''} bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]`}>
               <div className="bg-white p-4 border-2 border-black rounded-2xl shadow-neo w-full max-w-md aspect-square flex flex-col hover:scale-[1.01] transition-transform">
                  {/* Browser top bar simulation */}
                  <div className="h-8 border-b-2 border-black flex items-center px-4 gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                  </div>
                  <div className="flex-grow bg-gray-100 rounded-lg overflow-hidden border-2 border-black relative group">
                    <img src={project.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Project preview" />
                    {/* Add sale badge for 3rd item visually to match image */}
                    {idx === 2 && (
                       <div className="absolute top-0 left-0 h-full w-12 bg-neo-purple border-r-2 border-black flex items-center justify-center z-10">
                          <span className="-rotate-90 whitespace-nowrap font-black tracking-[0.2em] text-lg uppercase">Super Sale</span>
                       </div>
                    )}
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- AWARDS --- */}
      <Section className="bg-gray-50">
        <div className="flex flex-col md:flex-row gap-12">
           <div className="md:w-1/3">
             <h2 className="text-4xl font-black mb-6">Why us?</h2>
             <p className="font-medium text-gray-700 mb-6 leading-relaxed">
               Lorem ipsum dolor sit amet, consect adipiscing elit. Suspend varius enim in eros tristique.
             </p>
             <p className="font-medium text-gray-700 mb-8 leading-relaxed">
               Lorem ipsum dolor sit amet, consect adipiscing elit. Suspend varius enim in eros tristique.
             </p>
             <NeoButton>Get in touch</NeoButton>
           </div>
           
           <div className="md:w-2/3">
              <h3 className="text-3xl font-black mb-8">Our awards</h3>
              <div className="bg-neo-purple border-2 border-black rounded-2xl shadow-neo overflow-hidden">
                {[2022, 2021, 2020, 2018].map((year, i) => (
                  <div key={year} className={`flex justify-between items-center p-6 ${i !== 3 ? 'border-b-2 border-black' : ''} hover:bg-white/30 transition-colors cursor-pointer group`}>
                    <div className="flex items-center gap-4">
                       <div className="w-3 h-3 bg-black rounded-full group-hover:scale-125 transition-transform"></div>
                       <span className="font-bold text-lg">{i % 2 === 0 ? "Website of the Year" : "Webdesign Award"}</span>
                    </div>
                    <span className="font-mono font-bold group-hover:translate-x-[-4px] transition-transform">{year}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </Section>

      {/* --- TESTIMONIALS --- */}
      <Section className="bg-white">
        <h2 className="text-4xl font-black mb-12">What our clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-neo-pink border-2 border-black rounded-2xl p-8 shadow-neo flex flex-col h-full hover:scale-[1.02] transition-transform">
               <div className="text-6xl font-black text-white stroke-black mb-6 select-none" style={{WebkitTextStroke: "2px black"}}>“</div>
               <p className="font-medium text-lg mb-8 flex-grow">"{t.text}"</p>
               <div className="flex items-center gap-4 mt-auto">
                 <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-black" />
                 <div>
                   <div className="font-bold">{t.name}</div>
                   <div className="text-sm font-medium">{t.company}</div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- PROCESS --- */}
      <div className="flex flex-col md:flex-row border-b-2 border-black">
         <div className="flex-1 bg-neo-green p-16 flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-black relative overflow-hidden">
             {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            
            {/* Cross shape */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 drop-shadow-[8px_8px_0_rgba(0,0,0,1)]">
               <div className="w-full h-full clip-cross bg-neo-pink border-4 border-black">
                   <img src="https://picsum.photos/id/325/800/800" className="w-full h-full object-cover" />
               </div>
               {/* Since clip-path cuts borders, we can add an inner stroke via pseudo or a separate div, but for now the shadow gives it depth */}
            </div>
         </div>
         <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-12">Our process</h2>
            <div className="space-y-6">
              {['Idea', 'Execution', 'Launch'].map((step, i) => (
                <div key={i} className="group border-2 border-black rounded-2xl p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 hover:shadow-neo transition-all active:translate-y-1 active:shadow-none bg-white">
                   <span className="font-bold text-xl">0{i+1} - {step}</span>
                   <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-neo-green transition-colors">
                     <span className="font-bold text-lg group-hover:rotate-90 transition-transform">+</span>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </div>

      {/* --- CTA --- */}
      <section className="bg-neo-purple border-b-2 border-black py-24 px-4 text-center">
         <div className="max-w-4xl mx-auto relative">
           <Star className="absolute -top-12 left-0 w-16 h-16 fill-black animate-spin-slow" />
           <Star className="absolute top-1/2 -right-8 w-10 h-10 fill-white stroke-black stroke-2" />
           <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
             Let's create your next big project together.
           </h2>
           <NeoButton size="lg" className="bg-black text-white hover:bg-neutral-800">Get in touch</NeoButton>
         </div>
      </section>

      {/* --- RESOURCES/ARTICLES --- */}
      <Section id="blog">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-black max-w-sm">Our latest articles & resources</h2>
          <NeoButton variant="primary" size="sm">All posts</NeoButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {/* Article 1 */}
           <div className="flex flex-col group cursor-pointer">
             <div className="w-full aspect-[4/3] border-2 border-black rounded-2xl mb-6 overflow-hidden relative shadow-neo group-hover:shadow-neo-lg transition-all border-b-4">
               <ArticleCard1 />
               <div className="absolute bottom-4 right-4 bg-white border-2 border-black rounded-full p-2 z-20">
                 <MoveUpRight className="w-6 h-6" />
               </div>
             </div>
             <h3 className="text-xl font-bold mb-3 group-hover:underline decoration-2">Build a stronger brand with no-code tools</h3>
             <p className="text-gray-600 font-medium text-sm">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod.</p>
           </div>

           {/* Article 2 */}
           <div className="flex flex-col group cursor-pointer">
             <div className="w-full aspect-[4/3] border-2 border-black rounded-2xl mb-6 overflow-hidden relative shadow-neo group-hover:shadow-neo-lg transition-all border-b-4">
               <ArticleCard2 />
               <div className="absolute bottom-4 right-4 bg-white border-2 border-black rounded-full p-2 z-20">
                 <MoveUpRight className="w-6 h-6" />
               </div>
             </div>
             <h3 className="text-xl font-bold mb-3 group-hover:underline decoration-2">How marketers can work better with design</h3>
             <p className="text-gray-600 font-medium text-sm">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
           </div>

           {/* Article 3 */}
           <div className="flex flex-col group cursor-pointer">
             <div className="w-full aspect-[4/3] border-2 border-black rounded-2xl mb-6 overflow-hidden relative shadow-neo group-hover:shadow-neo-lg transition-all border-b-4">
               <ArticleCard3 />
               <div className="absolute bottom-4 right-4 bg-white border-2 border-black rounded-full p-2 z-20">
                 <MoveUpRight className="w-6 h-6" />
               </div>
             </div>
             <h3 className="text-xl font-bold mb-3 group-hover:underline decoration-2">A guide to photography website design</h3>
             <p className="text-gray-600 font-medium text-sm">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
           </div>

        </div>
      </Section>

      {/* --- FOOTER --- */}
      <footer className="bg-neo-black text-white py-16 px-4 md:px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
           
           {/* Col 1 */}
           <div className="md:col-span-1">
            <div className="text-2xl font-extrabold uppercase mb-6">SYNTHETIC<span className="text-neo-purple">SOULS</span></div>
             <p className="text-gray-400 mb-8 text-sm leading-relaxed">
               Stand out from all the creative studios out there with Synthetic Souls. A premium creative design studio experience.
             </p>
             <div className="space-y-4">
               <div className="font-bold text-sm uppercase text-gray-500">Subscribe to our newsletter</div>
               <div className="flex flex-col gap-2">
                 <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neo-purple transition-colors"
                 />
                 <button className="bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                   Subscribe
                 </button>
               </div>
             </div>
           </div>

           {/* Col 2 */}
           <div>
             <h4 className="font-bold mb-6">Pages</h4>
             <ul className="space-y-3 text-sm text-gray-400">
               <li><a href="#" className="hover:text-neo-pink transition-colors">Home 01</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Home 02</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Home 03</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">About 01</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">About 02</a></li>
             </ul>
           </div>

           {/* Col 3 */}
           <div>
             <h4 className="font-bold mb-6 opacity-0">Links</h4>
             <ul className="space-y-3 text-sm text-gray-400">
               <li><a href="#" className="hover:text-neo-pink transition-colors">Contact 01</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Contact 02</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Contact 03</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Packages</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Portfolio</a></li>
             </ul>
           </div>

           {/* Col 4 */}
           <div>
             <h4 className="font-bold mb-6">Utility Pages</h4>
             <ul className="space-y-3 text-sm text-gray-400">
               <li><a href="#" className="hover:text-neo-pink transition-colors">Instructions</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Style Guide</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Licenses</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">Changelog</a></li>
               <li><a href="#" className="hover:text-neo-pink transition-colors">404 Not Found</a></li>
             </ul>
           </div>

         </div>
         <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex justify-between text-xs text-gray-600">
            <div>© Synthetic Souls</div>
            <div>Made by Satish Yadav</div>
         </div>
      </footer>
    </div>
  );
}