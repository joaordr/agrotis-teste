/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuItem from '@mui/material/MenuItem';
import DatePickerInput from './DatePickerInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import EventAlert from './EventAlert';

import styles from './form.module.scss';

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
    return (
        <div className={styles.container}>
            <form action="">
                <div className={styles.header}>
                    <h3>Teste front-end</h3>
                    <button type="submit">SALVAR</button>
                </div>
                <div className={styles.content}>

                    <div className={styles.row1}>
                        <TextInput maxLength={nomeMaxLength} label={'Nome'} id={'nome'} required={true} />
                        <DatePickerInput label={'Data Inicial'} id={'dataInicial'} />
                        <DatePickerInput label={'Data Final'} id={'dataFinal'} />
                    </div>

                    <div className={styles.row2}>
                        <SelectInput label={'Propriedade'} id={'infosPropriedade'}>
                            {propriedades.map(item => {
                                return <MenuItem value={item} key={item.id}><div className={styles.option}><p>{item.name}</p><small>CNPJ {item.cnpj}</small></div></MenuItem>
                            })}
                        </SelectInput>
                        <SelectInput label={'Laboratório'} id={'laboratorio'}>
                            {laboratorios.map(item => {
                                return <MenuItem value={item} key={item.id}>{item.name}</MenuItem>
                            })}
                        </SelectInput>
                    </div>

                    <TextInput maxLength={observacaoMaxLength} label={'Observações'} id={'observacoes'} multiline rows={4} />

                </div>
            </form>
            <EventAlert />
        </div>
    )
}