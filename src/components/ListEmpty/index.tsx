import { TouchableOpacityProps } from 'react-native'
import { Container, IconEmpty, Message, SubMessage } from './styles';

import Icon from '@assets/Clipboard.png';

type Props = TouchableOpacityProps & {
    message: string;
    subMessage: string;
}

export default function ListEmpty({ message, subMessage }: Props) {
  return (
    <Container>
        <IconEmpty source={Icon}/>
        <Message>
            {message}
        </Message>
        <SubMessage>
            {subMessage}
        </SubMessage>
    </Container>
  );
}
