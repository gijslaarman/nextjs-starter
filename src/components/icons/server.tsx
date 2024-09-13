'server only'; // This is necessary to avoid a huge bundle size.

import { pascalCase } from 'change-case';
import { type SVGProps } from 'react';

import * as Icons from './components/index';

import { type IconName } from './index';

interface IconComponentProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const createIconName = (icon: IconName): keyof typeof Icons => {
  return `${pascalCase(icon)}Icon` as keyof typeof Icons;
};

export const Icon = (props: IconComponentProps) => {
  const { name, className, size, ...rest } = props;
  const IconComponent = Icons[createIconName(name)] as
    | (typeof Icons)[keyof typeof Icons]
    | undefined;

  // If the iconComponent doesn't exist, return the name as a string
  if (!IconComponent) return <pre>Icon: {name} not found</pre>;

  return (
    <IconComponent className={className} height={size} width={size} {...rest} />
  );
};
