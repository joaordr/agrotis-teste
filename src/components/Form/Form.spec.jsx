/* eslint-disable testing-library/no-unnecessary-act */
import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Form from '.';

beforeEach(() => {
    // renderiza o DatePicker no formato desktop
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query) => ({
            media: query,
            matches: query === '(pointer: fine)',
            onchange: () => { },
            addEventListener: () => { },
            removeEventListener: () => { },
            addListener: () => { },
            removeListener: () => { },
            dispatchEvent: () => false,
        }),
    });
});

afterEach(() => {
    delete window.matchMedia;
});

describe('Form component', () => {
    it('Renders correctly', () => {
        render(<Form />)
        expect(screen.getByLabelText('Nome', { exact: false })).toBeInTheDocument();
        expect(screen.getByLabelText('Data Inicial', { exact: false })).toBeInTheDocument();
        expect(screen.getByLabelText('Data Final', { exact: false })).toBeInTheDocument();
        expect(screen.getByLabelText('Propriedade', { exact: false })).toBeInTheDocument();
        expect(screen.getByLabelText('Laboratório', { exact: false })).toBeInTheDocument();
        expect(screen.getByLabelText('Observações', { exact: false })).toBeInTheDocument();
    });

    it('Throws error if required inputs are not set', async () => {
        render(<Form />)
        await act(async () => fireEvent.submit(screen.getByText('SALVAR')));
        expect(screen.getByText('Preencha os campos obrigatórios.')).toBeInTheDocument();
    });

    it('Submit Correctly', async () => {
        render(<Form />)

        const selectPropriedade = screen.getByTestId("infosPropriedade");
        fireEvent.mouseDown(within(selectPropriedade).getByRole('button'));
        fireEvent.click(within(screen.getByRole('listbox')).getByText('Agrotis 1'));

        const selectLaboratorio = screen.getByTestId("laboratorio");
        fireEvent.mouseDown(within(selectLaboratorio).getByRole('button'));
        fireEvent.click(within(screen.getByRole('listbox')).getByText('Agro Skynet'));

        await act(async () => {
            fireEvent.change(screen.getByLabelText('Nome', { exact: false }), { target: { value: 'Jon Doe' } });
            fireEvent.change(screen.getByLabelText('Data Inicial', { exact: false }), { target: { value: '09/04/2022' } });
            fireEvent.change(screen.getByLabelText('Data Final', { exact: false }), { target: { value: '09/04/2022' } });
            fireEvent.change(screen.getByLabelText('Observações', { exact: false }), { target: { value: 'Teste descrição' } });

            fireEvent.submit(screen.getByText('SALVAR'));
        })

        expect(screen.getByText('Cadastro realizado com sucesso!')).toBeInTheDocument();
    });

})