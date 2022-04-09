/* eslint-disable testing-library/no-debugging-utils */
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import EventAlert from '.';

describe('EventAlert component', () => {
    it('Renders correctly when have an error', () => {
        render(<EventAlert eventNotice={{ isOpen: true, isError: true }} />)
        expect(screen.getByText('Preencha os campos obrigatórios.')).toBeInTheDocument();
    });

    it('Renders correctly when success', () => {
        render(<EventAlert eventNotice={{ isOpen: true, isError: false }} />)
        expect(screen.getByText('Cadastro realizado com sucesso!')).toBeInTheDocument();
    });

    it('Closes correctly', () => {
        const setEventNotice = jest.fn();
        render(<EventAlert eventNotice={{ isOpen: true, isError: false }} setEventNotice={setEventNotice} />)
        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        expect(setEventNotice).toHaveBeenCalledWith(expect.objectContaining({ isOpen: false }));
    });
})