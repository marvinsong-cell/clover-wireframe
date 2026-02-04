export const Icons = {
  Back: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Check: ({ size = 34 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none">
      <path d="M28.3333 8.5L12.75 24.0833L5.66667 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  CheckSmall: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Search: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Plus: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Clover: () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <circle cx="22" cy="22" r="12" fill="#cef17b"/>
      <circle cx="38" cy="22" r="12" fill="#cef17b"/>
      <circle cx="22" cy="38" r="12" fill="#cef17b"/>
      <circle cx="38" cy="38" r="12" fill="#cef17b"/>
      <rect x="27" y="45" width="6" height="12" rx="3" fill="#8B7355"/>
    </svg>
  ),
};
