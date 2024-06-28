import Link from "next/link";

interface MenuItemProps {
  url: string;
  texto: string;
  icone: any;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <li
      onClick={props.onClick}
      className={`
    hover:bg-gray-300
    cursor-pointer
    `}
    >
      <Link
        href={props.url!}
        className={`
        flex flex-col justify-center items-center
        h-20 w-20`}
      >
        {props.icone}
        <span
          className={`
          text-xs font-light text-gray-600`}
        >
          {props.texto}
        </span>
      </Link>
    </li>
  );
}
