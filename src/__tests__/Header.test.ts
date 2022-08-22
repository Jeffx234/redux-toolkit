import { Header } from '../components/Header';
import { render, fireEvent } from '@testing-library/react';

describe('should be chart', () => {
  it('should be chart', () => {
    const { getByText, debug } = render(<Header />)

    const header = getByText('Mds')
    expect(header).toBeInTheDocument()
  })
})