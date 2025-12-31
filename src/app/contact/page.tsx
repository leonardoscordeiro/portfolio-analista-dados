// src/app/contact/page.tsx
import Link from 'next/link';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  ExternalLink
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Voltar */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o início
        </Link>

        {/* Cabeçalho Centralizado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Vamos <span className="text-blue-600">Conversar?</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Estou disponível para novos projetos de análise de dados, consultoria em BI ou oportunidades CLT. 
            Escolha o canal que preferir abaixo.
          </p>
        </div>

        {/* Grid de Cartões de Contato */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* Card WhatsApp */}
          <a 
            href="https://wa.me/555197040395" 
            target="_blank"
            className="group flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-4 bg-green-50 text-green-600 rounded-full mb-4 group-hover:bg-green-100 group-hover:scale-110 transition-all">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
            <p className="text-slate-500 mb-6">+55 (51) 9704-0395</p>
            <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
              Enviar mensagem <ExternalLink className="w-4 h-4 ml-2" />
            </span>
          </a>

          {/* Card Email */}
          <a 
            href="mailto:contatoleonardoscordeiro@gmail.com" 
            className="group flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-4 bg-blue-50 text-blue-600 rounded-full mb-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">E-mail</h3>
            <p className="text-slate-500 mb-6">contatoleonardoscordeiro@gmail.com</p>
            <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
              Escrever e-mail <ExternalLink className="w-4 h-4 ml-2" />
            </span>
          </a>
        </div>

        {/* Redes Sociais e Localização */}
        <div className="flex flex-col items-center border-t border-slate-200 pt-12">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Outras Redes
          </h2>
          
          <div className="flex gap-6 mb-10">
            <a 
              href="https://www.linkedin.com/in/leonardoscordeiro/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/leonardoscordeiro"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 hover:text-black hover:border-black hover:shadow-md transition-all"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Porto Alegre, RS • Brasil</span>
          </div>
        </div>

      </div>
    </div>
  );
}