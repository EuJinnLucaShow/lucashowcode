import { gridItems } from "@/db";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({ id, title, description, className }) => (
          <BentoGridItem
            key={id}
            title={title}
            description={description}
            className={className}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
