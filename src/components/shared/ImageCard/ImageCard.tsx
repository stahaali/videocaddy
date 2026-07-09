import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { cn } from "@/lib/cn";

interface ImageCardProps {
  title: string;
  image: string;
  href?: string;
  showPlayIcon?: boolean;
  showReadMore?: boolean;
  className?: string;
}

export default function ImageCard({
  title,
  image,
  href = "#",
  showPlayIcon = false,
  showReadMore = true,
  className = "",
}: ImageCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-sm bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
        {showPlayIcon && (
          <Image
            src={assets.icons.play}
            alt=""
            width={40}
            height={40}
            className="absolute top-1/2 left-1/2 z-[2] h-10 w-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="absolute right-0 bottom-0 left-0 z-[2] p-4">
        <h3 className="mb-1 font-heading text-[13px] font-semibold leading-snug text-white">
          {title}
        </h3>
        {showReadMore && (
          <span className="text-xs font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Read more →
          </span>
        )}
      </div>
    </Link>
  );
}
