import theme from "@theme/index";
import { Text } from "react-native";
import styled, { css } from "styled-components/native";

export type NumberOfToDoStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: NumberOfToDoStyleProps
}

export const Container = styled.View`
   
   margin-right: 12px;

   height: 38px;
   width: 100px;

   align-items: center;
   justify-content: center;

   flex-direction: row;
`;

export const Title = styled(Text)<Props>`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
    margin-right: 8px;
`

export const Counter = styled.View`
    ${({ theme }) => css`

        width: 25px;
        height: 19px;

        background-color: ${theme.COLORS.GRAY_400};
        border-radius: 999px;

        align-items: center;
        justify-content: center;
   `};
`

export const CounterText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
   `};
`