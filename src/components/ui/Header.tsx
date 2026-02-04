import { Icons } from './Icons';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
  showBack?: boolean;
}

export const Header = ({ title, onBack, showBack = true }: HeaderProps) => (
  <header className="header">
    {showBack ? (
      <button className="header-back" onClick={onBack}>
        <Icons.Back />
      </button>
    ) : (
      <div className="header-spacer" />
    )}
    {title && <h1 className="header-title">{title}</h1>}
  </header>
);
