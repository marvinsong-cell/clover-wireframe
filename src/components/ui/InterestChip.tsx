interface InterestChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const InterestChip = ({ label, selected, onClick }: InterestChipProps) => (
  <div
    className={`interest-chip ${selected ? 'selected' : ''}`}
    onClick={onClick}
  >
    {label}
  </div>
);
