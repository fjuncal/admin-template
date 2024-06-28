import { createContext } from "react";

type Tema = "dark" | "";

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  function alternarTema() {
    console.log("alternarTema...");
  }
  return (
    <AppContext.Provider
      value={{
        tema: "dark",
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
