import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

import theme from '@theme/index';

import ToDo from '@screens/ToDo';

import Loading from '@components/Loading';

export default function App() {

    const [ fontsLoaded ] = useFonts({ Inter_400Regular, Inter_700Bold });

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            {fontsLoaded ? <ToDo /> : <Loading />}
        </ThemeProvider>
    );
}


