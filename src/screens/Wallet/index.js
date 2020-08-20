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
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
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
          ? ['#52E78C', '#1AB563']
          : ['#d3d3d3', '#868686']
          }
        >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '0,00' : '-----'}</Bold>
              </Value>
              <EyeButton onPress={handleToggleVisibility}>
                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
              </EyeButton>
            </BalanceContainer>

            <Info>
              Seu saldo está rendendo 100% do CDI
            </Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={30} color="#fff" />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff" />
                <ActionLabel>Reitirar</ActionLabel>
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
              Cadestre seu cartão de crédito
            </CardTitle>
            <CardInfo>
              Cadastre seu cartão de credito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay
            </CardInfo>
          </CardDetails>

          <Img source={creditCard} resizeMode="contain" />
        </CardBody>
        <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0D8060" />
          <AddLabel>
            Adicionar cartão de crédito
          </AddLabel>
        </AddButton>

      </Card>

      <UseTicketButton>
        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0D8060" />
        <UseTicketLabel>
          Usar codigo promocional
        </UseTicketLabel>
      </UseTicketButton>
      </Wcontainer>
    </Wrapper>
  );
}