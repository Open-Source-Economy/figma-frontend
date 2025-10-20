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
      <div className="overflow-x-auto my-8 rounded-xl border border-brand-neutral-300">
        <table className="w-full border-collapse">
          <thead className="bg-brand-card-blue">
            <tr>
              <th className="w-[35%] p-4 text-left text-brand-neutral-900 border-b-2 border-brand-neutral-300">Feature</th>
              <th className="p-4 text-left text-brand-neutral-900 border-b-2 border-brand-neutral-300">{leftLabel}</th>
              <th className="p-4 text-left text-brand-neutral-900 border-b-2 border-brand-neutral-300">{rightLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="py-3.5 px-4 text-brand-neutral-800 border-b border-brand-neutral-300 last:border-b-0 align-top">
                  {row.feature}
                </td>
                <td className="py-3.5 px-4 text-brand-neutral-700 border-b border-brand-neutral-300 last:border-b-0 align-top bg-brand-error/5 border-l-3 border-l-brand-error">
                  {row.old}
                </td>
                <td className="py-3.5 px-4 text-brand-neutral-700 border-b border-brand-neutral-300 last:border-b-0 align-top bg-brand-success/5 border-l-3 border-l-brand-success">
                  {row.new}
                </td>
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
