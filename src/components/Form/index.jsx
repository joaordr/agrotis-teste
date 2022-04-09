import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import DatePickerInput from './DatePickerInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import EventAlert from './EventAlert';
import { useForm } from "react-hook-form";

import { Container, Content, Header, Option, SubmitButton } from './styles';

const nomeMaxLength = 40;
const observacaoMaxLength = 1000;
let laboratorios = [
    { id: 1, name: 'Agro Skynet' },
    { id: 2, name: 'Umbrella Agro' },
    { id: 3, name: 'Osborn Agro' },
    { id: 4, name: 'Skyrim Agro' },
    { id: 5, name: 'Agro Brasil' }];
let propriedades = [];
for (let i = 1; i <= 9; i++) {
    propriedades.push({
        id: i,
        name: `Agrotis ${i}`,
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
                        <DatePickerInput control={control} rules={{ required: true }} label={'Data Inicial *'} id={'dataInicial'} />
                        <DatePickerInput control={control} rules={{ required: true }} label={'Data Final *'} id={'dataFinal'} />
                    </div>

                    <div className="row2">
                        <SelectInput control={control} rules={{ required: true }} label={'Propriedade *'} id={'infosPropriedade'}>
                            {propriedades.map(item => {
                                return <MenuItem value={JSON.stringify(item)} key={item.id}><Option><p>{item.name}</p><small>CNPJ {item.cnpj}</small></Option></MenuItem>
                            })}
                        </SelectInput>
                        <SelectInput control={control} rules={{ required: true }} label={'Laboratório *'} id={'laboratorio'}>
                            {laboratorios.map(item => {
                                return <MenuItem value={JSON.stringify(item)} key={item.id}>{item.name}</MenuItem>
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