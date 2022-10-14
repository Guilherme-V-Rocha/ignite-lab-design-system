import {
  TextInputIconProps,
  TextInputInputProps,
  TextInputRootProps,
} from '../../props/TextInputProps';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={
        'flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'
      }
    >
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInputRoot';

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = 'TextInputIcon';
function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs  placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
