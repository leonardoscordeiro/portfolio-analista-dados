// src/app/page.tsx
import { 
  ArrowRight, 
  BarChart3, 
  Code2, 
  Database, 
  LineChart, 
  TrendingUp, 
  Zap, 
  Github, 
  Linkedin, 
  Mail, 
  BrainCircuit,
  LayoutDashboard,
  Layers,
  Terminal
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const projectsByLevel = [
    {
      level: 'C',
      label: 'Júnior / Pleno',
      title: 'Fundamentos & Análise',
      description: 'Domínio técnico em manipulação de dados, SQL e visualização exploratória.',
      color: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50 text-emerald-700',
      icon: <Database className="w-6 h-6" />,
      complexity: 30,
      projects: ['Dashboard Executivo de Vendas', 'EDA (Análise Exploratória) de Marketing', 'Automação de Relatórios em Python']
    },
    {
      level: 'B',
      label: 'Pleno / Sênior',
      title: 'Estratégia de Negócio',
      description: 'Projetos focados em KPIs, ROI e resolução de problemas complexos de negócio.',
      color: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50 text-blue-700',
      icon: <BarChart3 className="w-6 h-6" />,
      complexity: 65,
      projects: ['Análise de Churn & Retenção', 'Cálculo de LTV e CAC', 'Otimização de Processos Logísticos']
    },
    {
      level: 'A',
      label: 'Especialista',
      title: 'Engenharia & Data Science',
      description: 'Modelagem preditiva, pipelines de dados robustos e arquitetura de soluções.',
      color: 'from-violet-500 to-purple-600',
      bgLight: 'bg-purple-50 text-purple-700',
      icon: <BrainCircuit className="w-6 h-6" />,
      complexity: 100,
      projects: ['Previsão de Demanda (Forecasting)', 'Pipeline ETL com Airflow', 'Sistema de Recomendação']
    }
  ];

  const techCategories = [
    {
      name: "Análise & Ciência",
      icon: <TrendingUp className="w-5 h-5" />,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Excel Avançado"]
    },
    {
      name: "Engenharia & Banco de Dados",
      icon: <Database className="w-5 h-5" />,
      skills: ["SQL", "PostgreSQL", "Supabase", "Git/GitHub", "ETL"]
    },
    {
      name: "Visualização & Front",
      icon: <LayoutDashboard className="w-5 h-5" />,
      skills: ["Power BI", "Tableau", "Next.js", "TypeScript", "Tailwind"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-md mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
              <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>Disponível para novos projetos</span>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6">
              Transformando dados em <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Inteligência de Negócio
              </span>
            </h1>
            
            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Olá, sou o <strong>Leonardo Cordeiro</strong>. Especialista em contar histórias através de dados, 
              construir pipelines robustos e criar dashboards que orientam decisões executivas.
            </p>
            
            {/* Social Links & CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/projects"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
              >
                <span className="mr-2">Ver Portfólio</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <div className="flex items-center gap-3">
                <Link 
                  href="https://linkedin.com/in/seulinkedin" 
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://github.com/leonardoscordeiro" 
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-gray-100 hover:border-white hover:text-black transition-all"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Projects Overview - The "Tier List" Concept */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Portfólio Estruturado
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Organizei meus projetos em 3 níveis de complexidade para demonstrar minha evolução e capacidade de resolver diferentes tipos de problemas.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {projectsByLevel.map((level) => (
              <div
                key={level.level}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Header Card */}
                <div className={`relative p-6 bg-gradient-to-br ${level.color} text-white`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    {level.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-white/30">
                      Nível {level.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{level.title}</h3>
                  <p className="mt-1 text-sm text-blue-100 opacity-90">{level.label}</p>
                </div>

                {/* Body Card */}
                <div className="flex-1 p-6">
                  <p className="text-sm text-slate-600 mb-6 min-h-[40px]">
                    {level.description}
                  </p>
                  
                  {/* Complexity Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                      <span>Complexidade Técnica</span>
                      <span>{level.complexity}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${level.color}`} 
                        style={{ width: `${level.complexity}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {level.projects.map((project, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${level.color.split(' ')[1].replace('to-', 'bg-')}`} />
                        <span className="text-sm text-slate-700 font-medium">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Card */}
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    href="/projects"
                    className={`flex items-center justify-center w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${level.bgLight} hover:bg-opacity-80`}
                  >
                    Ver Projetos
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Categorized */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Arsenal Tecnológico
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Ferramentas modernas que utilizo para extrair, processar e visualizar dados.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10 hover:bg-blue-50 hover:text-blue-700 hover:ring-blue-600/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Contact */}
      <section className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute left-[50%] top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vamos conversar sobre dados?
            </h2>
            <p className="mx-auto mt-6 text-lg leading-8 text-gray-300">
              Estou sempre aberto a discutir novas oportunidades, projetos freelance ou apenas trocar ideias sobre o mercado de Analytics.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Entrar em Contato
              </Link>
              <Link href="/projects" className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors">
                Ver todos os projetos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}