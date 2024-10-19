// Table.test.tsx
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table Component', () => {
  const headers = ['id', 'name'];
  const data = [
    { id: 1, name: 'Row 1' },
    { id: 2, name: 'Row 2' },
  ];

  test('renders Table component with data', () => {
    render(<Table headers={headers} data={data} />);

    // Check if the table is in the document
    expect(screen.getByRole('table')).toBeInTheDocument();

    // Check if headers are rendered
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });

    // Check if data rows are rendered
    data.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
    });
  });

  test('renders Table component in disabled state', () => {
    const { container } = render(<Table headers={headers} data={data} isDisabled />);

    // Check if the table is in the document
    expect(screen.getByRole('table')).toBeInTheDocument();

    // Verify if cells are rendered with disabled styles
    const cells = container.querySelectorAll('td');
    cells.forEach((cell) => {
      expect(cell).toHaveStyle('color: #ccc'); // Assuming this style indicates disabled state
    });
  });
});
