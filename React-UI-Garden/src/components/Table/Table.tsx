import React from 'react';
import { TableProps } from './Table.types';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

const StyledTd = styled.td<{ isDisabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  color: ${(props) => (props.isDisabled ? '#ccc' : '#000')};
`;

const Table: React.FC<TableProps> = ({ headers, data, isDisabled }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh key={index}>{header}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <StyledTd key={cellIndex} isDisabled={isDisabled}>
                {row[header as keyof typeof row]} {/* Ensure correct mapping */}
              </StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
