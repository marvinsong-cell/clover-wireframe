/**
 * 클로버 디자인 시스템 v3
 * - v1 플로우 유지 + v2 UI 스타일
 */

const Icons = {
  Back: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Check: ({ size = 34 }) => (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none"><path d="M28.3333 8.5L12.75 24.0833L5.66667 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  CheckSmall: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  ChevronRight: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Search: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  Plus: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  Clover: () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="22" cy="22" r="12" fill="#cef17b"/><circle cx="38" cy="22" r="12" fill="#cef17b"/><circle cx="22" cy="38" r="12" fill="#cef17b"/><circle cx="38" cy="38" r="12" fill="#cef17b"/><rect x="27" y="45" width="6" height="12" rx="3" fill="#8B7355"/></svg>
  )
};

const Header = ({ title, onBack, showBack = true }) => (
  <header className="header">
    {showBack ? (
      <button className="header-back" onClick={onBack}><Icons.Back /></button>
    ) : <div style={{ width: 40 }} />}
    {title && <h1 className="header-title">{title}</h1>}
  </header>
);

const ProgressBar = ({ current, total }) => (
  <div className="progress-container">
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${(current / total) * 100}%` }} />
    </div>
    <p className="progress-text">{current} / {total}</p>
  </div>
);

const BottomButton = ({ text = "다음", isActive = false, onClick }) => (
  <div className="bottom-fixed">
    <button className={`btn-primary ${isActive ? 'active' : 'inactive'}`} onClick={isActive ? onClick : undefined} disabled={!isActive}>
      {text}
    </button>
  </div>
);

const BorderInput = ({ placeholder, value, onChange, type = 'text', large = false, maxLength }) => (
  <input
    type={type}
    className={`border-input ${large ? 'large' : ''}`}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    maxLength={maxLength}
  />
);

const BoxInput = ({ placeholder, value, onChange, className = '', maxLength }) => (
  <input
    type="text"
    className={`box-input ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    maxLength={maxLength}
  />
);

const BorderTextarea = ({ placeholder, value, onChange, minLength = 0, maxLength }) => (
  <div>
    <textarea
      className="border-textarea"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={maxLength}
    />
    <p className={`char-counter ${value.length >= minLength ? 'valid' : ''}`}>
      {value.length}/{maxLength || '∞'} {minLength > 0 && `(최소 ${minLength}자)`}
    </p>
  </div>
);

const SelectionList = ({ options, value, onChange }) => (
  <div className="selection-list">
    {options.map(opt => (
      <div key={opt.value} className={`selection-item ${value === opt.value ? 'selected' : ''}`} onClick={() => onChange(opt.value)}>
        <span className="text">{opt.label}</span>
        <span className="check-icon"><Icons.Check /></span>
      </div>
    ))}
  </div>
);

const ChipGroup = ({ options, values = [], onChange, maxSelect = Infinity }) => {
  const handleClick = (val) => {
    if (values.includes(val)) onChange(values.filter(v => v !== val));
    else if (values.length < maxSelect) onChange([...values, val]);
  };
  return (
    <div className="chip-group">
      {options.map(opt => (
        <span key={opt.value} className={`chip ${values.includes(opt.value) ? 'selected' : ''}`} onClick={() => handleClick(opt.value)}>
          {opt.label}
        </span>
      ))}
    </div>
  );
};

const SearchInput = ({ placeholder, value, onChange }) => (
  <div className="search-input-wrapper">
    <input type="text" className="search-input" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    <span className="search-icon"><Icons.Search /></span>
  </div>
);

const SearchResultItem = ({ mainText, subText, selected, onClick }) => (
  <div className={`search-result-item ${selected ? 'selected' : ''}`} onClick={onClick}>
    <span className="main-text">{mainText}</span>
    {subText && <span className="sub-text">{subText}</span>}
  </div>
);

const InterestChip = ({ label, selected, onClick }) => (
  <div className={`interest-chip ${selected ? 'selected' : ''}`} onClick={onClick}>{label}</div>
);

const CardOptionGrid = ({ options, value, onChange }) => (
  <div className="card-option-grid">
    {options.map(opt => (
      <div key={opt.value} className={`card-option ${value === opt.value ? 'selected' : ''}`} onClick={() => onChange(opt.value)}>
        {opt.icon && <div className="card-option-icon">{opt.icon}</div>}
        <div className="card-option-title">{opt.label}</div>
        {opt.description && <div className="card-option-desc">{opt.description}</div>}
      </div>
    ))}
  </div>
);

const SelectDropdown = ({ placeholder, options, value, onChange }) => (
  <select className="select-dropdown" value={value} onChange={(e) => onChange(e.target.value)}>
    <option value="">{placeholder}</option>
    {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
  </select>
);

const PhotoUploadGrid = ({ photos = [], onChange, maxPhotos = 6 }) => {
  const handleClick = (index) => {
    const newPhotos = [...photos];
    if (newPhotos[index]) newPhotos[index] = null;
    else newPhotos[index] = `photo_${index + 1}`;
    onChange(newPhotos.filter(Boolean));
  };
  return (
    <div className="photo-grid">
      {Array(maxPhotos).fill(null).map((_, index) => (
        <div key={index} className={`photo-item ${photos[index] ? 'filled' : ''}`} onClick={() => handleClick(index)}>
          {photos[index] ? <span style={{ fontSize: '32px' }}>📷</span> : <><Icons.Plus /><span>{index === 0 ? '대표' : '추가'}</span></>}
        </div>
      ))}
    </div>
  );
};

const AgreementList = ({ agreements, checkedIds, onChange }) => {
  const isAllChecked = agreements.every(a => checkedIds.includes(a.id));
  const handleToggle = (id) => {
    if (checkedIds.includes(id)) onChange(checkedIds.filter(i => i !== id));
    else onChange([...checkedIds, id]);
  };
  const handleToggleAll = () => {
    if (isAllChecked) onChange([]);
    else onChange(agreements.map(a => a.id));
  };
  return (
    <div>
      <div className="agreement-all">
        <div className="agreement-item" onClick={handleToggleAll}>
          <div className={`agreement-checkbox ${isAllChecked ? 'checked' : ''}`}>{isAllChecked && <Icons.CheckSmall />}</div>
          <span className="agreement-text">전체 동의</span>
        </div>
      </div>
      {agreements.map(a => (
        <div key={a.id} className="agreement-item" onClick={() => handleToggle(a.id)}>
          <div className={`agreement-checkbox ${checkedIds.includes(a.id) ? 'checked' : ''}`}>{checkedIds.includes(a.id) && <Icons.CheckSmall />}</div>
          <span className="agreement-text">{a.label}<span className="agreement-badge">{a.required ? '(필수)' : '(선택)'}</span></span>
          <span className="agreement-arrow"><Icons.ChevronRight /></span>
        </div>
      ))}
    </div>
  );
};

const NoticeBox = ({ children }) => <div className="notice-box"><p>{children}</p></div>;
const HelperText = ({ children }) => <p className="helper-text">{children}</p>;

window.CloverUI = {
  Icons, Header, ProgressBar, BottomButton, BorderInput, BoxInput, BorderTextarea,
  SelectionList, ChipGroup, SearchInput, SearchResultItem, InterestChip,
  CardOptionGrid, SelectDropdown, PhotoUploadGrid, AgreementList, NoticeBox, HelperText
};
