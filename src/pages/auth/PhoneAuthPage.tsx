import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  BottomButton,
  BorderInput,
  HelperText,
} from '@/components/ui';

export const PhoneAuthPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'verify'>('phone');
  const [phone, setPhone] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [timer, setTimer] = useState(180);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const formatPhone = (v: string) => {
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
    if (verifyCode.length === 6) {
      navigate('/signup/basic-info');
    }
  };

  const handleBack = () => {
    if (step === 'verify') {
      setStep('phone');
    } else {
      navigate('/onboarding');
    }
  };

  if (step === 'phone') {
    return (
      <div className="screen">
        <Header title="휴대폰 인증" onBack={handleBack} />
        <div className="screen-content">
          <div className="slide-up">
            <h2 className="question-title">
              휴대폰 번호를
              <br />
              알려주세요.
            </h2>
            <BorderInput
              placeholder="010-0000-0000"
              value={phone}
              onChange={(v) => setPhone(formatPhone(v))}
              type="tel"
            />
          </div>
        </div>
        <BottomButton
          text="인증번호 받기"
          isActive={phone.replace(/[^\d]/g, '').length === 11}
          onClick={handleSendCode}
        />
      </div>
    );
  }

  return (
    <div className="screen">
      <Header title="휴대폰 인증" onBack={() => setStep('phone')} />
      <div className="screen-content">
        <div className="slide-up">
          <h2 className="question-title">
            인증번호를
            <br />
            입력해주세요.
          </h2>
          <div className="mb-16">
            <BorderInput
              placeholder="000000"
              value={verifyCode}
              onChange={(v) =>
                setVerifyCode(v.replace(/[^\d]/g, '').slice(0, 6))
              }
              type="tel"
            />
          </div>
          <div className="flex-between">
            <HelperText>
              {timer > 0
                ? `${formatTime(timer)} 안에 입력해주세요`
                : '인증시간 만료'}
            </HelperText>
            <button
              className="btn-secondary"
              onClick={() => {
                setTimer(180);
                setIsTimerActive(true);
                setVerifyCode('');
              }}
            >
              재발송
            </button>
          </div>
        </div>
      </div>
      <BottomButton
        text="다음"
        isActive={verifyCode.length === 6 && timer > 0}
        onClick={handleVerify}
      />
    </div>
  );
};
