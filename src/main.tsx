import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import { makeServer } from "./mirage/server";
import { CountryProvider } from "./shared/context/CountryContext";
if (import.meta.env.DEV) makeServer();

const Home = lazy(() => import("./pages/home"));
const Register = lazy(() => import("./pages/register"));
const Login = lazy(() => import("./pages/login"));

const basename = import.meta.env.DEV ? "/auth-module/" : "/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex w-screen h-screen justify-center items-center">
          <img src="/suspense.gif" className="mx-auto" />
        </div>
      }
    >
      <CountryProvider>
        <HeroUIProvider>
          <main className="light text-foreground bg-background w-full h-screen flex justify-center items-center">
            <BrowserRouter basename={basename}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </main>
        </HeroUIProvider>
      </CountryProvider>
    </Suspense>
  </React.StrictMode>
);
