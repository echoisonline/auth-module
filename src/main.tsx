import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import Home from "./pages/home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className="light text-foreground bg-background">
        <Home />
      </main>
    </HeroUIProvider>
  </React.StrictMode>
);
