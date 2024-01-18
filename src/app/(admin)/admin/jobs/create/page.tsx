"use client"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  titulo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  requisito: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  curso: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bolsa: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  tipo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  turno: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
 imagem: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const CreateJob = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     titulo: "",
     requisito:"",
     curso:"",
     tipo:"",
     turno:"",
     bolsa:"",
     imagem:"",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <main className="mx-10 max-w-5xl text-2xl gap-2 my-10">
      Criar Vaga
      <div className="w-[1000px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requisito"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requisitos</FormLabel>
                  <FormControl>
                    <Textarea placeholder="requisitos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bolsa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bolsa-auxílio</FormLabel>
                  <FormControl>
                    <Input placeholder="valor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="turno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Turno</FormLabel>
                  <FormControl>
                    <Input placeholder="manhã ou tarde" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="curso"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Curso</FormLabel>
                  <FormControl>
                    <Input placeholder="cursos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tipo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <FormControl>
                    <Input placeholder="Grad ou pós" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imagem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagem</FormLabel>
                  <FormControl>
                    <Input placeholder="link" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  )
}

export default CreateJob
