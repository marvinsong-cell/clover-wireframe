import { useNavigate } from 'react-router-dom';
import { BottomButton } from '@/components/ui';

export const CompletePage = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // 완료 후 메인 화면으로 이동 (추후 구현)
    navigate('/');
  };

  return (
    <div className="screen">
      <div className="screen-content center">
        <div className="slide-up">
          <div className="complete-icon">🍀</div>
          <h1 className="complete-title">가입 신청이 완료되었어요</h1>
          <p className="complete-desc">
            입력하신 정보를 검토 중이에요.
            <br />
            승인이 완료되면 알림을 보내드릴게요.
          </p>
          <div className="complete-info-box">
            <h4>📋 심사 안내</h4>
            <ul>
              <li>심사는 보통 1-2일 소요됩니다.</li>
              <li>
                입력하신 정보를 바탕으로 클로버 잎 개수가 산출됩니다.
              </li>
              <li>승인 완료 후 프로필에서 확인하실 수 있어요.</li>
            </ul>
          </div>
        </div>
      </div>
      <BottomButton text="확인" isActive={true} onClick={handleConfirm} />
    </div>
  );
};
