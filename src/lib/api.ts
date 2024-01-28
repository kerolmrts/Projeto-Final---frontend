"use server"
import axios, { AxiosResponse } from "axios"
const apiUrl = process.env.NEXT_PUBLIC_API_URL
import { UserData } from "./types"

export const searchJobs = async (searchTerm: string) => {
  try {
    if (searchTerm) {
      const response = await fetch(`${apiUrl}/jobs/search/${searchTerm}`)
      if (response.ok) {
        const data = await response.json()
        return data
      }
    }
  } catch (error) {
    console.error("Erro ao buscar a vaga", error)
    return []
  }
}


export const getJobs = async () => {
  try {
    const response = await axios.get(`${apiUrl}/jobs`)
    return response.data
  } catch (error) {
    console.error("Erro ao carregar os vagas", error)
    return []
  }
}

export const getJobById = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/jobs/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Erro ao carregar os vagas", error)
    return []
  }
}

export const deleteJobById = async (id: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/jobs/${id}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error("Erro ao deletar o vaga", error)
    return []
  }
}
export const updateJobClick = async (id: string) => {
  console.log("API Click")
  try {
    const response = await fetch(`${apiUrl}/jobs/${id}/click`, {
      method: "PATCH",
    })
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.error("Erro ao atualizar o vaga", error)
    return []
  }
}

export const editJobById = async (id: string, data: object) => {
  try {
    const response = await axios.put(`${apiUrl}/jobs/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error("Erro ao editar o vaga", error)
    return []
  }
}

export const getCategories = async () => {
  try {
    const response = await fetch(`${apiUrl}/categories`)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.error("Erro ao carregar as categorias", error)
    return []
  }
}

export const createJob = async (data: object) => {
  try {
    const response = await fetch(`${apiUrl}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const responseData = await response.json()
      return responseData
    } else {
      return null
    }
  } catch (error) {
    console.error("Erro ao criar o vaga: ", error)
    return null
  }
}

export const createUser = async (data: object) => {
  console.log("Registrando usuário")

  try {
    const response = await axios.post(`${apiUrl}/users`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.data
  } catch (error: any) {
    console.error("Erro ao criar o usuário", error.message)
    return error.message
  }
}

interface ResponseData {
  [key: string]: any
}

export const authUser = async (
  data: Record<string, unknown>
): Promise<ResponseData | false> => {
  try {
    const response: AxiosResponse = await axios.post(
      `${apiUrl}/auth/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (response.status !== 200) {
      throw new Error("Erro ao logar")
    }

    const responseData: ResponseData = response.data
    return responseData
  } catch (error: any) {
    console.error("Erro ao logar", error.message)
    return false
  }
}

export const getUser = async (
  userId: string,
  jwt: string
): Promise<UserData | false> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${apiUrl}/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )

    if (response.status !== 200) {
      throw new Error(`Erro ao obter usuário: ${response.status}`)
    }

    const responseData: UserData = response.data
    return responseData
  } catch (error: any) {
    console.error("Erro ao obter usuário", error.message)
    return false
  }
}
