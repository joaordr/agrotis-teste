import styled from 'styled-components';

export const Container = styled.div`
    .MuiSelect-select {
        div {
            small {
                display: none;
            }
        }
    }

    .MuiFormHelperText-root{
        display: flex;
        align-items: center;
        svg {
            font-size: 15px;
            margin-right: 5px;
        }
    }
`;

export const ClearButton = styled.button`
    z-index: 1;
    display: flex;
    position: absolute;
    right: 27px;
    top: 22px;
    background: none;
    border: none;
    color: var(--background-secondary-button);

    &:hover {
        cursor: pointer;
        color: var(--background-secondary-button-hover);
    }
`;