/** Decorative backdrop adapting smoothly between Landing, Pro Dashboards, and Student Age Tiers. */
export default function PlayfulBackdrop({ mode = 'landing', ageTier = 'sd' }) {
  const showPlayfulDoodles =
    mode === 'landing' || (mode === 'student' && (ageTier === 'tk' || ageTier === 'sd'));
  const showEarlyKidsAccents =
    mode === 'landing' || (mode === 'student' && ageTier === 'tk');

  return (
    <div className={`playful-backdrop backdrop-mode-${mode}`} aria-hidden="true">
      <div className="top-rainbow-bar" />
      <div className="wash wash-blue" />
      <div className="wash wash-orange" />
      <div className="wash wash-green" />

      {showPlayfulDoodles ? (
        <>
          <svg className="doodle doodle-plane" viewBox="0 0 180 120" fill="none">
            <path
              d="M14 96 C 46 84, 62 42, 108 50 C 128 54, 136 38, 142 30"
              stroke="#1CA8FF"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M164 18 L128 32 L144 39 L150 53 L164 18 Z"
              fill="#FFB800"
              stroke="#FF7A00"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M144 39 L164 18" stroke="#FF7A00" strokeWidth="1.8" />
          </svg>

          <svg className="doodle doodle-stars" viewBox="0 0 140 140" fill="none">
            <path
              d="M68 24 L73 36 L86 37 L76 46 L79 59 L68 52 L57 59 L60 46 L50 37 L63 36 Z"
              fill="#FFB800"
              stroke="#FF8A00"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="105" cy="40" r="6" fill="#7AC943" opacity="0.85" />
            <circle cx="34" cy="72" r="5" fill="#1CA8FF" opacity="0.8" />
            <path
              d="M98 86 L101 93 L108 94 L103 99 L104 106 L98 102 L92 106 L93 99 L88 94 L95 93 Z"
              fill="#1CA8FF"
              opacity="0.65"
            />
          </svg>
        </>
      ) : null}

      {showEarlyKidsAccents ? (
        <>
          <svg className="doodle doodle-crayon" viewBox="0 0 120 120" fill="none">
            <g transform="rotate(-24 60 60)">
              <rect
                x="28"
                y="42"
                width="58"
                height="22"
                rx="6"
                fill="#FF981A"
                stroke="#004E9E"
                strokeWidth="2.5"
              />
              <path
                d="M86 42 L102 53 L86 64 Z"
                fill="#FFE0A3"
                stroke="#004E9E"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path d="M96 49 L102 53 L96 57 Z" fill="#004E9E" />
              <rect x="42" y="42" width="8" height="22" fill="#005CB9" opacity="0.22" />
              <rect x="66" y="42" width="8" height="22" fill="#005CB9" opacity="0.22" />
            </g>
            <circle cx="88" cy="86" r="5" fill="#7AC943" opacity="0.75" />
            <circle cx="24" cy="34" r="4" fill="#FFB800" opacity="0.85" />
          </svg>

          <svg className="doodle doodle-blocks" viewBox="0 0 130 130" fill="none">
            <rect
              x="36"
              y="42"
              width="36"
              height="36"
              rx="10"
              transform="rotate(-12 36 42)"
              fill="#E6F4FF"
              stroke="#1CA8FF"
              strokeWidth="2.5"
            />
            <rect
              x="64"
              y="64"
              width="32"
              height="32"
              rx="9"
              transform="rotate(14 64 64)"
              fill="#EEFCE4"
              stroke="#7AC943"
              strokeWidth="2.5"
            />
            <circle cx="52" cy="30" r="4.5" fill="#FF8A00" opacity="0.85" />
          </svg>
        </>
      ) : null}
    </div>
  );
}
