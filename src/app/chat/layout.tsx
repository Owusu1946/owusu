import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <Toaster />
      <Analytics />
    </>
  );
}
