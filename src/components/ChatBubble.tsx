import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ChatBubbleProps = {
  from: 'client' | 'amplyon'
  children: ReactNode
}

export function ChatBubble({ from, children }: ChatBubbleProps) {
  const isClient = from === 'client'
  return (
    <li className={cn('flex', isClient ? 'justify-start' : 'justify-end')}>
      <span className="sr-only">{isClient ? 'Cliente: ' : 'Amplyon: '}</span>
      <p
        className={cn(
          'w-fit max-w-(--bubble-max-mobile) rounded-t-bubble px-4 py-3 type-body lg:max-w-(--bubble-max-desktop) lg:px-4.5 lg:py-3.5',
          isClient
            ? 'rounded-br-bubble rounded-bl-tail bg-ground text-ink'
            : 'rounded-br-tail rounded-bl-bubble bg-mint text-on-amp',
        )}
      >
        {children}
      </p>
    </li>
  )
}
