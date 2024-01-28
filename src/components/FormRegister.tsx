"use client"

import * as React from "react"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdEmail, MdPassword } from "react-icons/md"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { FiUser } from "react-icons/fi"
import { createUser } from "@/lib/api"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}


const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Nome precisa ter pelo menos 2 caracteres",
  }),
  user_email: z.string().min(8, {
    message: "E-mail precisa ter pelo menos 8 caracteres",
  }),
  user_password: z.string().min(6, {
    message: "Senha precisa ter pelo menos 6 caracteres",
  }),
})

export function UserRegisterForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      user_password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      const response = await createUser(values)
      if (response._id) {
        alert("Usuário criado com sucesso!")
        form.reset()
      } else {
       alert("Ops, algo deu errado!")
       
      }
    } catch (error: any) {
      alert(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="user_name">
                    Nome
                  </FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <FiUser className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />

                      <Input
                        id="user_name"
                        placeholder="Nome"
                        type="text"
                        autoCapitalize="none"
                        autoComplete="name"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="pl-12 pr-4"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="user_email">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <MdEmail className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />

                      <Input
                        id="user_email"
                        placeholder="E-mail"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="pl-12 pr-4"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="user_password">
                    Senha
                  </FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <MdPassword className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />
                      <Input
                        id="user_password"
                        autoCorrect="off"
                        autoComplete="password"
                        type="password"
                        placeholder="Senha"
                        disabled={isLoading}
                        className="pl-12 pr-4"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading}>Criar conta</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
