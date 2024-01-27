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
import { createJob } from "@/lib/api"

const formSchema = z.object({
  job_title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  job_requirements: z.string().min(2, {
    message: "Requirements must be at least 10 characters.",
  }),
  job_description: z.string().min(2, {
    message: "Description must be at least 20 characters.",
  }),
  job_category: z.string().min(2, {
    message: "Category must be at least 10 characters.",
  }),
  job_pay: z.string(),

  job_type: z.string(),

  job_shift: z.string(),

  job_image: z.string(),
})

const CreateJob = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      job_title: "",
      job_requirements: "",
      job_category: "",
      job_type: "",
      job_shift: "",
      job_pay: "",
      job_image: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const success = await createJob(values)
  }
  return (
    <main className="mx-10 max-w-5xl text-2xl gap-2 my-10">
      Criar Vaga
      <div className="w-[1000px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="job_title"
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
              name="job_requirements"
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
              name="job_pay"
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
              name="job_shift"
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
              name="job_category"
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
              name="job_type"
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
              name="job_image"
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
