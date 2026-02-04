interface Option {
  value: string;
  label: string;
  icon?: string;
  description?: string;
}

interface CardOptionGridProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export const CardOptionGrid = ({ options, value, onChange }: CardOptionGridProps) => (
  <div className="card-option-grid">
    {options.map((opt) => (
      <div
        key={opt.value}
        className={`card-option ${value === opt.value ? 'selected' : ''}`}
        onClick={() => onChange(opt.value)}
      >
        {opt.icon && <div className="card-option-icon">{opt.icon}</div>}
        <div className="card-option-title">{opt.label}</div>
        {opt.description && <div className="card-option-desc">{opt.description}</div>}
      </div>
    ))}
  </div>
);
