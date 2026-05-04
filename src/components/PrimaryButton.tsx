import { MagneticLink } from "./MagneticLink";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof MagneticLink>, "className"> & {
  /** true → flex w-full px-6 (Sidebar CV button style) */
  fullWidth?: boolean;
};

const BASE =
  "group items-center justify-center gap-2 bg-primary text-white py-4 rounded-[1.25rem] font-black text-sm uppercase tracking-widest " +
  "shadow-[0_8px_20px_rgba(0,126,255,0.3),_inset_0_2px_4px_rgba(255,255,255,0.4)] " +
  "hover:shadow-[0_12px_25px_rgba(0,126,255,0.5),_inset_0_2px_4px_rgba(255,255,255,0.6)] " +
  "transition-shadow";

export function PrimaryButton({ fullWidth, children, ...rest }: Props) {
  const layout = fullWidth ? "flex w-full px-6" : "inline-flex px-8";
  return (
    <MagneticLink className={`${layout} ${BASE}`} {...rest}>
      {children}
    </MagneticLink>
  );
}
