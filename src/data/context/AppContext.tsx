import { createContext } from "react";

type Tema = "dark" | "";

interface AppContextProps {
  tema: Tema;
}

const AppContext = createContext<AppContextProps>({
  tema: "",
});

export function AppProvider(props: any) {
  return (
    <AppContext.Provider
      value={{
        tema: "dark",
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
