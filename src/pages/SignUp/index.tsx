import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import validationErros from '../../utils/getValidationsErros';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg'
import { StyleSheetManager } from 'styled-components';


const SignUp: React.FC = () => {

   const formRef = useRef<FormHandles>(null);

   console.log(formRef);



   const handleSubmit = useCallback( async (data: object) => {

         try{

            formRef.current?.setErrors({});

             const schema = Yup.object().shape({
                 name: Yup.string().required('Nome obrigatório'),
                 email: Yup.string().required('E-mail obrigatório').email('Digite um E-mail válido'),
                 password: Yup.string().min(6, 'No mínimo 6 digitos')
             });



             await schema.validate(data, {
                 abortEarly: false
             });





         }catch(err){


            const erros = validationErros(err);

            formRef.current?.setErrors(erros);




            console.log(err);

         }


        console.log(data);


    }, []);


    return ( <Container>
        <Background/>
        <Content>
            <img src={logoImg} alt="GoBarber" />
            {/* initialData={{name: 'Tatilon'}} */}
            <Form ref={formRef} onSubmit={handleSubmit}>
               <h1>Faça seu Cadastro</h1>
               <Input name="name" icon={FiUser} placeholder="Nome"></Input>
               <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
               <Input name="password" icon={FiLock} type="password" placeholder="Senha" ></Input>

               <Button type="submit">Cadastrar</Button>


            </Form>

            <a href="forgot">
                <FiArrowLeft/>
                Voltar para logon
           </a>


        </Content>


    </Container>)
}


;

export default SignUp;

