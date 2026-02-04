/**
 * 클로버 회원가입 와이어프레임 v3
 *
 * v1 플로우 유지:
 * 1. 온보딩 (3단계 슬라이드)
 * 2. 휴대폰 인증
 * 3. 기본 정보 (8단계)
 * 4. 클로버 정보 (5단계)
 * 5. 약관 동의
 * 6. 가입 완료
 *
 * + v2 UI 스타일 적용
 */

const App = () => {
  const [currentScreen, setCurrentScreen] = React.useState('onboarding');
  const [userData, setUserData] = React.useState({
    phone: null,
    basicInfo: null,
    cloverInfo: null,
    agreements: null
  });
  const [showCloverModal, setShowCloverModal] = React.useState(false);

  // 플로우 핸들러 (v1 순서 유지)
  const handleOnboardingComplete = () => setCurrentScreen('phoneAuth');

  const handlePhoneAuthComplete = (data) => {
    setUserData(prev => ({ ...prev, phone: data.phone }));
    setCurrentScreen('basicInfo');
  };

  const handleBasicInfoComplete = (data) => {
    setUserData(prev => ({ ...prev, basicInfo: data }));
    setCurrentScreen('cloverInfo');
  };

  const handleCloverInfoComplete = (data) => {
    setUserData(prev => ({ ...prev, cloverInfo: data }));
    setCurrentScreen('agreement');
  };

  const handleAgreementComplete = (checkedIds) => {
    setUserData(prev => ({ ...prev, agreements: checkedIds }));
    setCurrentScreen('complete');
    console.log('가입 완료:', userData);
  };

  const handleComplete = () => {
    setShowCloverModal(true);
  };

  const handleBack = (target) => setCurrentScreen(target);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
      case 'phoneAuth':
        return <PhoneAuthScreen onComplete={handlePhoneAuthComplete} onBack={() => handleBack('onboarding')} />;
      case 'basicInfo':
        return <BasicInfoScreen onComplete={handleBasicInfoComplete} onBack={() => handleBack('phoneAuth')} />;
      case 'cloverInfo':
        return <CloverInfoScreen onComplete={handleCloverInfoComplete} onBack={() => handleBack('basicInfo')} />;
      case 'agreement':
        return <AgreementScreen onComplete={handleAgreementComplete} onBack={() => handleBack('cloverInfo')} />;
      case 'complete':
        return <CompleteScreen onConfirm={handleComplete} />;
      default:
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
    }
  };

  return (
    <div className="mobile-frame">
      {renderScreen()}
      {showCloverModal && (
        <CloverUI.CloverCompleteModal
          cloverCount={4}
          onClose={() => {
            setShowCloverModal(false);
            setCurrentScreen('onboarding');
            setUserData({ phone: null, basicInfo: null, cloverInfo: null, agreements: null });
          }}
        />
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
