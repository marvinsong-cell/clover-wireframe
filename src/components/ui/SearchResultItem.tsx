interface SearchResultItemProps {
  mainText: string;
  subText?: string;
  selected?: boolean;
  onClick: () => void;
}

export const SearchResultItem = ({
  mainText,
  subText,
  selected,
  onClick,
}: SearchResultItemProps) => (
  <div
    className={`search-result-item ${selected ? 'selected' : ''}`}
    onClick={onClick}
  >
    <span className="main-text">{mainText}</span>
    {subText && <span className="sub-text">{subText}</span>}
  </div>
);
