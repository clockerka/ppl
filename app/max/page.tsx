import Link from 'next/link';
export default function MaxChannel() {
  return (
    <div className="page-container">
      <Link href="/" className="back-arrow">
        ←
      </Link>
      <div className="content">
        не, у нас такого нет, к сожалению... но у нас есть{' '}
        <Link href="/about" className="link">
          телеграм канал
        </Link>{'. '}
        посетите его. брух.
      </div>
    </div>
  );
}
