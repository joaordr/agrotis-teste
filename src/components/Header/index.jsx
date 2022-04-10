import { PageHeader, Logo } from './styles';

export default function Header() {
    return (
        <PageHeader position="static">
            <Logo src="./images/logo.svg" alt="Logo Agrotis" />
        </PageHeader>
    )
}