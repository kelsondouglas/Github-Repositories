"use client";

import Input from "@/components/Input";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMailOutline } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineUserAdd } from "react-icons/ai";
import Button from "@/components/Button";
import Link from "next/link";

const schema = z
  .object({
    name: z.string().min(2, { message: "Nome não pode estar vazio." }),
    email: z.string().email({ message: "Digite um e-mail válido." }),
    password: z
      .string()
      .min(6, { message: "Senha precisa de pelo menos 6 caracteres." }),
    confirmPassword: z.string().min(6, {
      message: "Confirmação de Senha precisa de pelo menos 6 caracteres.",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Senha e confirmação de senha não são iguais.",
      });
    }
  });

type Inputs = z.infer<typeof schema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log({ data });

  console.log(errors);

  return (
    <div className="container h-screen flex justify-center p-3 mx-auto gap-3">
      <div className="w-2/12  hidden md:flex">
        <div className="bg-[#000842] w-full h-full rounded-l-full"></div>
      </div>
      <div className="w-full md:w-3/4 ">
        <h1 className="text-xl font-bold">Github Repositories</h1>
        <div className="flex items-start justify-center flex-col h-full gap-8">
          <h2 className="text-3xl font-semibold">Cadastrar-se</h2>
          <p>
            Se você já tem uma conta cadastrada, você pode{" "}
            <Link href="/login" className="font-bold text-[#0C21C1]">
              Entrar aqui!
            </Link>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            <Input
              {...register("name")}
              type="text"
              label="Nome"
              placeholder="Digite seu nome de usuário"
              Icon={AiOutlineUserAdd}
              textError={errors.name?.message}
            />
            <Input
              {...register("email")}
              type="email"
              label="Email"
              placeholder="Digite seu endereço de email"
              Icon={IoMailOutline}
              textError={errors.email?.message}
            />
            <Input
              {...register("password")}
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              Icon={GiPadlock}
              textError={errors.password?.message}
            />
            <Input
              {...register("confirmPassword")}
              type="password"
              label="Confirmar Senha"
              placeholder="Digite sua confirmação de senha"
              Icon={GiPadlock}
              textError={errors.confirmPassword?.message}
            />
            <Button>Cadastrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
