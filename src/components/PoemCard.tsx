
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

interface PoemCardProps {
  id: string;
  poet: string;
  image: string;
  category: string;
  date: string;
  readTime?: string;
  featured?: boolean;
}

const PoemCard: React.FC<PoemCardProps> = ({
  id,
  poet,
  image,
  category,
  date,
  readTime,
  featured = false
}) => {
  return (
    <Link to={`/poem/${id}`} className="group block">
      <article className={`card-luxury h-full ${featured ? 'md:h-auto' : ''} opacity-100`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={poet}
            className={`card-luxury-image ${featured ? 'h-96 md:h-[500px]' : 'h-64'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider rounded-full">
              {category}
            </span>
          </div>

          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-medium uppercase tracking-wider rounded-full">
                Featured
              </span>
            </div>
          )}

          {/* Hover overlay with read more */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
              Read More
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
        
        <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
          <h3 className={`font-luxury font-semibold mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2 ${
            featured ? 'text-2xl md:text-3xl leading-tight' : 'text-xl'
          }`}>
            {poet}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <User size={14} />
                {poet}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {date}
              </span>
              {readTime && (
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {readTime}
                </span>
              )}
            </div>
            
            {featured && (
              <div className="text-accent text-sm font-medium">
                Editor's Pick
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PoemCard;
