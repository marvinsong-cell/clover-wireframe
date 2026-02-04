/**
 * 클로버 정보 입력 화면 (v1 플로우 5단계 + v3 UI)
 */
const CloverInfoScreen = ({ onComplete, onBack }) => {
  const [step, setStep] = React.useState(1);
  const totalSteps = 5;
  const [formData, setFormData] = React.useState({
    jobType: '', jobDetail: '',
    degree: '', educationGroup: '', schoolName: '',
    assetBase: '', assetLevel: '',
    height: '', photos: [],
    introduction: ''
  });

  const updateForm = (k, v) => setFormData(p => ({ ...p, [k]: v }));
  const handleNext = () => { if (step < totalSteps) setStep(step + 1); else onComplete(formData); };
  const handleBack = () => { if (step > 1) setStep(step - 1); else onBack(); };

  const isStepValid = () => {
    switch (step) {
      case 1: return formData.jobType && formData.jobDetail;
      case 2: return formData.degree && formData.educationGroup;
      case 3: return formData.assetBase && formData.assetLevel;
      case 4: return formData.height && formData.photos.length >= 2;
      case 5: return formData.introduction.length >= 50;
      default: return false;
    }
  };

  const jobTypeOptions = [
    { value: 'professional', label: '전문직', icon: '⚖️', description: '면허·자격 기반' },
    { value: 'employee', label: '직장인', icon: '💼', description: '기업 소속' },
    { value: 'public', label: '공무원', icon: '🏛️', description: '공공기관' },
    { value: 'business', label: '사업가', icon: '🏢', description: '사업·자영업' }
  ];

  const jobDetailOptions = {
    professional: [{ value: 'doctor', label: '의사' }, { value: 'lawyer', label: '변호사' }, { value: 'accountant', label: '회계사' }, { value: 'pharmacist', label: '약사' }],
    employee: [{ value: 'large', label: '대기업' }, { value: 'mid', label: '중견기업' }, { value: 'startup', label: '스타트업' }, { value: 'it', label: 'IT 기업' }, { value: 'finance', label: '금융권' }],
    public: [{ value: 'grade4', label: '4급 이상' }, { value: 'grade7', label: '7급' }, { value: 'grade9', label: '9급' }],
    business: [{ value: 'ceo', label: 'CEO' }, { value: 'startup_ceo', label: '스타트업 대표' }, { value: 'self', label: '자영업' }]
  };

  const educationGroupOptions = [
    { value: 'sky', label: 'SKY' },
    { value: 'kaist', label: 'KAIST·POSTECH' },
    { value: 'seoul_major', label: '주요 서울대' },
    { value: 'seoul_4yr', label: '서울 4년제' },
    { value: 'local', label: '지방 국립대' }
  ];

  const heightOptions = [];
  for (let h = 150; h <= 200; h++) heightOptions.push({ value: h.toString(), label: `${h}cm` });

  const stepTitles = ['직업', '학력', '자산', '외모', '성격'];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="slide-up">
            <h2 className="question-title">어떤 일을<br/>하시나요?</h2>
            <CloverUI.NoticeBox>입력하신 정보는 운영팀 검수 후 프로필에 노출됩니다.</CloverUI.NoticeBox>
            <div className="mt-24 mb-24">
              <p className="section-label-bold">직업 유형</p>
              <CloverUI.CardOptionGrid
                options={jobTypeOptions}
                value={formData.jobType}
                onChange={(v) => { updateForm('jobType', v); updateForm('jobDetail', ''); }}
              />
            </div>
            {formData.jobType && (
              <div>
                <p className="section-label-bold">세부 직업</p>
                <CloverUI.SelectDropdown
                  placeholder="세부 직업 선택"
                  options={jobDetailOptions[formData.jobType] || []}
                  value={formData.jobDetail}
                  onChange={(v) => updateForm('jobDetail', v)}
                />
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="slide-up">
            <h2 className="question-title">학력 정보를<br/>입력해주세요.</h2>
            <div className="mb-24">
              <p className="section-label-bold">최종 학위</p>
              <div className="degree-button-group">
                {['학사', '석사', '박사'].map(d => (
                  <button
                    key={d}
                    onClick={() => updateForm('degree', d)}
                    className={`degree-button ${formData.degree === d ? 'selected' : ''}`}
                  >{d}</button>
                ))}
              </div>
            </div>
            <div className="mb-24">
              <p className="section-label-bold">학교 그룹</p>
              <CloverUI.SelectionList
                options={educationGroupOptions}
                value={formData.educationGroup}
                onChange={(v) => updateForm('educationGroup', v)}
              />
            </div>
            {formData.educationGroup && (
              <div>
                <p className="section-label-bold">학교명</p>
                <CloverUI.BorderInput
                  placeholder="학교명 입력"
                  value={formData.schoolName}
                  onChange={(v) => updateForm('schoolName', v)}
                />
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <div className="slide-up">
            <h2 className="question-title">자산 정보를<br/>입력해주세요.</h2>
            <CloverUI.NoticeBox>자산 정보는 매칭 품질 향상에만 사용되며, 구체적인 금액은 공개되지 않습니다.</CloverUI.NoticeBox>
            <div className="mt-24 mb-24">
              <p className="section-label-bold">자산 기반</p>
              <CloverUI.SelectionList
                options={[{ value: 'self', label: '본인' }, { value: 'family', label: '가족' }, { value: 'mixed', label: '혼합' }]}
                value={formData.assetBase}
                onChange={(v) => updateForm('assetBase', v)}
              />
            </div>
            <div>
              <p className="section-label-bold">자산 수준</p>
              <CloverUI.SelectionList
                options={[{ value: 'high', label: '상위' }, { value: 'middle', label: '중간' }, { value: 'initial', label: '초기' }]}
                value={formData.assetLevel}
                onChange={(v) => updateForm('assetLevel', v)}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="slide-up">
            <h2 className="question-title">외모 정보를<br/>입력해주세요.</h2>
            <div className="mb-24">
              <p className="section-label-bold">키</p>
              <CloverUI.SelectDropdown
                placeholder="키 선택"
                options={heightOptions}
                value={formData.height}
                onChange={(v) => updateForm('height', v)}
              />
            </div>
            <div>
              <p className="section-label-bold">프로필 사진</p>
              <CloverUI.HelperText>최소 2장, 최대 6장 등록 가능</CloverUI.HelperText>
              <div className="mt-12">
                <CloverUI.PhotoUploadGrid
                  photos={formData.photos}
                  onChange={(p) => updateForm('photos', p)}
                  maxPhotos={6}
                />
              </div>
            </div>
            <CloverUI.NoticeBox>• 본인의 얼굴이 명확히 보이는 사진<br/>• 과도한 보정, 필터 사용 금지<br/>• 타인의 사진 사용 시 영구 정지</CloverUI.NoticeBox>
          </div>
        );
      case 5:
        return (
          <div className="slide-up">
            <h2 className="question-title">자기소개를<br/>작성해주세요.</h2>
            <CloverUI.BorderTextarea
              placeholder={`나는 어디서 어떤 일을 하는지,\n어떤 성격인지 취미는 무엇인지 등\n나에 대해 자세히 알려주세요.`}
              value={formData.introduction}
              onChange={(v) => updateForm('introduction', v)}
              minLength={50}
              maxLength={500}
            />
            <CloverUI.NoticeBox>• 평소 어떤 사람인지 솔직하게 써주세요<br/>• 연락처, SNS 계정 등은 기재하지 마세요</CloverUI.NoticeBox>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="screen">
      <CloverUI.Header title="클로버 정보" onBack={handleBack} />
      <CloverUI.ProgressBar current={step} total={totalSteps} />
      <div className="screen-content">
        <span className="step-badge">STEP {step} - {stepTitles[step - 1]}</span>
        {renderStep()}
      </div>
      <CloverUI.BottomButton text={step < totalSteps ? '다음' : '제출하기'} isActive={isStepValid()} onClick={handleNext} />
    </div>
  );
};

window.CloverInfoScreen = CloverInfoScreen;
