'use client';

import { type SVGProps } from 'react';

import { type IconName } from './index';

// Client components make use of the sprite sheet to render icons.
interface IconClientComponentProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export const Icon = ({
  name,
  className,
  size,
  ...props
}: IconClientComponentProps) => {
  return (
    <svg className={className} height={size} width={size} {...props}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
};
