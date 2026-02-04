interface BorderTextareaProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  minLength?: number;
  maxLength?: number;
}

export const BorderTextarea = ({
  placeholder,
  value,
  onChange,
  minLength = 0,
  maxLength,
}: BorderTextareaProps) => (
  <div>
    <textarea
      className="border-textarea"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={maxLength}
    />
    <p className={`char-counter ${value.length >= minLength ? 'valid' : ''}`}>
      {value.length}/{maxLength || '∞'} {minLength > 0 && `(최소 ${minLength}자)`}
    </p>
  </div>
);
