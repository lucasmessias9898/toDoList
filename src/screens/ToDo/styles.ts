import { SafeAreaView } from 'react-native-safe-area-context'
import theme from "../../theme";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_700};
    padding: 24px;
`

export const Form = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: center;

    border-radius: 6px;

    margin-top: 30px;
`

export const HeaderList = styled.View`
    width: 100%;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 32px 0 12px;
`