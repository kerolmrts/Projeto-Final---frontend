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
import { createJob, deleteJobById, editJobById, getJobById} from "@/lib/api"
import { Job } from "@/lib/types"



const formSchema = z.object({
  job_title: z.string(),

  job_requirements: z.string(),

  job_description: z.string(),

  job_category: z.string(),

  job_pay: z.string(),

  job_email: z.string(),

  job_type: z.string(),

  job_shift: z.string(),

  job_image: z.string(),

  job_company: z.string(),

  _id: z.string(),
})

const EditJob = ({ params }: { params: { id: string } }) => {
   const _id: string = params.id
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      job_title: "",
      job_requirements: "",
      job_category: "",
      job_description: "",
      job_type: "",
      job_email: "",
      job_shift: "",
      job_pay: "",
      job_image: "",
      job_company: "",
      _id: "",
    },
  })


  const deleteJobByIdAPI = async (id: string) => {
    try {
      await deleteJobById(id)
      window.location.href = "/admin"
    } catch (error) {
      console.log(error)
    }
  }

  const [job, setJob] = React.useState<Job | null>(null)

  // Função para realizar a pesquisa de produtos usando a API
  const fetchJobAPI = React.useCallback(async () => {
    console.log(_id)
    try {
      const response: Job = await getJobById(_id)
      console.log(response)

      if (response) {
        setJob(response)
        form.setValue("job_title", response.job_title || "")
         form.setValue("job_description", response.job_description || "")
        form.setValue("job_email", response.job_email || "")
        form.setValue("job_requirements", response.job_requirements || "")
        form.setValue("job_category", response.job_category || "")
        form.setValue("job_type", response.job_type || "")
        form.setValue("job_shift", response.job_shift || "")
        form.setValue("job_pay", response.job_pay || "")
        form.setValue("job_image", response.job_image || "")
        form.setValue("job_company", response.job_company || "")
        form.setValue("_id", response._id || "")
      }
    } catch (error) {
      console.error("Erro ao obter vaga", error)
      setJob(null)
    }
  }, [_id, form])

  // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
  React.useEffect(() => {
    fetchJobAPI()
  }, [fetchJobAPI])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { _id, ...valuesWithoutId } = values

    console.log("Editando vaga", _id)

    const response = await editJobById(_id, valuesWithoutId)

    if (response) {
      alert("Vaga editada com sucesso")
    }
  }


  return (
    <main className="mx-10 max-w-5xl text-2xl gap-2 my-10">
      Editar Vaga
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
              name="job_company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da Empresa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="job_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="job_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descrição" {...field} />
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
            <Button type="submit">Alterar Vaga</Button>
          </form>
        </Form>
        <Button
          type="button"
          variant={"destructive"}
          onClick={() => deleteJobByIdAPI(_id)}
          className="mt-4"
        >
          {" "}
          Deletar Vaga{" "}
        </Button>
      </div>
    </main>
  )
}

export default EditJob



