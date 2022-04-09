import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    background-color: var(--background-card);
    margin: 40px auto;
    box-shadow: rgb(153, 153, 153) 1px 1px 4px 0px;
`;

export const Header = styled.div`
    background-color: var(--background-card-header);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 10px 15px;

    h3 {
        font-weight: 500;
        font-size: 20px;
        user-select: none;
    }
`;

export const Content = styled.div`
    padding: 20px 15px;

    .row1 {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 15px;        
    }

    .row2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 15px;
        margin: 15px 0;
    }
`;

export const SubmitButton = styled.button`
    background: none;
    border: none;
    color: white;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 2px;
    transition: background-color 0.2s;

    &:hover {
        cursor: pointer;
        background: var(--background-form-button-hover);
    }
`;

export const Option = styled.div`
    p {
        font-size: 12pt;
        margin-bottom: -7px;
    }

    small {
        color: var(--secondary-font-color);
        font-size: 8.5pt;
    }
`;