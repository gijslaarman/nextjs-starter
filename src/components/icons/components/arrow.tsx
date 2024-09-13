import React, { type SVGProps, forwardRef } from 'react';

export const ArrowIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.35 18H0v-4h24.35L13.15 2.8 16 0l16 16-16 16-2.85-2.8z"
        fill="currentColor"
      />
    </svg>
  ),
);

ArrowIcon.displayName = 'ArrowIcon';
