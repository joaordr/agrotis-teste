import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import DatePickerInput from './DatePickerInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import EventAlert from './EventAlert';
import { useForm } from "react-hook-form";

import { Container, Content, Header, CustomOption, SubmitButton } from './styles';

const nomeMaxLength = 40;
const observacaoMaxLength = 1000;
let laboratorios = [
    { id: 1, nome: 'Agro Skynet' },
    { id: 2, nome: 'Umbrella Agro' },
    { id: 3, nome: 'Osborn Agro' },
    { id: 4, nome: 'Skyrim Agro' },
    { id: 5, nome: 'Agro Brasil' }];
let propriedades = [];
for (let i = 1; i <= 9; i++) {
    propriedades.push({
        id: i,
        nome: `Agrotis ${i}`,
        cnpj: `04.909.987/0001-8${i}`
    });
}

export default function Form() {
    const { handleSubmit, control } = useForm();
    const [eventNotice, setEventNotice] = useState({ isOpen: false, isError: false });

    function onSubmit(data) {
        data = {
            ...data,
            dataInicial: data.dataInicial.toISOString(),
            dataFinal: data.dataFinal.toISOString(),
            infosPropriedade: JSON.parse(data.infosPropriedade),
            laboratorio: JSON.parse(data.laboratorio)
        }
        console.log(data);
        setEventNotice({ isOpen: true, isError: false })
    }

    function onError() {
        setEventNotice({ isOpen: true, isError: true })
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Header>
                    <h3>Teste front-end</h3>
                    <SubmitButton type="submit">SALVAR</SubmitButton>
                </Header>
                <Content>

                    <div className="row1">
                        <TextInput control={control} rules={{ required: true, maxLength: nomeMaxLength }} label={'Nome *'} id={'nome'} />
                        <div className="datePickersContainer">
                            <DatePickerInput control={control} rules={{ required: true }} label={'Data Inicial *'} id={'dataInicial'} />
                            <DatePickerInput control={control} rules={{ required: true }} label={'Data Final *'} id={'dataFinal'} />
                        </div>
                    </div>

                    <div className="row2">
                        <SelectInput control={control} rules={{ required: true }} label={'Propriedade *'} id={'infosPropriedade'}>
                            {propriedades.map(item => {
                                return <MenuItem value={JSON.stringify(item)} key={item.id}><CustomOption><p>{item.nome}</p><small>CNPJ {item.cnpj}</small></CustomOption></MenuItem>
                            })}
                        </SelectInput>
                        <SelectInput control={control} rules={{ required: true }} label={'Laboratório *'} id={'laboratorio'}>
                            {laboratorios.map(item => {
                                return <MenuItem value={JSON.stringify(item)} key={item.id}>{item.nome}</MenuItem>
                            })}
                        </SelectInput>
                    </div>

                    <TextInput control={control} rules={{ maxLength: observacaoMaxLength }} label={'Observações'} id={'observacoes'} multiline rows={4} />
                </Content>
            </form>
            <EventAlert eventNotice={eventNotice} setEventNotice={setEventNotice} />
        </Container>
    )
}