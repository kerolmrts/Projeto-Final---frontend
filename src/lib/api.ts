import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
    const response = await fetch(`${apiUrl}/jobs`)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.error("Erro ao carregar os vagas", error)
    return []
  }
}
export const getJobById = async (id: string) => {
  try {
    const response = await fetch(
      `${apiUrl}/jobs/${id}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erro ao carregar os vagas", error);
    return [];
  }
};

export const deleteJobById = async (id: string) => {
  try {
    const response = await fetch(
      `${apiUrl}/jobs/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erro ao deletar o vaga", error);
    return [];
  }
};
export const updateJobClick = async (id: string) => {
  console.log("API Click")
  try {
    const response = await fetch(
      `${apiUrl}/jobs/${id}/click`,
      {
        method: "PATCH",
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erro ao atualizar o vaga", error);
    return [];
  }
};

export const editJobById = async (data: object, id: string) => {
  try {
    const response = await fetch(
      `${apiUrl}/jobs/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erro ao editar o vaga", error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(
      `${apiUrl}/categories`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Erro ao carregar as categorias", error);
    return [];
  }
};

export const createJob = async (data: object) => {
  try {
    const response = await fetch(
      `${apiUrl}/jobs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao criar o vaga: ", error);
    return null;
  }
};

