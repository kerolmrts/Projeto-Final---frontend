import React, { FC } from "react";
import { Home as HomeIcon, Search, User, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  rest?: any; // Rest props
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose, ...rest }) => {
  const { theme, toggleTheme } = useTheme()
  const drawerStyle: React.CSSProperties = {
    marginLeft: isOpen ? "0" : "-230px",
  }
  const { data: session, status } = useSession()
  const router = useRouter()

  return (
    <aside
      {...rest}
      className={`relative w-72 px-3 pt-20 min-h-screen overflow-auto shadow-lg ${
        theme === "dark"
          ? "bg-zinc-800 text-zinc-200"
          : "bg-white text-zinc-800"
      }`}
      style={drawerStyle}
    >
      <button
        onClick={onClose}
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-zinc-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {isOpen ? <ArrowLeft /> : <ArrowRight />}
      </button>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={toggleTheme}
          checked={theme === "dark"}
        ></input>

        <div
          className={`w-11 h-6 ${
            theme === "dark"
              ? "bg-gray-700 peer-checked:bg-zinc-500 "
              : "bg-gray-200 peer-checked:white "
          } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-300 dark:peer-focus:ring-zinc-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
        ></div>

        <span className="ml-3 text-sm font-medium">
          {theme === "dark" ? "Tema Escuro" : "Tema claro"}
        </span>
      </label>

      <nav className="space-y-5 mt-5">
        <Link href="/home" passHref>
          <a className="flex items-center gap-3 text-sm font-semibold">
            <HomeIcon />
            Início
          </a>
        </Link>

        <Link href="/perfil" passHref>
          <a className="flex items-center gap-3 text-sm font-semibold">
            <User />
            Cadastrar Perfil
          </a>
        </Link>

        <Link href="/buscador" passHref>
          <a className="flex items-center gap-3 text-sm font-semibold">
            <Search />
            Buscador
          </a>
        </Link>
      </nav>

      <div className="mt-6 pt-6  flex flex-col gap-1">
        <p>Categorias</p>
        <Link href="/#acao" passHref>
          <a className="text-sm hover:text-zinc-100">Ação</a>
        </Link>
        <Link href="/#comedia" passHref>
          <a className="text-sm hover:text-zinc-100">Comédia</a>
        </Link>
        <Link href="/#drama" passHref>
          <a className="text-sm hover:text-zinc-100">Drama</a>
        </Link>

        <Link href="/#romance" passHref>
          <a className="text-sm hover:text-zinc-100">Romance</a>
        </Link>

        <Link href="/#terror" passHref>
          <a className="text-sm hover:text-zinc-100 mb-5">Terror</a>
        </Link>
      </div>
    </aside>
  )
}
