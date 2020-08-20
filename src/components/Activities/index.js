import React, { useState } from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Header,
    Container,
    Title,
    Card,
    CardHeader,
    Avatar,
    Descripition,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
    Corloos,
} from './styles';

import avatar from '../../images/avatar.png'

export default function Activities(){
    const [isFavorite, setIsFavorite] = useState(true);

    function handleToggleFavorite(){
        setIsFavorite((prevState) => !prevState);
    }

    return(
        <Container>
            <Header>
                <Title> Atividades  </Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Descripition>
                        <Bold>Você </Bold>pagou a <Bold>@maateusilva</Bold>
                    </Descripition>
                </CardHeader>

                <CardBody>
                    <UserName>Mathes Silva</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>

                        <Divider />

                            <Feather name="lock" color="#fff" size={14} />
                            <Date>há 2 anos </Date>
                            </Details>

                        <Actions>
                            <Option>
                                <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                                <OptionLabel>0</OptionLabel>
                            </Option>

                            <Option>
                                <Corloos onPress={handleToggleFavorite}>
                                <AntDesign 
                                name="heart"
                                 size={14} 
                                 
                                 color={
                                    isFavorite
                                      ? ['#fffC']
                                      : ['#f75175']
                                      }
                                    />
                                </Corloos>
                                
                                <OptionLabel>{isFavorite ? '0' : '1'}</OptionLabel>
                            </Option>
                        </Actions>
                            
                </CardFooter>
            </Card>
        </Container>
    );
}