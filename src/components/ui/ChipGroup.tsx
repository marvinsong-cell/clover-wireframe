interface Option {
  value: string;
  label: string;
}

interface ChipGroupProps {
  options: Option[];
  values?: string[];
  onChange: (values: string[]) => void;
  maxSelect?: number;
}

export const ChipGroup = ({
  options,
  values = [],
  onChange,
  maxSelect = Infinity,
}: ChipGroupProps) => {
  const handleClick = (val: string) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else if (values.length < maxSelect) {
      onChange([...values, val]);
    }
  };

  return (
    <div className="chip-group">
      {options.map((opt) => (
        <span
          key={opt.value}
          className={`chip ${values.includes(opt.value) ? 'selected' : ''}`}
          onClick={() => handleClick(opt.value)}
        >
          {opt.label}
        </span>
      ))}
    </div>
  );
};
