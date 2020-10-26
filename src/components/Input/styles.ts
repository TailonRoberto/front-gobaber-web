import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';


interface ContainerProps  {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Error = styled(Tooltip)`
     height: 20px;
     margin-left: 16px;


     svg{
         margin: 0;
     }

     span{
         background: #c53030;
         color: #fff;


         &::before {
             border-color: #c53030 transparent;
         }
     }

`;


export const Container =  styled.div<ContainerProps>`


        background:  #232129;
        border-radius: 10px;

        padding: 16px;
        width: 100%;

        border: 2px solid #232129;
        color: #666360;

        display: flex;
        align-items: center;

        & + div{
            margin-top: 5px;
        }

        ${props => props.isErrored && css`
            border-color: #c53030;
        `}

        ${props => props.isFocused && css`
            color: #ff9000;
            border-color: #ff9000;

        `}

        ${props => props.isFilled && css`
            color: #ff9000;
        `}





   input{

        flex: 1;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0px 100px #232129 inset;
        -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
        -webkit-transition-delay: 9999s;
        }

        background: transparent;
        border: 0;
        color:   #f4ede8;

        &:placeholder-shown{
            color:   #666360;
        }


   }

   svg{
       margin-right: 16px;
   }



`;
