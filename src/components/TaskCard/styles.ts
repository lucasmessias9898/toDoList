import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconTypeStyleProps = {
    done?: boolean;
};

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    margin-bottom: 16px;
`

export const Title = styled.Text`
    flex: 1;
    margin-left: 8px;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};

    ${({ theme, done }) => done && css`
        color: ${theme.COLORS.GRAY_300};
        text-decoration: line-through;
   `};
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconTypeStyleProps>(({ theme, done}) => ({
    size: 24,
    color: done ? theme.COLORS.PURPLE : theme.COLORS.BLUE,
}))`
    margin-left: 16px;
    margin-right: 4px;
`