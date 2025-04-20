import { useState } from 'react';

const Table = ({
  columns = [],
  data = [],
  loading = false,
  emptyText = 'No data available',
  striped = true,
  hoverable = true,
  bordered = false,
  compact = false,
  hasActions = false,
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
  containerClassName = '',
  pagination = null,
}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if (!column.sortable) return;
    
    if (sortColumn === column.key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column.key);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column) => {
    if (!column.sortable) return null;
    
    if (sortColumn !== column.key) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    
    return sortDirection === 'asc' ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  const tableClasses = `min-w-full divide-y divide-gray-200 ${containerClassName}`;
  const thClasses = `
    px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
    ${headerClassName}
  `;
  const tdClasses = `
    px-6 py-4 text-sm text-gray-500
    ${cellClassName}
  `;
  
  const trClasses = `
    ${striped ? 'even:bg-gray-50' : ''}
    ${hoverable ? 'hover:bg-gray-100' : ''}
    ${bordered ? 'border-b border-gray-200' : ''}
    ${compact ? 'h-10' : ''}
    ${rowClassName}
  `;

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center p-8 text-gray-500">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className={tableClasses}>
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`${thClasses} ${column.headerClassName || ''} 
                  ${column.sortable ? 'cursor-pointer' : ''}`}
                onClick={column.sortable ? () => handleSort(column) : undefined}
                style={{ width: column.width }}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.title}</span>
                  {column.sortable && (
                    <span className="ml-1">{getSortIcon(column)}</span>
                  )}
                </div>
              </th>
            ))}
            {hasActions && <th scope="col" className={thClasses}>Actions</th>}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex} className={trClasses}>
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.key}`}
                  className={`${tdClasses} ${column.cellClassName || ''}`}
                >
                  {column.render
                    ? column.render(row[column.key], row, rowIndex)
                    : row[column.key]}
                </td>
              ))}
              {hasActions && (
                <td className={tdClasses}>
                  {row.actions || null}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      
      {pagination && (
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          {pagination}
        </div>
      )}
    </div>
  );
};

export default Table; 