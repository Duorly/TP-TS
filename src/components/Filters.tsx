interface FiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  showOnlyAvailable: boolean;
  onToggleAvailable: (show: boolean) => void;
}

export const Filters = ({ searchQuery, onSearchChange, showOnlyAvailable, onToggleAvailable }: FiltersProps) => {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 300px' }}>
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => onSearchChange(e.target.value)} 
          placeholder="Search books..."
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input 
          type="checkbox" 
          id="available-only"
          checked={showOnlyAvailable} 
          onChange={(e) => onToggleAvailable(e.target.checked)}
          style={{ width: 'auto' }}
        />
        <label htmlFor="available-only" style={{ cursor: 'pointer', fontSize: '0.85rem' }}>
          Show available only
        </label>
      </div>
    </div>
  );
};
