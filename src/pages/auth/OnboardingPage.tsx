import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomButton } from '@/components/ui/Button/BottomButton';

interface Slide {
  icon: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    icon: '🍀',
    title: '진짜 연결,\n클로버에서 시작하세요',
    description: '검증된 프로필로 신뢰할 수 있는\n만남을 제공합니다.'
  },
  {
    icon: '✨',
    title: '당신만의 클로버를\n완성하세요',
    description: '직업, 학력, 자산, 외모, 성격\n5가지 영역으로 나를 표현해요.'
  },
  {
    icon: '💚',
    title: '비슷한 사람과\n매칭되세요',
    description: '클로버 기반 매칭으로\n진지한 만남이 시작됩니다.'
  }
];

export const OnboardingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="screen">
      <div className="screen-content center">
        <div className="onboarding-slide fade-in" key={currentSlide}>
          <div className="onboarding-image">{slides[currentSlide].icon}</div>
          <h1 className="page-title pre-line mb-12">{slides[currentSlide].title}</h1>
          <p className="text-secondary pre-line">{slides[currentSlide].description}</p>
          <div className="onboarding-dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`onboarding-dot ${i === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomButton
        text={currentSlide < slides.length - 1 ? '다음' : '시작하기'}
        isActive={true}
        onClick={handleNext}
      />
    </div>
  );
};

export default OnboardingPage;
