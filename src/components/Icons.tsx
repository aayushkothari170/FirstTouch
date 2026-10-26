import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12.5 9.2 17 19 7" />
    </svg>
  );
}

export function PassIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="7" cy="12" r="2.2" />
      <circle cx="17" cy="12" r="2.2" />
      <path d="M9.2 12h5.6" />
    </svg>
  );
}

export function DribbleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="14" r="3" />
      <path d="M8 6c2 1 3 2 4 4M16 6c-2 1-3 2-4 4" />
    </svg>
  );
}

export function ShootIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 16 10 8l3 3 7-5" />
      <path d="M14 6h6v6" />
    </svg>
  );
}

export function DefendIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 19 6v5.2c0 4.2-2.8 7.2-7 8.8-4.2-1.6-7-4.6-7-8.8V6z" />
    </svg>
  );
}

export function AllIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 7h14M5 12h14M5 17h14" />
    </svg>
  );
}
