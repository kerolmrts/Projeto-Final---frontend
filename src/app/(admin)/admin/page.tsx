import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Jobs = () => {
  return (
    <main className="mx-10 max-w-5xl text-2xl gap-2 my-10">
      Vagas
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Título</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead className="text-right">Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Estágio em xxx</TableCell>
            <TableCell>Publicado</TableCell>
            <TableCell>Direito</TableCell>
            <TableCell>TJRN</TableCell>
            <TableCell className="text-right">17/01/2024</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Estágio</TableCell>
            <TableCell>Publicado</TableCell>
            <TableCell>Direito</TableCell>
            <TableCell>TJRN</TableCell>
            <TableCell className="text-right">17/01/2024</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}

export default Jobs