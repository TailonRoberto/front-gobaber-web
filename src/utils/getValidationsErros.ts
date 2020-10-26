import { format } from "path";
import { ValidationError } from  'yup';

interface Erros {
    [key: string] : string;

}

export default function getValidationErros(err: ValidationError): Erros {
    const validationErros: Erros = {};


   err.inner.forEach(erro => {
       validationErros[erro.path] = erro.message;
   })

   return validationErros;

}


