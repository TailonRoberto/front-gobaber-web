import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';


const SignIn: React.FC = () => (
  <Container>
      <Content>
          <img src={logoImg} alt="GoBarber" />

          <form>
             <h1>Faça seu logon</h1>
             <Input name="Email" icon={FiMail} placeholder="E-mail"></Input>
             <Input name="password" icon={FiLock} type="password" placeholder="Senha" ></Input>

             <Button type="submit">Entrar</Button>

             <a href="forgot">Esqueci minha senha</a>

          </form>

          <a href="forgot">
              <FiLogIn/>
               Criar conta
         </a>


      </Content>


      <Background/>


  </Container>

);

export default SignIn;

