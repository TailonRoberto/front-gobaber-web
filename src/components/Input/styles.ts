import styled from 'styled-components';


export const Container =  styled.div`


        background:  #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        color: #666360;

        display: flex;
        align-items: center;

        & + div{
            margin-top: 5px;
        }



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
