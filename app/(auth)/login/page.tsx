"use client";

import Input from "@/components/Input";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMailOutline } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import Button from "@/components/Button";
import Link from "next/link";

const schema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha precisa de pelo menos 6 caracteres." }),
});

type Inputs = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log({ data });

  return (
    <div className="container h-screen flex justify-center p-3 mx-auto gap-3">
      <div className="w-full md:w-3/4 ">
        <h1 className="text-xl font-bold">Github Repositories</h1>
        <div className="flex items-start justify-center flex-col h-full gap-8">
          <h2 className="text-3xl font-semibold">Entrar</h2>
          <p>
            Se você não tem uma conta cadastrada, você pode{" "}
            <Link href="/register" className="font-bold text-[#0C21C1]">
              Registrar-se aqui!
            </Link>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            <Input
              {...register("email")}
              type="text"
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

            <Button>Login</Button>
          </form>
        </div>
      </div>
      <div className="w-2/12  hidden md:flex">
        <div className="bg-[#000842] w-full h-full rounded-r-full"></div>
      </div>
    </div>
  );
};

export default LoginPage;
