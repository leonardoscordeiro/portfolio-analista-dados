// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Github, Linkedin, Database } from 'lucide-react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leonardo Cordeiro | Analista de Dados',
  description: 'Portfólio profissional focado em Business Intelligence, Ciência de Dados e Engenharia de Analytics.',
  icons: {
    icon: '/favicon.ico', // Certifique-se de ter um favicon ou remova esta linha se não tiver
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 antialiased text-slate-900`}>
        
        {/* Navbar Fixa com Efeito de Vidro */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/80 backdrop-blur-md transition-all">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
                <Database className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Leonardo<span className="text-blue-600">Cordeiro</span>
              </span>
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="/">Início</NavLink>
              <NavLink href="/projects">Projetos</NavLink>
              <NavLink href="/about">Sobre</NavLink>
              
              <Link 
                href="/contact" 
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                Contato
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content - Pt-16 adicionado para compensar a navbar fixa */}
        <main className="min-h-screen pt-0">
          {children}
        </main>

        {/* Footer Profissional */}
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-center md:text-left">
              <p className="font-medium text-white">Leonardo Cordeiro</p>
              <p className="text-sm mt-1">Transformando dados em decisões estratégicas.</p>
            </div>

            <div className="flex items-center gap-6">
              <SocialLink href="https://github.com/leonardoscordeiro" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="https://linkedin.com/in/seulinkedin" icon={<Linkedin className="w-5 h-5" />} />
            </div>

            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} • Construído com Next.js & Tailwind
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

// Componente auxiliar para Links do Menu (para manter o código limpo)
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
    </Link>
  )
}

// Componente auxiliar para Links Sociais
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
    >
      {icon}
    </a>
  )
}