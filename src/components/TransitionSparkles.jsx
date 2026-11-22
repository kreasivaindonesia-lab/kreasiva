const SPARKLES = [
  { id: 1, x: '22%', y: '34%', color: '#1CA8FF', size: 16, delay: '0ms', shape: 'star' },
  { id: 2, x: '78%', y: '30%', color: '#FFB800', size: 18, delay: '40ms', shape: 'star' },
  { id: 3, x: '34%', y: '66%', color: '#7AC943', size: 13, delay: '70ms', shape: 'dot' },
  { id: 4, x: '68%', y: '62%', color: '#FF7A00', size: 15, delay: '30ms', shape: 'star' },
  { id: 5, x: '50%', y: '24%', color: '#005CB9', size: 12, delay: '50ms', shape: 'dot' },
  { id: 6, x: '16%', y: '56%', color: '#FFB800', size: 11, delay: '80ms', shape: 'dot' },
  { id: 7, x: '84%', y: '54%', color: '#7AC943', size: 15, delay: '60ms', shape: 'star' },
];

/** Playful floating star & dot burst shown briefly when switching pages. */
export default function TransitionSparkles({ burstKey }) {
  if (!burstKey) return null;

  return (
    <div key={burstKey} className="transition-sparkles" aria-hidden="true">
      {SPARKLES.map((item) => (
        <span
          key={item.id}
          className="sparkle-item"
          style={{
            left: item.x,
            top: item.y,
            color: item.color,
            animationDelay: item.delay,
          }}
        >
          {item.shape === 'star' ? (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.9 8.6L22 9.3L16.6 14L18.2 21L12 17.3L5.8 21L7.4 14L2 9.3L9.1 8.6L12 2Z" />
            </svg>
          ) : (
            <span
              className="sparkle-dot"
              style={{ width: item.size, height: item.size, backgroundColor: item.color }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
