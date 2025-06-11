import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";
import { items } from "@/data";

function ProjectGrid() { 

  return (
      <BentoGrid className="max-w-4xl mx-auto">
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
  )
}

export default ProjectGrid