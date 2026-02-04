/**
 * 기본 정보 입력 화면 (v1 플로우 8단계 + v3 UI)
 */
const BasicInfoScreen = ({ onComplete, onBack }) => {
  const [step, setStep] = React.useState(1);
  const totalSteps = 8;
  const [formData, setFormData] = React.useState({
    gender: '', birthYear: '', birthMonth: '', birthDay: '',
    region: '', subRegion: '', drinking: '', smoking: '', religion: '',
    interests: [], nickname: ''
  });
  const [searchQuery, setSearchQuery] = React.useState('');

  const updateForm = (k, v) => setFormData(p => ({ ...p, [k]: v }));
  const handleNext = () => { if (step < totalSteps) setStep(step + 1); else onComplete(formData); };
  const handleBack = () => { if (step > 1) setStep(step - 1); else onBack(); };

  const isStepValid = () => {
    switch (step) {
      case 1: return formData.gender !== '';
      case 2: return formData.birthYear.length === 4 && formData.birthMonth && formData.birthDay;
      case 3: return formData.region !== '';
      case 4: return formData.drinking !== '';
      case 5: return formData.smoking !== '';
      case 6: return formData.religion !== '';
      case 7: return formData.interests.length >= 3;
      case 8: return formData.nickname.length >= 2 && formData.nickname.length <= 10;
      default: return false;
    }
  };

  const frequentLocations = ['판교', '여의도', '서초', '광화문', '세종'];
  const allLocations = [
    { main: '서울 강남구', sub: '서울특별시' },
    { main: '서울 서초구', sub: '서울특별시' },
    { main: '서울 송파구', sub: '서울특별시' },
    { main: '서울 마포구', sub: '서울특별시' },
    { main: '경기 성남시 분당구', sub: '경기도' },
    { main: '경기 수원시', sub: '경기도' },
    { main: '인천 연수구', sub: '인천광역시' }
  ];
  const filteredLocations = searchQuery ? allLocations.filter(l => l.main.includes(searchQuery)) : allLocations;

  const interestOptions = [
    '카페 투어', '맛집 탐방', '산책', '여행(국내)', '여행(해외)', '반려동물',
    '영화', '음악', '콘서트', '독서', '운동(헬스)', '러닝', '요가', '골프', '등산', '요리'
  ];

  const stepTitles = ['성별', '생년월일', '거주지역', '음주', '흡연', '종교', '관심사', '닉네임'];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="slide-up">
            <h2 className="question-title">성별을<br/>알려주세요.</h2>
            <CloverUI.SelectionList
              options={[{ value: 'male', label: '남성' }, { value: 'female', label: '여성' }]}
              value={formData.gender}
              onChange={(v) => updateForm('gender', v)}
            />
            <CloverUI.HelperText>변경할 수 없으니 신중하게 선택해주세요</CloverUI.HelperText>
          </div>
        );
      case 2:
        return (
          <div className="slide-up">
            <h2 className="question-title">생년월일을<br/>알려주세요.</h2>
            <div className="box-input-group">
              <CloverUI.BoxInput className="year" placeholder="년(4자)" value={formData.birthYear} onChange={(v) => updateForm('birthYear', v.replace(/[^\d]/g, '').slice(0, 4))} maxLength={4} />
              <CloverUI.BoxInput className="month" placeholder="월" value={formData.birthMonth} onChange={(v) => updateForm('birthMonth', v.replace(/[^\d]/g, '').slice(0, 2))} maxLength={2} />
              <CloverUI.BoxInput className="day" placeholder="일" value={formData.birthDay} onChange={(v) => updateForm('birthDay', v.replace(/[^\d]/g, '').slice(0, 2))} maxLength={2} />
            </div>
            <CloverUI.HelperText>만 19세 이상만 가입 가능합니다</CloverUI.HelperText>
          </div>
        );
      case 3:
        return (
          <div className="slide-up">
            <h2 className="question-title">어디에<br/>거주하시나요?</h2>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '12px' }}>자주 찾는 지역</p>
              <CloverUI.ChipGroup
                options={frequentLocations.map(l => ({ value: l, label: l }))}
                values={formData.region ? [formData.region] : []}
                onChange={(vals) => updateForm('region', vals[vals.length - 1] || '')}
                maxSelect={1}
              />
            </div>
            <div className="search-section">
              <p className="search-label">지역 검색하기</p>
              <CloverUI.SearchInput placeholder="지역 검색" value={searchQuery} onChange={setSearchQuery} />
              <div className="search-results">
                {filteredLocations.map((loc, i) => (
                  <CloverUI.SearchResultItem
                    key={i}
                    mainText={loc.main}
                    subText={loc.sub}
                    selected={formData.region === loc.main}
                    onClick={() => updateForm('region', loc.main)}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="slide-up">
            <h2 className="question-title">음주 여부를<br/>선택해주세요.</h2>
            <CloverUI.SelectionList
              options={[{ value: 'yes', label: '자주 마셔요' }, { value: 'sometimes', label: '가끔 마셔요' }, { value: 'no', label: '안 마셔요' }]}
              value={formData.drinking}
              onChange={(v) => updateForm('drinking', v)}
            />
          </div>
        );
      case 5:
        return (
          <div className="slide-up">
            <h2 className="question-title">흡연 여부를<br/>선택해주세요.</h2>
            <CloverUI.SelectionList
              options={[{ value: 'yes', label: '흡연' }, { value: 'no', label: '비흡연' }]}
              value={formData.smoking}
              onChange={(v) => updateForm('smoking', v)}
            />
          </div>
        );
      case 6:
        return (
          <div className="slide-up">
            <h2 className="question-title">종교를<br/>선택해주세요.</h2>
            <CloverUI.SelectionList
              options={[{ value: 'none', label: '무교' }, { value: 'christian', label: '기독교' }, { value: 'catholic', label: '천주교' }, { value: 'buddhist', label: '불교' }, { value: 'other', label: '기타' }]}
              value={formData.religion}
              onChange={(v) => updateForm('religion', v)}
            />
          </div>
        );
      case 7:
        return (
          <div className="slide-up">
            <h2 className="question-title">관심사를<br/>선택해주세요.</h2>
            <div className="interests-header">
              <CloverUI.HelperText>최소 3개, 최대 6개까지 선택 가능해요</CloverUI.HelperText>
              <span className="interests-counter">선택된 관심사: {formData.interests.length}/6</span>
            </div>
            <div className="interests-grid">
              {interestOptions.map(opt => (
                <CloverUI.InterestChip
                  key={opt}
                  label={opt}
                  selected={formData.interests.includes(opt)}
                  onClick={() => {
                    const cur = formData.interests;
                    if (cur.includes(opt)) updateForm('interests', cur.filter(i => i !== opt));
                    else if (cur.length < 6) updateForm('interests', [...cur, opt]);
                  }}
                />
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="slide-up">
            <h2 className="question-title">닉네임을<br/>입력해주세요.</h2>
            <CloverUI.BorderInput
              placeholder="닉네임 입력"
              value={formData.nickname}
              onChange={(v) => updateForm('nickname', v.slice(0, 10))}
              maxLength={10}
            />
            <p className="char-counter">{formData.nickname.length}/10</p>
            <CloverUI.NoticeBox>닉네임은 가입 후에도 변경할 수 있어요. 부적절한 닉네임은 서비스 이용에 제한이 있을 수 있어요.</CloverUI.NoticeBox>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="screen">
      <CloverUI.Header title="기본 정보" onBack={handleBack} />
      <CloverUI.ProgressBar current={step} total={totalSteps} />
      <div className="screen-content">
        <span className="step-badge">STEP {step} - {stepTitles[step - 1]}</span>
        {renderStep()}
      </div>
      <CloverUI.BottomButton text={step < totalSteps ? '다음' : '완료'} isActive={isStepValid()} onClick={handleNext} />
    </div>
  );
};

window.BasicInfoScreen = BasicInfoScreen;
