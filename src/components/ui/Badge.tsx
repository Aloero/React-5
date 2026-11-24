import styled, { css } from 'styled-components';

type Variant = 'primary' | 'success' | 'danger';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
  `,
  success: css`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.success};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.onDanger};
  `,

} satisfies Record<Variant, unknown>;

export interface BadgeProps 
    extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: Variant;
}

const StyledBadge = styled.span<{
  $variant: Variant;
}>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs}
           ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: 12px;
  font-weight: 500;

  ${({ $variant }) => variants[$variant]}
`;

export function Badge({
  variant = 'primary',
  children,
  ...rest
}: BadgeProps) {
    return (
      <StyledBadge
        $variant={variant}
        {...rest}
      >
        {children}
        </StyledBadge>
    );
}