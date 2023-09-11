import theme from "@theme/index";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    border-top: 1px solid ${theme.COLORS.GRAY_400};
    padding: 48px 20px;

`

export const IconEmpty = styled.Image`
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
`

export const Message = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_300};
    `}
`

export const SubMessage = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `}
`