import React from 'react';

interface ComparisonRow {
  feature: string;
  old: string;
  new: string;
}

interface BlogComparisonTableProps {
  leftLabel: string;
  rightLabel: string;
  rows: ComparisonRow[];
  caption?: string;
}

export function BlogComparisonTable({ leftLabel, rightLabel, rows, caption }: BlogComparisonTableProps) {
  return (
    <div>
      <div className="blog-comparison-table-wrapper">
        <table className="blog-comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>{leftLabel}</th>
              <th>{rightLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="comparison-feature">{row.feature}</td>
                <td className="comparison-old">{row.old}</td>
                <td className="comparison-new">{row.new}</td>
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
