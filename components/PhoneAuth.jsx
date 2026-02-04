/**
 * 휴대폰 인증 화면 (v1 플로우 + v3 UI)
 */
const PhoneAuthScreen = ({ onComplete, onBack }) => {
  const [step, setStep] = React.useState('phone');
  const [phone, setPhone] = React.useState('');
  const [verifyCode, setVerifyCode] = React.useState('');
  const [timer, setTimer] = React.useState(180);
  const [isTimerActive, setIsTimerActive] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) interval = setInterval(() => setTimer(t => t - 1), 1000);
    else if (timer === 0) setIsTimerActive(false);
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  const formatPhone = (v) => {
    const n = v.replace(/[^\d]/g, '');
    if (n.length <= 3) return n;
    if (n.length <= 7) return `${n.slice(0, 3)}-${n.slice(3)}`;
    return `${n.slice(0, 3)}-${n.slice(3, 7)}-${n.slice(7, 11)}`;
  };

  const handleSendCode = () => {
    if (phone.replace(/[^\d]/g, '').length === 11) {
      setStep('verify');
      setTimer(180);
      setIsTimerActive(true);
    }
  };

  const handleVerify = () => {
    if (verifyCode.length === 6) onComplete({ phone, isNewUser: true });
  };

  if (step === 'phone') {
    return (
      <div className="screen">
        <CloverUI.Header title="휴대폰 인증" onBack={onBack} />
        <div className="screen-content">
          <div className="slide-up">
            <h2 className="question-title">휴대폰 번호를<br/>알려주세요.</h2>
            <CloverUI.BorderInput
              placeholder="010-0000-0000"
              value={phone}
              onChange={(v) => setPhone(formatPhone(v))}
              type="tel"
            />
          </div>
        </div>
        <CloverUI.BottomButton text="인증번호 받기" isActive={phone.replace(/[^\d]/g, '').length === 11} onClick={handleSendCode} />
      </div>
    );
  }

  return (
    <div className="screen">
      <CloverUI.Header title="휴대폰 인증" onBack={() => setStep('phone')} />
      <div className="screen-content">
        <div className="slide-up">
          <h2 className="question-title">인증번호를<br/>입력해주세요.</h2>
          <div style={{ marginBottom: '16px' }}>
            <CloverUI.BorderInput
              placeholder="000000"
              value={verifyCode}
              onChange={(v) => setVerifyCode(v.replace(/[^\d]/g, '').slice(0, 6))}
              type="tel"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <CloverUI.HelperText>{timer > 0 ? `${formatTime(timer)} 안에 입력해주세요` : '인증시간 만료'}</CloverUI.HelperText>
            <button className="btn-secondary" onClick={() => { setTimer(180); setIsTimerActive(true); setVerifyCode(''); }}>재발송</button>
          </div>
        </div>
      </div>
      <CloverUI.BottomButton text="다음" isActive={verifyCode.length === 6 && timer > 0} onClick={handleVerify} />
    </div>
  );
};

window.PhoneAuthScreen = PhoneAuthScreen;
