import React from 'react';

interface BlogTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export function BlogTable({
  headers,
  rows,
  caption
}: BlogTableProps) {
  return (
    <div className="mb-8">
      <div className="blog-table-wrapper">
        <table className="blog-table">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="blog-caption">{caption}</p>
      )}
    </div>
  );
}