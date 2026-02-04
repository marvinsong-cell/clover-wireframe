import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, BottomButton, AgreementList } from '@/components/ui';

export const AgreementPage = () => {
  const navigate = useNavigate();
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const agreements = [
    { id: 'service', label: '서비스 이용 약관', required: true },
    { id: 'privacy', label: '개인정보 수집·이용', required: true },
    { id: 'sensitive', label: '민감정보 처리', required: true },
    { id: 'age', label: '만 19세 이상 확인', required: true },
    { id: 'marketing', label: '마케팅 수신', required: false },
    { id: 'push', label: '푸시 알림', required: false },
  ];

  const requiredIds = agreements.filter((a) => a.required).map((a) => a.id);
  const isAllRequiredChecked = requiredIds.every((id) =>
    checkedIds.includes(id)
  );

  const handleBack = () => {
    navigate('/signup/clover-info');
  };

  const handleNext = () => {
    navigate('/signup/complete');
  };

  return (
    <div className="screen">
      <Header title="약관 동의" onBack={handleBack} />
      <div className="screen-content">
        <div className="slide-up">
          <h2 className="question-title">
            서비스 이용약관에
            <br />
            동의해주세요.
          </h2>
          <AgreementList
            agreements={agreements}
            checkedIds={checkedIds}
            onChange={setCheckedIds}
          />
        </div>
      </div>
      <BottomButton
        text="다음"
        isActive={isAllRequiredChecked}
        onClick={handleNext}
      />
    </div>
  );
};
