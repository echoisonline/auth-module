import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import { makeServer } from "./mirage/server";
if (import.meta.env.DEV) makeServer();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className="light text-foreground bg-background w-full h-screen flex justify-center items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </main>
    </HeroUIProvider>
  </React.StrictMode>
);
