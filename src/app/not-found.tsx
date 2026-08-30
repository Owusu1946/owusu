import { ArrowLeft } from '@/components/ui/icons';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p>404</p>
      <h1>nothing to see here.</h1>
      <Link href="/">
        <ArrowLeft aria-hidden="true" />
        go back home
      </Link>
    </main>
  );
}
