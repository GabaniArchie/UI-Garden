// Dropdown.tsx
import React from 'react';
import styled from 'styled-components';

export interface Option {
    label: string;
    value: string;
}

export interface DropdownProps {
    options: Option[];
    isDisabled?: boolean;
}

const StyledSelect = styled.select<{ isDisabled?: boolean }>`
    filter: ${(props) => (props.isDisabled ? 'grayscale(100%)' : 'none')};
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, isDisabled }) => {
    return (
        <StyledSelect disabled={isDisabled} isDisabled={isDisabled}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Dropdown;
