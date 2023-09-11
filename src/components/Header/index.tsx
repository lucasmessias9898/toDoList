import LogoImg from '@assets/logo.png';

import { Container, Logo } from './styles';

export default function Header() {
    return (
        <Container>
            <Logo source={LogoImg} />
        </Container>
    )
}