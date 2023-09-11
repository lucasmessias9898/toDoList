import { TouchableOpacity } from 'react-native';
import ButtonIcon from '@components/Button';
import { ButtonIconTypeStyleProps, Container, Icon, Title } from './styles';

type Props = ButtonIconTypeStyleProps & {
    title: string;
    type?: ButtonIconTypeStyleProps
    onRemove: () => void;
    onDone: () => void;
}

export default function TaskCard({ title, done = false, onRemove, onDone, ...rest }: Props) {
    return (
        <Container {...rest}>
            <TouchableOpacity onPress={onDone}>
                <Icon name={done ? 'check-circle' : 'radio-button-unchecked'} done={done}/>
            </TouchableOpacity>
            <Title done={done}>
                {title}
            </Title>
            <ButtonIcon 
                icon='trash-2'
                onPress={onRemove}
                type='SECONDARY'
            />
        </Container>
    )
}