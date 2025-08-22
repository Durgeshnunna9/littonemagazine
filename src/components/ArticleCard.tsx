
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  date,
  featured = false
}) => {
  return (
    <Link to={`/article/${id}`} className="group">
      <article className={`card-luxury ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`card-luxury-image ${featured ? 'h-96' : ''}`}
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className={`font-luxury font-semibold mb-3 group-hover:text-accent transition-colors duration-300 ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {title}
          </h3>
          
          <p className={`text-muted-foreground mb-4 line-clamp-3 ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <User size={14} />
                {author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {date}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
