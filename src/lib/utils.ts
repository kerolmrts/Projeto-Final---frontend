import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dataString: any) {
  const data = new Date(dataString)
  const options: object = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }
  const formatadorDeData = new Intl.DateTimeFormat("pt-BR", options)
  return formatadorDeData.format(data)
}
