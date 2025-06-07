import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from '../Loading';
import styles from '@/styles/Loading.module.css';

describe('Loading component', () => {
  it('renders with default props', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner.getAttribute('data-size')).toBe('medium');
  });

  it('renders with custom size and message', () => {
    render(<Loading size="small" message="Please wait" />);
    expect(screen.getByText('Please wait')).toBeInTheDocument();
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner.getAttribute('data-size')).toBe('small');
  });

  it('applies correct container class', () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toHaveClass(styles.loadingContainer);
  });
});