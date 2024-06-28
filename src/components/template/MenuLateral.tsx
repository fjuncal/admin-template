import MenuItem from "./MenuItem";
import { IconeCasa, IconeAjustes, IconeSino, IconeSair } from "../icons";
import Logo from "./Logo";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col">
      <div
        className={`
          flex flex-col items-center justify-center
          bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
        `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul className="">
        <MenuItem
          url="/"
          onClick={() => console.log("Logout")}
          texto="Sair"
          icone={IconeSair}
        />
      </ul>
    </aside>
  );
}
