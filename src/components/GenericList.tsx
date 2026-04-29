import { ReactNode } from 'react';

interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  emptyMessage?: string;
  className?: string;
}

export const GenericList = <T,>({ 
  items, 
  renderItem, 
  emptyMessage = "No items found.", 
  className 
}: GenericListProps<T>) => {
  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};
