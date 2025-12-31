// src/app/about/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Briefcase, 
  GraduationCap, 
  User,
  Award,
  BookOpen
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Breadcrumb / Voltar */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o início
        </Link>

        {/* --- Seção de Perfil --- */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Foto / Avatar */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
                <User className="w-20 h-20 text-blue-300" />
              </div>
            </div>

            {/* Texto Bio */}
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Leonardo <span className="text-blue-600">Cordeiro</span>
              </h1>
              <p className="text-blue-600 font-medium mb-6">Analista de Dados & Business Intelligence</p>
              
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Sou um profissional focado no desenvolvimento de soluções analíticas que impactam diretamente os resultados comerciais e operacionais. 
                  Com sólida experiência em ferramentas como SQL, Python, Power BI e Google Cloud, atuo transformando dados brutos em insights estratégicos.
                </p>
                <p>
                  Minha trajetória passa por grandes empresas como Grupo Ável e Lojas Renner, onde liderei projetos de estruturação de dados, 
                  automação de processos e criação de dashboards executivos. Atualmente, combino conhecimentos técnicos de engenharia de dados 
                  com uma visão de negócios aguçada para otimizar funis de vendas e processos de pós-venda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- Coluna da Esquerda: Experiência (Ocupa 2/3) --- */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Experiência Profissional</h2>
            </div>

            <div className="space-y-0">
              {/* Grupo Ável */}
              <TimelineItem 
                logoUrl="https://media.licdn.com/dms/image/v2/D4E0BAQGUlrIUAXi_5Q/company-logo_100_100/B4EZssMg1pIQAQ-/0/1765973037123/grupoavel_logo?e=1769040000&v=beta&t=rs0BgIb3UZYlrDjtO1HLLxX8hv3ogTNUzd2A6q0Agws"
                year="Jun 2025 - Atual"
                role="Analista de Dados"
                company="Grupo Ável"
                description="Responsável pelo desenvolvimento de soluções analíticas para o time comercial e de pós-vendas. Criação de dashboards para monitoramento de vendas, estruturação do 'Pulso do Consórcio' e desenvolvimento de sistema interno de gestão de cartas e clientes. Utilização de SQL, Python, Pandas, Google Apps Script e Power BI."
                color="blue"
              />

              {/* Lojas Renner */}
              <TimelineItem 
                logoUrl="https://media.licdn.com/dms/image/v2/D4D0BAQFD9bHi3LlGKA/company-logo_100_100/B4DZbJ.Cf6G0AQ-/0/1747145206237/lojas_renner_logo?e=1769040000&v=beta&t=DSV5g5--FYsjB76vySkJDtemnxwLgZGYqMhn7geE8B0"
                year="Jun 2024 - Mai 2025"
                role="Analista de Dados"
                company="Lojas Renner S.A."
                description="Coleta, tratamento e análise de grandes volumes de dados (Big Data) para insights estratégicos. Atuação com extração de dados via Spark/Databricks e criação de dashboards de Funil de Vendas no Looker Studio. Otimização de processos baseada em comportamento do consumidor."
                color="slate"
              />

              {/* Alpha Química */}
              <TimelineItem 
                logoUrl="https://media.licdn.com/dms/image/v2/D4D0BAQGKdossQZgtYw/company-logo_100_100/B4DZqCJEXSGgAU-/0/1763120007400/alphaquimica_logo?e=1769040000&v=beta&t=s2MOSURZpN-2cgQjUDhFFFjU_hy4NxyfmhxUgRgw8Po"
                year="Fev 2024 - Jun 2024"
                role="Analista de Dados"
                company="Alpha Química"
                description="Atuação focada na otimização de e-commerce e análise de indicadores de performance digital."
                color="slate"
              />

              {/* e21 */}
              <TimelineItem 
                logoUrl="https://media.licdn.com/dms/image/v2/D4D0BAQHLAPdobaiNGA/company-logo_100_100/B4DZhm3WUkHYAQ-/0/1754072442948/agencia_e21_logo?e=1769040000&v=beta&t=Yb8wi8h-L1nA7zzZK1N1Ld8uwzPsk4f0IfAv-Pa4PVs"
                year="Ago 2023 - Fev 2024"
                role="Analista de BI"
                company="e21 - Estratégias"
                description="Ponte entre P&D e Comercial. Pesquisa de comportamento de consumo, ciclo de vida de produtos e monitoramento da concorrência para traçar objetivos estratégicos baseados em dados."
                color="slate"
              />

              {/* AESC */}
              <TimelineItem 
                logoUrl="https://media.licdn.com/dms/image/v2/D4D0BAQHmR1jdxANwMQ/company-logo_100_100/B4DZkuro4LJgAQ-/0/1757424816045/somosaesc_logo?e=1769040000&v=beta&t=LhK-j9ga6pCo5l-agmbyN2M1Kp3BsnZv3OV3AJQofOc"
                year="Ago 2022 - Jul 2023"
                role="Faturista"
                company="AESC - Assoc. Educadora São Carlos"
                description="Execução e conferência de faturamento hospitalar, gestão de glosas e acompanhamento de indicadores de receita. Análise de dados em portais de convênios para garantir o cumprimento de metas financeiras."
                color="slate"
              />
            </div>
          </div>

          {/* --- Coluna da Direita: Educação e Competências (Ocupa 1/3) --- */}
          <div className="space-y-8">
            
            {/* Educação */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Formação</h2>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-4 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900">Ciência de Dados</h3>
                <p className="text-slate-600 text-sm mt-1">Universidade de Franca</p>
                <p className="text-slate-400 text-xs mt-2">2022 - 2026</p>
              </div>
            </div>

            {/* Competências / Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Competências</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Power BI", "Google Cloud", "Databricks", "Pandas", "Estatística", "ETL", "Looker Studio"].map((skill) => (
                   <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                     {skill}
                   </span>
                ))}
              </div>
            </div>

            {/* Cursos */}
            <div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="mt-1"><BookOpen className="w-4 h-4 text-slate-400" /></div>
                <div>
                  <h4 className="font-medium text-slate-900 text-sm">Cursos Complementares</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Foco contínuo em Big Data, Analytics e Engenharia de Dados através de plataformas como Alura, DataCamp e Coursera.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// Componente Auxiliar para Timeline Atualizado com Imagem
interface TimelineItemProps {
  year: string;
  role: string;
  company: string;
  description: string;
  color: 'blue' | 'slate';
  logoUrl: string;
}

function TimelineItem({ year, role, company, description, color, logoUrl }: TimelineItemProps) {
  const isBlue = color === 'blue';
  
  return (
    <div className="relative pl-8 border-l-2 border-slate-200 pb-12 last:pb-0 group">
      {/* Bolinha da timeline */}
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm transition-colors z-10 ${isBlue ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-blue-400'}`} />
      
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {/* Logo da Empresa */}
        <div className="shrink-0 p-1 bg-white border border-slate-100 rounded-lg shadow-sm mt-1">
          <Image 
            src={logoUrl} 
            alt={`Logo ${company}`} 
            width={48} 
            height={48} 
            className="rounded-md object-contain"
          />
        </div>

        {/* Conteúdo de Texto */}
        <div>
          <div className={`mb-1 text-xs font-bold uppercase tracking-wider ${isBlue ? 'text-blue-600' : 'text-slate-400'}`}>
            {year}
          </div>
          
          <h3 className="text-lg font-bold text-slate-800 leading-tight">{role}</h3>
          <div className="text-slate-500 text-sm mb-3 font-medium">{company}</div>
          
          <p className="text-slate-600 text-sm leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}