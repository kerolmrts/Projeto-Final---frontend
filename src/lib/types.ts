export interface Job {
  image: string | undefined
  _id: string
  job_title: string
  job_email: string
  job_requirements: string | null
  job_description: string | null
  job_category: string
  job_shift: string | null
  job_type: string
  job_pay: string | null
  job_image: string
  job_createdAt: Date // Alterado para number para armazenar timestamps
  job_updatedAt: Date // Alterado para number para armazenar timestamps
  job_clicks: number
  job_company: string
}


export interface UserData {
  id: string
  name: string
  username: string
  email: string
  imagePath: string
  passwordHash: string
  createdAt: Date
  updatedAt: Date
  token: string
}