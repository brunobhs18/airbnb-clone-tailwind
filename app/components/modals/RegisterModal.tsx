'use client'

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from "react";
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useLoginModal from "@/app/hooks/useLoginModal";
import useResgisterModal from "@/app/hooks/useRegisterModal";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";


const ResgisterModal = () => {
    const registerModal = useResgisterModal();
    const loginModal = useLoginModal();

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {    
                toast.success('Sucesso!');     
                registerModal.onClose();
                loginModal.onOpen();
            })
            .catch((error) => {
                toast.error('Algo deu errado');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    
    const toogle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
                title="Bem vindo ao Airbnb"
                subtitle="Crie sua conta!"
            />
            <Input id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input id="name"
                label="Nome"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input id="password"
                label="Senha"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button outline
                label="Continue com Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button outline
                label="Continue com Github"
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className=" justify-center flex flex-row items-center gap-2">
                    <div>
                        Já tem uma conta?
                    </div>
                    <div onClick={toogle}
                        className="text-neutral-800 cursor-pointer hover:underline">
                        Conecte-se
                    </div> 
                </div>
            </div>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Registro"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default ResgisterModal;