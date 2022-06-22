import { Theme } from '@storybook/theming';

export const getBlockBackgroundStyle: (theme: Theme) => object = (theme: Theme) => {
  return {
    borderRadius: theme.general.appBorderRadius,
    background: theme.general.bg,
    boxShadow: theme.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    border: `1px solid ${theme.general.appBorderColor}`,
    color: theme.general.textColor,
  };
};
