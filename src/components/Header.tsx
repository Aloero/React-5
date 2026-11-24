import styled from 'styled-components';
import { Button } from './ui/Button';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggle: () => void;
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export function Header({ theme, toggle }: HeaderProps) {
  return (
    <Container>
      <h1>Мини-маркет</h1>

      <Button variant="outline" onClick={toggle}>
        {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
      </Button>
    </Container>
  );
}