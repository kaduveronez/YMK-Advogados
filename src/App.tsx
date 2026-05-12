/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Instagram, 
  Menu, 
  X,
  ChevronDown
} from "lucide-react";
import { cn } from "./lib/utils";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Áreas", href: "#areas" },
    { name: "Sobre", href: "#sobre" },
    { name: "Equipe", href: "#equipe" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-primary-darker/95 backdrop-blur-md border-b border-line py-4" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-3xl font-display font-normal text-paper tracking-tighter">YMK</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="t-eyebrow text-text-muted hover:text-paper transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>
          <button 
            onClick={() => window.open("https://wa.me/5511910801312", "_blank")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-none t-eyebrow flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-pulse group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Emergência 24h
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button 
          className="md:hidden text-paper p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary-darker z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-3xl font-display text-paper">YMK</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-paper p-2">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-display text-text-muted hover:text-paper transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-16 flex flex-col gap-6">
              <button 
                onClick={() => window.open("https://wa.me/5511910801312", "_blank")}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-xl font-display flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(220,38,38,0.5)] animate-pulse transition-all"
              >
                Emergência 24h
              </button>
              <div className="flex gap-4 items-center justify-center text-text-muted">
                <Instagram size={20} />
                <Mail size={20} />
                <Phone size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="t-eyebrow text-tertiary mb-12 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-tertiary/30" />
          00 · YMK Advocacia
        </motion.div>
        
        <div className="max-w-6xl relative">
          <div className="absolute -top-32 -left-32 w-64 h-64 opacity-20 pointer-events-none">
            <AbstractGlyph className="w-full h-full rotate-12" />
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="t-display-xl mb-12 relative z-10"
          >
            Direito com precisão, <br />
            <span className="italic">estratégia</span> e propósito.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="t-body-l text-text-muted max-w-[56ch] mb-16 border-l border-line pl-8"
          >
            Soluções jurídicas para casos que exigem profundidade analítica, sensibilidade política e leitura de contexto. Operamos no Direito Penal de defesa, em mercados emergentes e em agendas contemporâneas que reescrevem o que é possível dentro da lei.
          </motion.p>
          {/* ... buttons ... */}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-12"
          >
            <button 
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-5 bg-paper text-primary font-display text-xl hover:bg-secondary hover:text-white transition-all duration-500 group flex items-center gap-3"
            >
              Falar com o escritório
              <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" size={20} />
            </button>
            <a 
              href="#areas" 
              className="t-body-l text-paper relative group inline-flex items-center gap-2"
            >
              Conhecer áreas de atuação
              <span className="absolute -bottom-1 left-0 w-full h-px bg-paper/30 transition-all duration-300 group-hover:bg-paper" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-12 right-6 hidden md:block"
      >
        <span className="t-eyebrow text-text-muted">São Paulo · OAB/SP</span>
      </motion.div>
    </section>
  );
};

const Areas = () => {
  const areas = [
    { 
      id: "01", 
      name: "Direito Penal", 
      desc: "Defesa técnica garantista em todas as fases da persecução penal, com leitura crítica do devido processo e construção estratégica do caso desde a investigação preliminar." 
    },
    { 
      id: "02", 
      name: "Direitos Humanos e Política de Drogas", 
      desc: "Atuação em causas que articulam a defesa individual à reforma legislativa. Acompanhamento de associações de cannabis medicinal, pacientes e cultivadores em interface com órgãos reguladores." 
    },
    { 
      id: "03", 
      name: "Direito Público e Novos Mercados", 
      desc: "Construção jurídica em setores em formação regulatória: cannabis, fintech, ativos digitais, ESG. Diálogo com agências reguladoras, ministérios e órgãos de controle." 
    },
    { 
      id: "04", 
      name: "Direito Empresarial", 
      desc: "Estruturação societária, contratos, fusões e contencioso empresarial, com ênfase em empresas que operam em cenários de complexidade regulatória ou pública." 
    },
    { 
      id: "05", 
      name: "Terceiro Setor", 
      desc: "Assessoria jurídica para associações, OSCIPs e fundações: governança, compliance, captação de recursos, prestação de contas e proteção institucional." 
    },
    { 
      id: "06", 
      name: "Consultoria Jurídica", 
      desc: "Acompanhamento estratégico contínuo. Pareceres, due diligence, avaliação de risco e arquitetura jurídica preventiva para decisões empresariais e pessoais relevantes." 
    },
  ];

  return (
    <section id="areas" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-96 h-96 opacity-10 blur-3xl bg-secondary rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="t-eyebrow text-tertiary mb-12 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-tertiary/30" />
          01 · Áreas de Atuação
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-display-l mb-12"
        >
          O que fazemos.
        </motion.h2>
        {/* ... */}

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-body-l text-text-muted max-w-[60ch] mb-20"
        >
          Atuamos em frentes que se conectam: a defesa penal técnica, a engenharia jurídica para mercados emergentes, e a articulação política em pautas que ainda estão sendo escritas. Não somos um escritório de volume, somos um escritório de profundidade.
        </motion.p>

        <div className="grid grid-cols-1">
          {areas.map((area, idx) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group border-t border-line py-12 md:py-16 transition-all duration-500 hover:border-paper"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
                <span className="t-display-l text-tertiary/40 group-hover:text-tertiary transition-colors duration-500 md:w-32">
                  {area.id}
                </span>
                <div className="flex-1">
                  <h3 className="t-heading-m mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {area.name}
                  </h3>
                  <p className="t-body-m text-text-muted md:max-w-2xl">
                    {area.desc}
                  </p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="text-line group-hover:text-paper group-hover:translate-x-4 transition-all duration-500" size={32} />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-primary-darker">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="t-eyebrow text-tertiary mb-12"
            >
              02 · Sobre
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="t-display-l mb-16"
            >
              Um escritório artesanal, técnico e garantista.
            </motion.h2>

            <div className="space-y-12">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="t-body-l text-paper/90"
              >
                A YMK opera fora da lógica industrial da advocacia. Não trabalhamos com modelos prontos nem com padrões pré-fabricados de defesa: cada caso é construído à mão, sob medida, com a profundidade analítica que a complexidade do contemporâneo exige.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="t-body-l text-paper/90"
              >
                Nossa orientação é garantista. Operamos a partir da Constituição como bússola e da técnica como ferramenta: defendendo direitos individuais, articulando garantias processuais e enfrentando as zonas em que o sistema penal, o aparato regulatório ou o poder público pressionam o cidadão.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="t-body-l text-paper/90"
              >
                Trabalhamos onde o direito tradicional ainda não chegou: nos mercados emergentes que estão sendo escritos, nas agendas que reformulam paradigmas de política pública, e nas defesas que demandam leitura política do caso, e não apenas leitura literal da lei.
              </motion.p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative p-12 bg-primary/30 border border-line"
            >
              <span className="absolute -top-6 -left-6 text-6xl font-display text-tertiary opacity-30">“</span>
              <p className="t-display-l text-tertiary italic text-3xl lg:text-4xl leading-[1.2]">
                A precisão da técnica é o que sustenta a ousadia da estratégia.
              </p>
              <span className="absolute -bottom-6 -right-6 text-6xl font-display text-tertiary opacity-30">”</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Method = () => {
  const principles = [
    {
      num: "I",
      title: "Leitura de contexto",
      desc: "Antes de ler a lei, lemos o caso. Cada defesa começa com a reconstrução minuciosa do contexto político, econômico e humano em que o problema se inscreve."
    },
    {
      num: "II",
      title: "Estratégia, não roteiro",
      desc: "Não temos teses prontas. Cada caso recebe uma estratégia construída do zero, com hipóteses testadas, cenários mapeados e escolhas justificáveis em cada movimento."
    },
    {
      num: "III",
      title: "Técnica como bússola",
      desc: "Operamos com rigor doutrinário e atualização constante de jurisprudência. A técnica é o que sustenta a posição, não a retórica."
    },
    {
      num: "IV",
      title: "Discrição institucional",
      desc: "Trabalhamos sob sigilo profissional rigoroso. Não publicamos casos, não exibimos clientes, não divulgamos resultados. A confiança é a moeda."
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-eyebrow text-tertiary mb-12"
        >
          03 · Método
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-display-l mb-12"
        >
          Como atuamos.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-body-l text-text-muted mb-20"
        >
          Quatro princípios que orientam cada caso, do primeiro contato à decisão final.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          {principles.map((p, idx) => (
            <motion.div 
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="w-16 h-px bg-tertiary mb-12 transition-all duration-700 group-hover:w-full" />
              <div className="t-eyebrow text-tertiary mb-6">{p.num}.</div>
              <h3 className="t-heading-m mb-8">{p.title}</h3>
              <p className="t-body-m text-text-muted max-w-md">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="equipe" className="py-32 bg-primary-darker">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-eyebrow text-tertiary mb-12"
        >
          04 · Equipe
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-display-l mb-12"
        >
          Quem sustenta o escritório.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-body-l text-text-muted mb-20"
        >
          O trabalho artesanal exige envolvimento direto. Os sócios acompanham todos os casos.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-px w-full bg-line mb-12 transition-colors duration-500 group-hover:bg-tertiary" />
            <div className="aspect-[4/5] bg-primary/30 mb-8 overflow-hidden relative">
              <img 
                src="/miguel.jpg" 
                alt="Miguel Kupermann" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            </div>
            <h3 className="text-4xl font-display mb-2">Miguel Kupermann</h3>
            <div className="t-eyebrow text-tertiary mb-8">Sócio · OAB/SP</div>
            <p className="t-body-m text-text-muted mb-12 italic leading-relaxed">
              Advogado com formação em Direito focado na profundidade técnica. <br />
              Atua em Direito Penal, Política de Drogas e Direito Público.
            </p>
            <a href="mailto:miguel@ymkadv.com.br" className="t-body-m text-paper hover:text-secondary transition-colors underline underline-offset-8">
              miguel@ymkadv.com.br
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-px w-full bg-line mb-12 transition-colors duration-500 group-hover:bg-tertiary" />
            <div className="aspect-[4/5] bg-primary/30 mb-8 overflow-hidden relative">
              <img 
                src="/matheus.jpg" 
                alt="Matheus Yasbeck" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            </div>
            <h3 className="text-4xl font-display mb-2">Matheus Yasbeck</h3>
            <div className="t-eyebrow text-tertiary mb-8">Advogado · OAB/SP</div>
            <p className="t-body-m text-text-muted mb-12 italic leading-relaxed">
              Advogado com atuação estratégica e voltada para a precisão técnica. <br />
              trajectory institucional focada em casos de alta complexidade.
            </p>
            <a href="mailto:matheus@ymkadv.com.br" className="t-body-m text-paper hover:text-secondary transition-colors underline underline-offset-8">
              matheus@ymkadv.com.br
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Emergency = () => {
  return (
    <section className="py-32 bg-paper text-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-eyebrow text-primary/60 mb-12"
        >
          05 · Emergência 24h
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="t-display-l mb-12"
            >
              Quando não dá pra esperar.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="t-body-l max-w-[56ch] mb-12"
            >
              Atendemos situações que exigem resposta imediata: condução à delegacia, lavratura de TCO, blitz, ocorrências envolvendo a Lei de Drogas, embriaguez ao volante e violência doméstica. A linha de plantão funciona 24 horas por dia, todos os dias do ano.
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.button 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              onClick={() => window.open("https://wa.me/5511910801312", "_blank")}
              className="w-full lg:w-auto px-12 py-8 bg-red-600 hover:bg-red-700 text-white text-2xl font-display flex items-center justify-center gap-4 transition-all shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-pulse group"
            >
              <Phone size={28} />
              Falar com plantão agora
              <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </motion.button>
            <div className="mt-8 text-center lg:text-right">
              <span className="t-eyebrow text-primary/40 block mb-2">WhatsApp Emergencial</span>
              <span className="text-xl font-display">(11) 91080-1312</span>
              <span className="block t-body-s text-primary/60 mt-1">Disponível 24h, 7 dias por semana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
    mensagem: "",
    lgpd: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em até 24h úteis.");
    setFormState({
      nome: "",
      email: "",
      telefone: "",
      area: "",
      mensagem: "",
      lgpd: false
    });
  };

  return (
    <section id="contato" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="t-eyebrow text-tertiary mb-12"
        >
          06 · Contato
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="t-display-l mb-12"
            >
              Vamos conversar sobre o seu caso.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="t-body-l text-text-muted mb-20"
            >
              Para consultas, marcação de reuniões ou apresentação de caso, escreva ou agende um contato direto. Respondemos em até 24h úteis.
            </motion.p>

            <div className="space-y-16">
              <div className="flex flex-col gap-4">
                <span className="t-eyebrow text-tertiary">Escritório</span>
                <p className="t-body-m text-paper/80 leading-relaxed">
                  Av. Brig. Faria Lima, 1826, Conj. 710 <br />
                  Jardim Paulistano · São Paulo · SP <br />
                  CEP 01.451-908
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="t-eyebrow text-tertiary">Contato</span>
                <div className="flex flex-col gap-2">
                  <a href="mailto:contato@ymkadv.com.br" className="t-body-m hover:text-secondary transition-colors underline underline-offset-4">contato@ymkadv.com.br</a>
                  <a href="tel:+5511995881977" className="t-body-m hover:text-secondary transition-colors">+55 (11) 99588-1977</a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="t-eyebrow text-tertiary">Redes</span>
                <a href="https://www.instagram.com/ymk.adv" target="_blank" className="t-body-m inline-flex items-center gap-2 hover:text-secondary transition-colors">
                  Instagram · @ymk.adv
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-10 group">
              <div className="relative">
                <label className="t-eyebrow text-text-muted mb-2 block">Nome completo</label>
                <input 
                  type="text" 
                  required
                  value={formState.nome}
                  onChange={(e) => setFormState({...formState, nome: e.target.value})}
                  className="w-full bg-transparent border-b border-line py-4 text-paper focus:outline-none focus:border-paper transition-colors"
                />
              </div>
              <div className="relative">
                <label className="t-eyebrow text-text-muted mb-2 block">E-mail profissional</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-transparent border-b border-line py-4 text-paper focus:outline-none focus:border-paper transition-colors"
                />
              </div>
              <div className="relative">
                <label className="t-eyebrow text-text-muted mb-2 block">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  value={formState.telefone}
                  onChange={(e) => setFormState({...formState, telefone: e.target.value})}
                  className="w-full bg-transparent border-b border-line py-4 text-paper focus:outline-none focus:border-paper transition-colors"
                />
              </div>
              <div className="relative">
                <label className="t-eyebrow text-text-muted mb-2 block">Área de interesse</label>
                <select 
                  value={formState.area}
                  onChange={(e) => setFormState({...formState, area: e.target.value})}
                  className="w-full bg-transparent border-b border-line py-4 text-paper focus:outline-none focus:border-paper transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-primary-darker">Selecione uma área...</option>
                  <option value="penal" className="bg-primary-darker">Direito Penal</option>
                  <option value="drogas" className="bg-primary-darker">Crimes de Drogas</option>
                  <option value="publico" className="bg-primary-darker">Direito Público</option>
                  <option value="empresarial" className="bg-primary-darker">Direito Empresarial</option>
                  <option value="terceiro" className="bg-primary-darker">Terceiro Setor</option>
                  <option value="outro" className="bg-primary-darker">Outro</option>
                </select>
                <ChevronDown className="absolute right-0 bottom-4 text-text-muted pointer-events-none" size={20} />
              </div>
              <div className="relative">
                <label className="t-eyebrow text-text-muted mb-2 block">Sobre o que precisa conversar</label>
                <textarea 
                  rows={5}
                  value={formState.mensagem}
                  onChange={(e) => setFormState({...formState, mensagem: e.target.value})}
                  className="w-full bg-transparent border-b border-line py-4 text-paper focus:outline-none focus:border-paper transition-colors resize-none"
                />
              </div>
              <div className="flex items-start gap-4">
                <input 
                  type="checkbox" 
                  id="lgpd"
                  required
                  checked={formState.lgpd}
                  onChange={(e) => setFormState({...formState, lgpd: e.target.checked})}
                  className="mt-1 w-4 h-4 accent-secondary bg-transparent border-line rounded-none"
                />
                <label htmlFor="lgpd" className="t-body-s text-text-muted cursor-pointer">
                  Concordo com o tratamento dos meus dados conforme a Política de Privacidade (LGPD).
                </label>
              </div>
              <button 
                type="submit"
                className="w-full py-8 bg-paper text-primary text-xl font-display flex items-center justify-center gap-3 hover:bg-secondary hover:text-white transition-all duration-500 group"
              >
                Enviar mensagem
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary-darker pt-32 pb-16 border-t border-line">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <span className="text-4xl font-display text-paper">YMK</span>
            <div className="space-y-1">
              <p className="t-body-s text-text-muted">Miguel Kupermann Sociedade</p>
              <p className="t-body-s text-text-muted">Individual de Advocacia</p>
              <p className="t-body-s text-text-muted mt-2">CNPJ 61.579.746/0001-96</p>
            </div>
          </div>
          
          <div>
            <span className="t-eyebrow text-tertiary block mb-8">Áreas</span>
            <ul className="flex flex-col gap-4">
              {["Direito Penal", "Direitos Humanos", "Direito Público", "Direito Empresarial", "Terceiro Setor", "Consultoria"].map(item => (
                <li key={item} className="t-body-s text-text-muted hover:text-paper transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="t-eyebrow text-tertiary block mb-8">Escritório</span>
            <p className="t-body-s text-text-muted leading-relaxed">
              Av. Brig. Faria Lima, 1826 · Conj. 710 <br />
              Jardim Paulistano · São Paulo · SP <br />
              CEP 01.451-908
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="t-eyebrow text-tertiary block mb-8">Contato</span>
              <p className="t-body-s text-text-muted mb-2">contato@ymkadv.com.br</p>
              <p className="t-body-s text-text-muted">(11) 99588-1977</p>
            </div>
            <a href="https://www.instagram.com/ymk.adv" target="_blank" className="flex items-center gap-2 t-body-s text-text-muted hover:text-paper transition-all group">
              Instagram <Instagram size={14} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
            </a>
          </div>
        </div>

        <div className="pt-16 border-t border-line flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <p className="t-body-s text-text-muted/50">
              © 2026 YMK Advocacia · Todos os direitos reservados.
            </p>
            <div className="flex gap-8">
              <a href="#" className="t-body-s text-text-muted hover:text-paper transition-colors underline underline-offset-4">Política de Privacidade</a>
              <a href="#" className="t-body-s text-text-muted hover:text-paper transition-colors underline underline-offset-4">Cookies</a>
            </div>
          </div>
          
          <div className="text-left md:text-right space-y-4">
            <p className="t-body-s text-text-muted/60 max-w-sm italic">
              Conteúdo informativo nos termos do Provimento 205/2021 do CFOAB.
            </p>
            <p className="t-body-s text-text-muted/40">
              Site desenvolvido por Cloudwalk IP · <a href="https://kaduveronez.com" target="_blank" className="hover:text-secondary">kaduveronez.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyActions = () => {
  return (
    <>
      {/* Desktop WhatsApp Bubble */}
      <motion.button 
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://wa.me/5511995881977", "_blank")}
        className="fixed bottom-10 right-10 z-40 hidden md:flex w-16 h-16 bg-secondary text-white rounded-full items-center justify-center shadow-2xl"
      >
        <Phone size={24} />
      </motion.button>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 flex md:hidden border-t border-line">
        <button 
          onClick={() => window.open("https://wa.me/5511910801312", "_blank")}
          className="flex-1 bg-red-600 text-white py-5 t-eyebrow flex items-center justify-center gap-2 animate-pulse shadow-[0_-5px_15px_rgba(220,38,38,0.3)] transition-colors hover:bg-red-700"
        >
          <Phone size={18} />
          Urgência 24h
        </button>
        <button 
          onClick={() => window.open("https://wa.me/5511995881977", "_blank")}
          className="flex-1 bg-primary-soft text-paper py-5 t-eyebrow flex items-center justify-center gap-2"
        >
          <Instagram size={18} />
          WhatsApp
        </button>
      </div>
    </>
  );
};

const Noise = () => <div className="noise-overlay" />;

const Atmosphere = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        x: ["-10%", "10%", "-10%"],
        y: ["-10%", "10%", "-10%"]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-secondary/10 blur-[120px] rounded-full"
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        rotate: [0, -90, 0],
        x: ["10%", "-10%", "10%"],
        y: ["10%", "-10%", "10%"]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-tertiary/10 blur-[120px] rounded-full"
    />
  </div>
);

const AbstractGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("fill-none stroke-line/20", className)}>
    <motion.circle 
      cx="50" cy="50" r="45" 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path 
      d="M20 50 L80 50 M50 20 L50 80" 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
    />
  </svg>
);

// --- Main App ---

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return (
    <div className="relative bg-primary overflow-x-hidden">
      <Noise />
      <Atmosphere />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        
        <div className="container mx-auto px-6 py-12 flex justify-center opacity-30">
          <AbstractGlyph className="w-12 h-12" />
        </div>

        <Areas />
        
        <div className="container mx-auto px-6 py-12 flex justify-end pr-32 opacity-20">
          <AbstractGlyph className="w-24 h-24 rotate-45" />
        </div>

        <About />
        <Method />
        <Team />
        <Emergency />
        <Contact />
      </main>
      <Footer />
      <StickyActions />

      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #14211c; }
        ::-webkit-scrollbar-thumb { background: #5a8080; }
        ::-webkit-scrollbar-thumb:hover { background: #99856f; }
        .font-display { font-variation-settings: var(--font-variation-display); }
      `}} />
    </div>
  );
}
