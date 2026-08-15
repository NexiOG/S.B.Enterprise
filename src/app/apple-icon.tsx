import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 92,
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '38px',
          border: '4px solid #F59E0B',
          fontFamily: 'sans-serif',
          fontWeight: 900,
          position: 'relative',
        }}
      >
        <span
          style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #FEF3C7 50%, #D97706 100%)',
            backgroundClip: 'text',
            color: '#F59E0B',
            letterSpacing: '-2px',
          }}
        >
          SB
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
