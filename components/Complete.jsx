/**
 * 약관 동의 + 가입 완료 화면 (v1 플로우 + v3 UI)
 */

const AgreementScreen = ({ onComplete, onBack }) => {
  const [checkedIds, setCheckedIds] = React.useState([]);

  const agreements = [
    { id: 'service', label: '서비스 이용 약관', required: true },
    { id: 'privacy', label: '개인정보 수집·이용', required: true },
    { id: 'sensitive', label: '민감정보 처리', required: true },
    { id: 'age', label: '만 19세 이상 확인', required: true },
    { id: 'marketing', label: '마케팅 수신', required: false },
    { id: 'push', label: '푸시 알림', required: false }
  ];

  const requiredIds = agreements.filter(a => a.required).map(a => a.id);
  const isAllRequiredChecked = requiredIds.every(id => checkedIds.includes(id));

  return (
    <div className="screen">
      <CloverUI.Header title="약관 동의" onBack={onBack} />
      <div className="screen-content">
        <div className="slide-up">
          <h2 className="question-title">서비스 이용약관에<br/>동의해주세요.</h2>
          <CloverUI.AgreementList
            agreements={agreements}
            checkedIds={checkedIds}
            onChange={setCheckedIds}
          />
        </div>
      </div>
      <CloverUI.BottomButton text="다음" isActive={isAllRequiredChecked} onClick={() => onComplete(checkedIds)} />
    </div>
  );
};

const CompleteScreen = ({ onConfirm }) => (
  <div className="screen">
    <div className="screen-content center">
      <div className="slide-up">
        <div className="complete-icon">🍀</div>
        <h1 className="complete-title">가입 신청이 완료되었어요</h1>
        <p className="complete-desc">입력하신 정보를 검토 중이에요.<br/>승인이 완료되면 알림을 보내드릴게요.</p>
        <div className="complete-info-box">
          <h4>📋 심사 안내</h4>
          <ul>
            <li>심사는 보통 1-2일 소요됩니다.</li>
            <li>입력하신 정보를 바탕으로 클로버 잎 개수가 산출됩니다.</li>
            <li>승인 완료 후 프로필에서 확인하실 수 있어요.</li>
          </ul>
        </div>
      </div>
    </div>
    <CloverUI.BottomButton text="확인" isActive={true} onClick={onConfirm} />
  </div>
);

const CloverCompleteModal = ({ cloverCount, onClose }) => (
  <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
    <div style={{ width: '320px', background: 'white', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }} className="slide-up">
      <div style={{ fontSize: '80px', marginBottom: '16px' }}>🍀</div>
      <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>클로버가 완성되었어요!</h2>
      <p style={{ fontSize: '15px', color: '#a09f9f', marginBottom: '24px' }}>{cloverCount}잎 클로버로<br/>진지한 만남을 시작해보세요.</p>
      <button className="btn-primary active" style={{ width: '100%', height: '56px', borderRadius: '4px', border: 'none', background: '#000', color: '#fff', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }} onClick={onClose}>
        내 프로필 보기
      </button>
    </div>
  </div>
);

window.AgreementScreen = AgreementScreen;
window.CompleteScreen = CompleteScreen;
window.CloverCompleteModal = CloverCompleteModal;
