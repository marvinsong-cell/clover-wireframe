import { Icons } from './Icons';

interface Agreement {
  id: string;
  label: string;
  required: boolean;
}

interface AgreementListProps {
  agreements: Agreement[];
  checkedIds: string[];
  onChange: (ids: string[]) => void;
}

export const AgreementList = ({
  agreements,
  checkedIds,
  onChange,
}: AgreementListProps) => {
  const isAllChecked = agreements.every((a) => checkedIds.includes(a.id));

  const handleToggle = (id: string) => {
    if (checkedIds.includes(id)) {
      onChange(checkedIds.filter((i) => i !== id));
    } else {
      onChange([...checkedIds, id]);
    }
  };

  const handleToggleAll = () => {
    if (isAllChecked) {
      onChange([]);
    } else {
      onChange(agreements.map((a) => a.id));
    }
  };

  return (
    <div>
      <div className="agreement-all">
        <div className="agreement-item" onClick={handleToggleAll}>
          <div className={`agreement-checkbox ${isAllChecked ? 'checked' : ''}`}>
            {isAllChecked && <Icons.CheckSmall />}
          </div>
          <span className="agreement-text">전체 동의</span>
        </div>
      </div>
      {agreements.map((a) => (
        <div
          key={a.id}
          className="agreement-item"
          onClick={() => handleToggle(a.id)}
        >
          <div
            className={`agreement-checkbox ${
              checkedIds.includes(a.id) ? 'checked' : ''
            }`}
          >
            {checkedIds.includes(a.id) && <Icons.CheckSmall />}
          </div>
          <span className="agreement-text">
            {a.label}
            <span className="agreement-badge">
              {a.required ? '(필수)' : '(선택)'}
            </span>
          </span>
          <span className="agreement-arrow">
            <Icons.ChevronRight />
          </span>
        </div>
      ))}
    </div>
  );
};
