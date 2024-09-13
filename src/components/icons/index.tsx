export const iconList = ['arrow'] as const;

export type IconName = (typeof iconList)[number];
