import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="page-container">
      <div className="content">
        oops.... i think, you should{' '}
        <Link href="/" className="link">
          restart your journey here
        </Link>
      </div>
    </div>
  );
}
