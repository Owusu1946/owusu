import { Suspense } from 'react';
import Chat from '@/components/chat/chat';
import { ChatRouteLoading } from '@/components/chat/chat-route-loading';

export default function Page() {
  return (
    <Suspense fallback={<ChatRouteLoading />}>
      <Chat />
    </Suspense>
  );
}
