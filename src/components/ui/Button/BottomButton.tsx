interface BottomButtonProps {
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const BottomButton = ({
  text = "다음",
  isActive = false,
  onClick
}: BottomButtonProps) => (
  <div className="bottom-fixed">
    <button
      className={`btn-primary ${isActive ? 'active' : 'inactive'}`}
      onClick={isActive ? onClick : undefined}
      disabled={!isActive}
    >
      {text}
    </button>
  </div>
);
