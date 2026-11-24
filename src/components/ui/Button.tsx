import styled, { css, keyframes } from 'styled-components';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  outline: css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.hover};
    }
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.onDanger};
    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.dangerHover};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    &:hover:not(:disabled) {
        background: ${({ theme }) => theme.colors.hover};
    }
  `,
} satisfies Record<Variant, unknown>;

const sizes = {
  sm: css`
    height: 32px;
    padding: 0 12px;
    font-size: 14px;
  `,
  md: css`
    height: 40px;
    padding: 0 16px;
    font-size: 16px;
  `,
  lg: css`
    height: 48px;
    padding: 0 24px;
    font-size: 18px;
  `,
} satisfies Record<Size, unknown>;

type Variant = 'primary' | 'outline' | 'danger' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const StyledButton = styled.button<{
  $variant: Variant;
  $size: Size;
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.radius.md};
    font-weight: 500;
    cursor: pointer;
    transition: background-color 200ms ease;

    &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    }

    &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
    }
    ${({ $variant }) => variants[$variant]}
    ${({ $size }) => sizes[$size]}
`;

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.span`
  width: 16px;
  height: 16px;

  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;

  animation: ${spin} 0.8s linear infinite;
`;

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  ...rest
}: ButtonProps) {
    return (
      <StyledButton
        $variant={variant}
        $size={size}
        disabled={disabled || loading}
        {...rest}
      >
        {loading ? <Spinner/> : children}
        </StyledButton>
    );
}