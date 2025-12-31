// src/components/TechBadge.tsx
interface TechBadgeProps {
  name: string;
  icon: string;
  category: string;
  color: string;
}

export function TechBadge({ name, icon, category, color }: TechBadgeProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur transition-all group-hover:opacity-40" />
      <div className="relative flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm border">
        <div className="text-2xl">{icon}</div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{category}</div>
        </div>
      </div>
    </div>
  );
}