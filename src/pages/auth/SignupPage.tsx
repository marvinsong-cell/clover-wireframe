import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="screen-content center">
        <div className="slide-up">
          <div style={{ fontSize: '60px', marginBottom: '24px' }}>🚧</div>
          <h1 className="page-title mb-12">회원가입 준비 중</h1>
          <p className="text-secondary mb-24">
            곧 서비스가 오픈됩니다.<br/>
            조금만 기다려주세요!
          </p>
          <button
            className="btn-secondary"
            onClick={() => navigate('/')}
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
