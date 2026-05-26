import Link from 'next/link';
export default function Zakhar() {
  return (
    <div className="page-container">
      <Link href="/about" className="back-arrow">
        ←
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
        <img src="/photo1.png" alt="" style={{ maxWidth: '90vw', maxHeight: '70vh', border: '2px solid #fff' }} />
        <p style={{ color: '#888', marginTop: '1rem', textAlign: 'center', fontSize: '18px' }}>все фото Захара были загружены на наш сайт с его разрешения и по его просьбе</p>
      </div>
    </div>
  );
}
