import { Header } from "@/src/components/app/header";
import { ThemeProvider } from "@/src/components/global/themeProvider";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <ThemeProvider>
      <main className="bg-background flex h-screen flex-row gap-2">
        <Header />
        <Outlet />
      </main>
    </ThemeProvider>
  );
};
