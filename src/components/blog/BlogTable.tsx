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
      <div className="overflow-x-auto my-8 rounded-xl border border-brand-neutral-300">
        <table className="w-full border-collapse">
          <thead className="bg-brand-card-blue">
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="p-4 text-left text-brand-neutral-900 border-b-2 border-brand-neutral-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-brand-accent/5">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-3.5 px-4 text-brand-neutral-700 border-b border-brand-neutral-300 last:border-b-0">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="text-center text-brand-neutral-500 mt-3 italic">{caption}</p>
      )}
    </div>
  );
}