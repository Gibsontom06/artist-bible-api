import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={cn('px-3 py-2 rounded bg-zinc-100 text-zinc-900 text-sm', props.className)} />;
}
