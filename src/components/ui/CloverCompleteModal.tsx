interface CloverCompleteModalProps {
  cloverCount: number;
  onClose: () => void;
}

export const CloverCompleteModal = ({
  cloverCount,
  onClose,
}: CloverCompleteModalProps) => (
  <div className="modal-overlay">
    <div className="modal-content slide-up">
      <div className="modal-icon">🍀</div>
      <h2 className="modal-title">클로버가 완성되었어요!</h2>
      <p className="modal-description">
        {cloverCount}잎 클로버로
        <br />
        진지한 만남을 시작해보세요.
      </p>
      <button className="modal-button" onClick={onClose}>
        내 프로필 보기
      </button>
    </div>
  </div>
);
