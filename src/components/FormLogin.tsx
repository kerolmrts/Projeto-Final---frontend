"use client"

import * as React from "react"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MdEmail, MdPassword } from "react-icons/md"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { authUser } from "@/lib/api"
import useAuthInfo from "@/hooks/useAuth"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  email: z.string().min(5, {
    message: "Seu email precisa ter pelo menos 5 dígitos",
  }),
  password: z.string().min(6, {
    message: "Sua senha precisa ter pelo menos 6 dígitos",
  }),
})

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const AuthContext = useAuthInfo()
  const { login } = AuthContext

  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      const response = await authUser(values)
      if (response) {
        login(response)
        {
        alert("Login realizado com sucesso!")
        }
        form.reset()
        router.push("/admin")
      
      } else {
      alert("Ops, algo deu errado!")
      }
    } catch (error: any) {
     alert(error.message)
      console.error(error.message)
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="email">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <MdEmail className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />

                      <Input
                        id="email"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="password">
                    Senha
                  </FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <MdPassword className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />
                      <Input
                        id="password"
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

            <Button disabled={isLoading}>
              Entrar
            </Button>
          </div>
        </form>
      </Form>
      
    </div>
  )
}
