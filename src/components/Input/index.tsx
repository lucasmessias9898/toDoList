import { TextInputProps, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from "./styles";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

export default function Input({ inputRef, ...rest  }: Props) {

    const theme = useTheme()

    return (
        <Container
            {...rest}
            ref={inputRef}
            placeholderTextColor={theme.COLORS.GRAY_300}
        />
    )
}