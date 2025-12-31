
export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Dashboard Executivo de KPIs",
      level: "C",
      description: "Dashboard interativo para monitoramento de performance comercial",
      technologies: ["Tableau", "SQL", "Python"],
      color: "emerald"
    },
    {
      id: 2,
      title: "Análise Exploratória de E-commerce",
      level: "C", 
      description: "Análise de dados de e-commerce brasileiro identificando padrões",
      technologies: ["Python", "Pandas", "Matplotlib"],
      color: "emerald"
    },
    {
      id: 3,
      title: "Relatório Automatizado de Marketing",
      level: "C",
      description: "Automação de relatórios semanais com Python e PDF export",
      technologies: ["Python", "Jupyter", "PDF"],
      color: "emerald"
    },
    {
      id: 4,
      title: "Análise de Churn em SaaS",
      level: "B",
      description: "Identificação dos principais fatores de cancelamento",
      technologies: ["SQL", "Python", "Scikit-learn"],
      color: "amber"
    },
    {
      id: 5, 
      title: "ROI da Campanha Black Friday",
      level: "B",
      description: "Análise de custo-benefício e canibalização",
      technologies: ["Python", "Estatística", "Excel"],
      color: "amber"
    },
    {
      id: 6,
      title: "Otimização de Processo de Atendimento",
      level: "B",
      description: "Redução de tempo médio de resolução",
      technologies: ["Process Mining", "SQL", "Power BI"],
      color: "amber"
    },
    {
      id: 7,
      title: "Previsão de Demanda com Sazonalidade",
      level: "A",
      description: "Modelo preditivo para otimização de estoque",
      technologies: ["Machine Learning", "Time Series", "API"],
      color: "red"
    },
    {
      id: 8,
      title: "Análise de Impacto Causal",
      level: "A",
      description: "Medição do efeito real de programa de fidelidade",
      technologies: ["Causal Inference", "R", "Experimentos"],
      color: "red"
    },
    {
      id: 9,
      title: "Sistema de Priorização de Demandas",
      level: "A",
      description: "Framework para priorização estratégica",
      technologies: ["Decision Modeling", "Python", "Dashboard"],
      color: "red"
    }
  ];

  const levelColors: Record<string, string> = {
    'C': 'bg-emerald-100 text-emerald-800 border-emerald-300',
    'B': 'bg-amber-100 text-amber-800 border-amber-300',
    'A': 'bg-red-100 text-red-800 border-red-300'
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Meus Projetos</h1>
        <p className="text-gray-600 mb-8">
          9 projetos organizados por nível de complexidade e impacto
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold border ${levelColors[project.level]}`}>
                    Nível {project.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Ver Detalhes
                  </button>
                  <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    Código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">📈 Minha Evolução Técnica</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600">3</div>
              <div className="text-gray-600">Projetos Fundamentais</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600">3</div>
              <div className="text-gray-600">Projetos Intermediários</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600">3</div>
              <div className="text-gray-600">Projetos Avançados</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
