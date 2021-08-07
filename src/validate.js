import Joi from 'joi';

const passWordScema = Joi.string().min(4).max(12).alphanum();


export default function arrFunc(params){
    console.log('validate result', passWordScema.validate(params)) ;
}
