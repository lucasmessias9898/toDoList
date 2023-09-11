import { TouchableOpacityProps } from "react-native";
import { Container, Title, Counter, CounterText, NumberOfToDoStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: NumberOfToDoStyleProps;
    counter: number
}

export default function NumberOfToDo({ title, type = 'PRIMARY', counter, ...rest }: Props) {

    return (
        <Container {...rest}>
            <Title type={type}>
                {title}
            </Title>
            <Counter>
                <CounterText>
                    {counter}
                </CounterText>
            </Counter>
        </Container>
    )
}