interface BoxInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  maxLength?: number;
}

export const BoxInput = ({
  placeholder,
  value,
  onChange,
  className = '',
  maxLength,
}: BoxInputProps) => (
  <input
    type="text"
    className={`box-input ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    maxLength={maxLength}
  />
);
