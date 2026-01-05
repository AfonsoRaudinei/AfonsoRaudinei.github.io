import { FlaskConical, Beaker, Droplets, Atom, LucideIcon } from "lucide-react";

interface ImagePlaceholderProps {
  title: string;
  description?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: LucideIcon;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  portrait: "aspect-[3/4]",
};

export const ImagePlaceholder = ({
  title,
  description,
  aspectRatio = "video",
  className = "",
  imageSrc,
  imageAlt,
  icon: Icon = FlaskConical,
}: ImagePlaceholderProps) => {
  if (imageSrc) {
    return (
      <figure className={`rounded-2xl overflow-hidden shadow-lg ${className}`}>
        <div className={`relative ${aspectRatioClasses[aspectRatio]}`}>
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="bg-muted/50 backdrop-blur-sm p-4 text-center">
          <p className="font-semibold text-foreground text-sm">{title}</p>
          {description && (
            <p className="text-muted-foreground text-xs mt-1">{description}</p>
          )}
        </figcaption>
      </figure>
    );
  }

  // Show compact icon card instead of placeholder
  return (
    <div className={`rounded-xl bg-gradient-to-br from-muted/60 to-muted/30 p-4 flex items-center gap-4 border border-border/50 ${className}`}>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="font-medium text-foreground text-sm truncate">{title}</p>
        {description && (
          <p className="text-muted-foreground text-xs mt-0.5 line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
};

interface FertilizanteCardProps {
  nome: string;
  formula: string;
  percentual: string;
  descricao?: string;
  icon?: LucideIcon;
}

export const FertilizanteCard = ({
  nome,
  formula,
  percentual,
  descricao,
  icon: Icon = Beaker,
}: FertilizanteCardProps) => {
  return (
    <div className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-foreground text-sm">{nome}</h4>
          <p className="text-muted-foreground text-xs">{formula}</p>
          <p className="text-primary font-bold text-lg mt-1">{percentual}</p>
          {descricao && (
            <p className="text-muted-foreground text-[10px] uppercase mt-0.5">{descricao}</p>
          )}
        </div>
      </div>
    </div>
  );
};

interface ImageGridProps {
  images: Array<{
    title: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    icon?: LucideIcon;
  }>;
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
}

export const ImageGrid = ({
  images,
  columns = 2,
  aspectRatio = "video",
}: ImageGridProps) => {
  const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-3`}>
      {images.map((image, index) => (
        <ImagePlaceholder
          key={index}
          title={image.title}
          description={image.description}
          imageSrc={image.imageSrc}
          imageAlt={image.imageAlt}
          aspectRatio={aspectRatio}
          icon={image.icon}
        />
      ))}
    </div>
  );
};

export default ImagePlaceholder;
