interface Option {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  placeholder?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export const SelectDropdown = ({
  placeholder,
  options,
  value,
  onChange,
}: SelectDropdownProps) => (
  <select
    className="select-dropdown"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    <option value="">{placeholder}</option>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);
