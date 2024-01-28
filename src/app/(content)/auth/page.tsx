import { Metadata } from "next"
import Link from "next/link"
import { UserLoginForm } from "@/components/FormLogin"
import { UserRegisterForm } from "@/components/FormRegister"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <Navbar />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Tabs defaultValue="Criar conta" className="space-y-4">
            <TabsList>
              <TabsTrigger
                className="bg-card-foreground/15"
                value="Criar conta"
              >
                Criar conta
              </TabsTrigger>
              <TabsTrigger className="bg-card-foreground/15" value="Logar">
                Entrar
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Criar conta" className="space-y-4">
              <div>
                <div className="flex flex-col space-y-2 text-center mb-4">
                  <h1 className="mt-16 lg:mt-0 text-2xl font-semibold tracking-tight">
                    Crie uma conta
                  </h1>
                </div>
                <UserRegisterForm />
              </div>
            </TabsContent>
            <TabsContent value="Logar" className="space-y-4">
              <div className="flex flex-col space-y-2 text-center m-10">
                <h1 className="mt-16 lg:mt-0 text-2xl font-semibold tracking-tight">
                  Entrar na conta
                </h1>
              </div>
              <UserLoginForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
