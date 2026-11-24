type BaseTheme = typeof baseTheme;

export interface AppTheme extends BaseTheme {
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
    primary: string;
    primaryHover: string;
    onPrimary: string;
    danger: string;
    dangerHover: string;
    onDanger: string;
    success: string;
    focus: string;
    hover: string;
  };
}

const baseTheme = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
};

export const light: AppTheme = {
  colors: {
    background: '#f6f7f9',
    surface: '#ffffff',
    text: '#14161a',
    muted: '#5b6270',
    border: '#d9dde3',
    primary: '#3b5bdb',
    primaryHover: '#2f4ac0',
    onPrimary: '#ffffff',
    danger: '#d6336c',
    dangerHover: '#b02556',
    onDanger: '#ffffff',
    success: '#2b8a3e',
    focus: '#3b5bdb',
    hover: '#eef0f4',
  },
  ...baseTheme
};

export const dark: AppTheme = {
  colors: {
    background: '#0f1115',
    surface: '#171a21',
    text: '#e8eaee',
    muted: '#9aa3b2',
    border: '#2b303b',
    primary: '#7c94ff',
    primaryHover: '#9aadff',
    onPrimary: '#0f1115',
    danger: '#ff7096',
    dangerHover: '#ff95b2',
    onDanger: '#0f1115',
    success: '#69db7c',
    focus: '#7c94ff',
    hover: '#252a34',
  },
  ...baseTheme
};