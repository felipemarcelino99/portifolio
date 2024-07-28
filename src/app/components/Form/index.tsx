import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styles'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import  emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';

const Schema = z.object({
    nome: z.string().min(3, {message: "Informe seu nome"}),
    email: z.string().email({message: "Informe seu e-mail"}),
    pessoa: z.string(),
    telefone: z.string().nonempty('Informe seu telefone/celular').regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Informe um número válido'),
    mensagem: z.string().min(20, {message: "Insira sua mensagem"}),
}).refine(fields =>  fields.pessoa.length, {
    path: ['pessoa'],
    message: "Informe a pessoa"
});

type FormProps = z.infer<typeof Schema>;

const Form = () => {
    const [isSubmit, setIsSubmit] = useState(false);

    const { handleSubmit, register, formState: { errors }, reset } = useForm<FormProps>({
        mode: 'all',
        resolver: zodResolver(Schema)
    });

    const handleForm = (data: FormProps) => {
        setIsSubmit(true)

        const templateParams = {
            nome: data.nome,
            email: data.email,
            telefone: data.telefone,
            pessoa: data.pessoa,
            mensagem: data.mensagem,
        }

        if(process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_ID && process.env.NEXT_PUBLIC_PUBLIC_KEY) {
            emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((response) => {
                reset()
                setIsSubmit(false)
            })
        }

    }

    return (
        <S.Form onSubmit={handleSubmit(handleForm)}>
            <fieldset>
            <fieldset>
                <label htmlFor="nome">Nome/Razão Social</label>
                <input type="text" id="nome" {...register('nome')}/>
                <S.Error>{errors.nome?.message}</S.Error>
            </fieldset>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register('email')}/>
                <S.Error>{errors.email?.message}</S.Error>
            </fieldset>
            </fieldset>
            <fieldset>
            <fieldset>
                <label htmlFor="pessoa">Pessoa</label>
                <select id="pessoa" {...register('pessoa')}>
                    <option value=""></option>
                    <option value="fisica">Física</option>
                    <option value="juridica">Jurídica</option>
                </select>
                <S.Error>{errors.pessoa?.message}</S.Error>
            </fieldset>
            <fieldset>
                <label htmlFor="telefone">Telefone</label>
                <InputMask
                    mask="(99) 99999-9999"
                    maskPlaceholder={null}
                    alwaysShowMask={false}
                    {...register('telefone')}
                />
                <S.Error>{errors.telefone?.message}</S.Error>
            </fieldset>
            </fieldset>
            <fieldset>
            <fieldset>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" {...register('mensagem')} rows={10}></textarea>
                <S.Error>{errors.mensagem?.message}</S.Error>
            </fieldset>
            </fieldset>
            <button type="submit">{isSubmit ? 'Enviando...' : 'Enviar'}</button>
        </S.Form>
    )
}

export default Form
