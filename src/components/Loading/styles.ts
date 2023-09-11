import theme from '@theme/index'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${theme.COLORS.GRAY_700};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
    color: theme.COLORS.BLUE
}))``