import { useState } from 'react';
import { Box, Container, FormHelperText, Grid, Typography, MenuItem } from '@mui/material';
import { useForm } from "react-hook-form";

import DatePickerInput from './DatePickerInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import EventAlert from './EventAlert';

import { FormHeader, FormContainer, CustomOption, SubmitButton } from './styles';

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
        <Container maxWidth="xl">
            <FormContainer elevation={1}>
                <form onSubmit={handleSubmit(onSubmit, onError)}>

                    <FormHeader>
                        <Typography variant="h6">
                            Teste front-end
                        </Typography>
                        <SubmitButton type="submit">SALVAR</SubmitButton>
                    </FormHeader>

                    <Box sx={{ flexGrow: 1, p: 2 }} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextInput control={control} rules={{ required: true, maxLength: nomeMaxLength }} label={'Nome *'} id={'nome'} />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <DatePickerInput control={control} rules={{ required: true }} label={'Data Inicial *'} id={'dataInicial'} />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <DatePickerInput control={control} rules={{ required: true }} label={'Data Final *'} id={'dataFinal'} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SelectInput control={control} rules={{ required: true }} label={'Propriedade *'} id={'infosPropriedade'}>
                                    {propriedades.map(item => {
                                        return <CustomOption value={JSON.stringify(item)} key={item.id}><p>{item.nome}</p><FormHelperText>CNPJ {item.cnpj}</FormHelperText></CustomOption>
                                    })}
                                </SelectInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SelectInput control={control} rules={{ required: true }} label={'Laboratório *'} id={'laboratorio'}>
                                    {laboratorios.map(item => {
                                        return <MenuItem value={JSON.stringify(item)} key={item.id}>{item.nome}</MenuItem>
                                    })}
                                </SelectInput>
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput control={control} rules={{ maxLength: observacaoMaxLength }} label={'Observações'} id={'observacoes'} multiline rows={4} />
                            </Grid>
                        </Grid>
                    </Box>

                </form>
                <EventAlert eventNotice={eventNotice} setEventNotice={setEventNotice} />
            </FormContainer>
        </Container>
    )
}