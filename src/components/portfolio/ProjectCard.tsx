
import React from "react";

type Props = {
  name: string;
  img: string;
  brand: string;
  metric: string;
  summary: string;
  onClick: () => void;
};
const ProjectCard: React.FC<Props> = ({
  name,
  img,
  brand,
  metric,
  summary,
  onClick,
}) => (
  <button
    className="rounded-xl overflow-hidden glass-morphism hover:scale-105 transform transition group text-left flex flex-col shadow-lg"
    onClick={onClick}
    aria-label={`View details for ${name}`}
  >
    <img
      src={img}
      alt={brand}
      className="w-full h-44 object-cover group-hover:opacity-80 duration-200"
    />
    <div className="p-5 flex flex-col gap-2 flex-1">
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-bold">{name}</span>
        <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          {metric}
        </span>
      </div>
      <div className="text-white/70 text-sm">{summary}</div>
    </div>
  </button>
);

export default ProjectCard;
