import MenuItem from "./MenuItem";
import { IconeCasa, IconeAjustes, IconeSino } from "../icons";

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/novidades" texto="Novidades" icone={IconeSino} />
      </ul>
    </aside>
  );
}
