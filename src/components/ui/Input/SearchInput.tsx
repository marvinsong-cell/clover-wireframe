import { Icons } from '../Icons';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => (
  <div className="search-input-wrapper">
    <input
      type="text"
      className="search-input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <span className="search-icon">
      <Icons.Search />
    </span>
  </div>
);
