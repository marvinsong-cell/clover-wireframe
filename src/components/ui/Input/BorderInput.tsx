interface BorderInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  large?: boolean;
  maxLength?: number;
}

export const BorderInput = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  large = false,
  maxLength,
}: BorderInputProps) => (
  <input
    type={type}
    className={`border-input ${large ? 'large' : ''}`}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    maxLength={maxLength}
  />
);
