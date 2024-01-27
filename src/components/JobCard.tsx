import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const JobCard = () => {
    return(
<Card className="w-80">
  <CardHeader>
    <img
      src="https://www.defensoria.rn.def.br/media/noticia_imagem/DSC_0353_CAPA.jpg"
      alt=""
      className="w-72 h-72 object-cover"
    />
  </CardHeader>
  <CardContent>
    <p className="text-base pb-4">Categoria xx</p>
    <p className="text-xl">
      {" "}
      Vaga de estágio - curso xx - requisitos xx - bolsa xx{" "}
    </p>
  </CardContent>
  <CardFooter>
    <p className="text-base">Publicada em</p>
  </CardFooter>
</Card>
)}