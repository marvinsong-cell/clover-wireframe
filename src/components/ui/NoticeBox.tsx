import type { ReactNode } from 'react';

interface NoticeBoxProps {
  children: ReactNode;
}

export const NoticeBox = ({ children }: NoticeBoxProps) => (
  <div className="notice-box">
    <p>{children}</p>
  </div>
);
