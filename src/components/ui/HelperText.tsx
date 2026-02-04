import type { ReactNode } from 'react';

interface HelperTextProps {
  children: ReactNode;
}

export const HelperText = ({ children }: HelperTextProps) => (
  <p className="helper-text">{children}</p>
);
