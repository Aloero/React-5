import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
  }
`;