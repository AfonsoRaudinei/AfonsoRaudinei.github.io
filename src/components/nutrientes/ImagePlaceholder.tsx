import { Image, Camera } from "lucide-react";

interface ImagePlaceholderProps {
  title: string;
  description?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
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

  return (
    <figure className={`rounded-2xl overflow-hidden shadow-lg ${className}`}>
      <div
        className={`relative ${aspectRatioClasses[aspectRatio]} bg-gradient-to-br from-muted/80 to-muted flex flex-col items-center justify-center gap-3 border-2 border-dashed border-muted-foreground/20`}
      >
        <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
          <Camera className="w-8 h-8 text-muted-foreground/50" />
        </div>
        <div className="text-center px-4">
          <p className="text-muted-foreground/70 text-sm font-medium">{title}</p>
          {description && (
            <p className="text-muted-foreground/50 text-xs mt-1 max-w-[200px]">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="bg-muted/50 backdrop-blur-sm p-3 text-center border-t border-muted-foreground/10">
        <p className="text-muted-foreground text-xs flex items-center justify-center gap-1.5">
          <Image className="w-3.5 h-3.5" />
          Espaço para imagem ilustrativa
        </p>
      </div>
    </figure>
  );
};

interface ImageGridProps {
  images: Array<{
    title: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
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
    <div className={`grid ${columnClasses[columns]} gap-4`}>
      {images.map((image, index) => (
        <ImagePlaceholder
          key={index}
          title={image.title}
          description={image.description}
          imageSrc={image.imageSrc}
          imageAlt={image.imageAlt}
          aspectRatio={aspectRatio}
        />
      ))}
    </div>
  );
};

export default ImagePlaceholder;
