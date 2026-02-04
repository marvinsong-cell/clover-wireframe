import { Icons } from './Icons';

interface Option {
  value: string;
  label: string;
}

interface SelectionListProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export const SelectionList = ({ options, value, onChange }: SelectionListProps) => (
  <div className="selection-list">
    {options.map((opt) => (
      <div
        key={opt.value}
        className={`selection-item ${value === opt.value ? 'selected' : ''}`}
        onClick={() => onChange(opt.value)}
      >
        <span className="text">{opt.label}</span>
        <span className="check-icon">
          <Icons.Check />
        </span>
      </div>
    ))}
  </div>
);
