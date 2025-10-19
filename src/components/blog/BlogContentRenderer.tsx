import React from 'react';
import type { BlogContent } from '../../data/blogData';
import { BlogSubtitle } from './BlogSubtitle';
import { BlogHeading } from './BlogHeading';
import { BlogParagraph } from './BlogParagraph';
import { BlogList } from './BlogList';
import { BlogQuote } from './BlogQuote';
import { BlogCode } from './BlogCode';
import { BlogVideo } from './BlogVideo';
import { BlogImage } from './BlogImage';
import { BlogTable } from './BlogTable';
import { BlogComparisonTable } from './BlogComparisonTable';

interface BlogContentRendererProps {
  content: BlogContent[];
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  let headingIndex = 0;

  return (
    <>
      {content.map((item, index) => {
        switch (item.type) {
          case 'subtitle':
            return <BlogSubtitle key={index} content={item.content as string} />;

          case 'heading': {
            const id = item.level === 2 ? `section-${headingIndex++}` : undefined;
            return (
              <BlogHeading 
                key={index}
                content={item.content as string}
                level={item.level || 2}
                id={id}
              />
            );
          }

          case 'paragraph':
            return <BlogParagraph key={index} content={item.content as string} />;

          case 'list':
            return <BlogList key={index} items={item.content as string[]} />;

          case 'quote':
            return (
              <BlogQuote 
                key={index}
                content={item.content as string}
                author={item.author}
                role={item.role}
              />
            );

          case 'code':
            return (
              <BlogCode 
                key={index}
                content={item.content as string}
                language={item.language}
              />
            );

          case 'video':
            return (
              <BlogVideo 
                key={index}
                videoId={(item.content as string) || item.videoId || ''}
                caption={item.caption}
              />
            );

          case 'image':
            return (
              <BlogImage 
                key={index}
                src={item.content as string}
                alt={item.alt}
                caption={item.caption}
              />
            );

          case 'table':
            return (
              <BlogTable
                key={index}
                headers={item.headers || []}
                rows={item.rows || []}
                caption={item.caption}
              />
            );

          case 'comparison':
            return (
              <BlogComparisonTable
                key={index}
                leftLabel={item.leftLabel || 'Before'}
                rightLabel={item.rightLabel || 'After'}
                rows={item.comparisonRows || []}
                caption={item.caption}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}