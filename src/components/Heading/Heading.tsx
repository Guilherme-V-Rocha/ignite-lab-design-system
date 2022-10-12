import { Slot } from '@radix-ui/react-slot';
import { HeadingProps } from '../../props/HeadingProps';
import clsx from 'clsx';
export function Heading({ size = 'md', children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp
      className={clsx('text-gray-100 font-bold font-sans', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
    >
      {children}
    </Comp>
  );
}
