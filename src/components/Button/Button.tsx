import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ButtonProps } from '../../props/ButtonProps';
export function Button(props: ButtonProps) {
  const Comp = props.asChild ? Slot : 'button';
  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm transition-colors mt-4 hover:bg-cyan-300 focus:ring-2 ring-white'
      )}
      {...props}
    >
      {props.children}
    </Comp>
  );
}
