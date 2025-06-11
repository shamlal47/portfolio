import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";
import { items } from "@/data";

function ProjectGrid() { 

  return (
    <div>
      <span className="text-2xl sm:text-6xl font-bold text-center block mb-8 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-2">Projects</span>
      <BentoGrid className="max-w-4xl mx-auto py-8">
        {items.map((item, i) => (
          <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default ProjectGrid