interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => (
  <div className="progress-container">
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
    <p className="progress-text">{current} / {total}</p>
  </div>
);
