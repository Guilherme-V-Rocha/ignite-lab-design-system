import {
  TextInputIconProps,
  TextInputInputProps,
  TextInputRootProps,
} from '../../props/TextInputProps';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

function TextInputRoot(props: TextInputRootProps) {
  <div
    className={clsx(
      'flex items-center gap py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'
    )}
  >
    {props.children}
  </div>;
}
function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = 'TextInputIcon';
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
