import { Icons } from './Icons';

interface PhotoUploadGridProps {
  photos?: (string | null)[];
  onChange: (photos: string[]) => void;
  maxPhotos?: number;
}

export const PhotoUploadGrid = ({
  photos = [],
  onChange,
  maxPhotos = 6,
}: PhotoUploadGridProps) => {
  const handleClick = (index: number) => {
    const newPhotos = [...photos];
    if (newPhotos[index]) {
      newPhotos[index] = null;
    } else {
      newPhotos[index] = `photo_${index + 1}`;
    }
    onChange(newPhotos.filter(Boolean) as string[]);
  };

  return (
    <div className="photo-grid">
      {Array(maxPhotos)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`photo-item ${photos[index] ? 'filled' : ''}`}
            onClick={() => handleClick(index)}
          >
            {photos[index] ? (
              <span className="photo-emoji">📷</span>
            ) : (
              <>
                <Icons.Plus />
                <span>{index === 0 ? '대표' : '추가'}</span>
              </>
            )}
          </div>
        ))}
    </div>
  );
};
