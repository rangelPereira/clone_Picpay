import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
  Wrapper,
  Wcontainer,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Pay() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setIsBalance] = useState(true);

  function handleToggleVisibility(){
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance(){
    setIsBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Wcontainer>
      <Header colors={
        useBalance
          ? ['#0D8', '#0D8060']
          : ['#aaa', '#222']
          }
        >
        <HeaderContainer>
          <Title>Saldo atual</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '300,00' : '-----'}</Bold>
              </Value>
              <EyeButton onPress={handleToggleVisibility}>
                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
              </EyeButton>
            </BalanceContainer>

            <Info>
                Pague suas contas usando PicPay
            </Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={30} color="#fff" />
                <ActionLabel>Transferência</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff" />
                <ActionLabel>Boleto</ActionLabel>
              </Action>

            </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>
          Usar saldo ao pagar
        </UseBalanceTitle>
        <Switch  
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>


      <PaymentMethods>
        <PaymentMethodsTitle>
          Forma de pagamento
        </PaymentMethodsTitle>
      </PaymentMethods>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>
            Transferência
            </CardTitle>
            <CardInfo>
              Faça Transferência da sua conta direto do seu PicPay
            </CardInfo>
          </CardDetails>

          <Img source={creditCard} resizeMode="contain" />
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>
            Pagar boleto
            </CardTitle>
            <CardInfo>
              Você pode pagar boletos direto pelo seu PicPay
            </CardInfo>
          </CardDetails>

          <Img source={creditCard} resizeMode="contain" />
        </CardBody>
      </Card>
      
      </Wcontainer>
    </Wrapper>
  );
}