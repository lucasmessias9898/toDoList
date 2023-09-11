import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.BLUE_DARK : theme.COLORS.GRAY_500};
    border-radius: 6px;
`

export const Icon = styled(Feather).attrs<Props>(({ theme, type}) => ({
    size: 16,
    color: type === 'PRIMARY' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300
}))``