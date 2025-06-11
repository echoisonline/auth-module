import { heroui } from "@heroui/react";
/** @type {import('tailwindcss').Config} */
export const content = [
  // ...
  // make sure it's pointing to the ROOT node_module
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [
  heroui({
    themes: {
      light: {
        colors: {
          default: {
            50: "#fafafa",
            100: "#f2f2f3",
            200: "#ebebec",
            300: "#e3e3e6",
            400: "#dcdcdf",
            500: "#d4d4d8",
            600: "#afafb2",
            700: "#8a8a8c",
            800: "#656567",
            900: "#404041",
            foreground: "#353c48",
            DEFAULT: "#353c48",
          },
          primary: {
            50: "#e3f6ff",
            100: "#bce9ff",
            200: "#94ddff",
            300: "#6dd0ff",
            400: "#45c4ff",
            500: "#1eb7ff",
            600: "#1997d2",
            700: "#1477a6",
            800: "#0e5779",
            900: "#09374d",
            foreground: "#ffffff",
            DEFAULT: "#1eb7ff",
          },
          secondary: {
            50: "#dff4fe",
            100: "#b3e5fd",
            200: "#86d6fb",
            300: "#59c6fa",
            400: "#2db7f8",
            500: "#00a8f7",
            600: "#008bcc",
            700: "#006da1",
            800: "#005075",
            900: "#00324a",
            foreground: "#000",
            DEFAULT: "#353c48",
          },
          success: {
            50: "#e2f8ec",
            100: "#b9efd1",
            200: "#91e5b5",
            300: "#68dc9a",
            400: "#40d27f",
            500: "#17c964",
            600: "#13a653",
            700: "#0f8341",
            800: "#0b5f30",
            900: "#073c1e",
            foreground: "#000",
            DEFAULT: "#17c964",
          },
          warning: {
            50: "#fef4e4",
            100: "#fce4bd",
            200: "#fad497",
            300: "#f9c571",
            400: "#f7b54a",
            500: "#f5a524",
            600: "#ca881e",
            700: "#9f6b17",
            800: "#744e11",
            900: "#4a320b",
            foreground: "#000",
            DEFAULT: "#f5a524",
          },
          danger: {
            50: "#fee1eb",
            100: "#fbb8cf",
            200: "#f98eb3",
            300: "#f76598",
            400: "#f53b7c",
            500: "#f31260",
            600: "#c80f4f",
            700: "#9e0c3e",
            800: "#73092e",
            900: "#49051d",
            foreground: "#000",
            DEFAULT: "#f31260",
          },
          background: "#f9fafc",
          foreground: "#8493a5",
          content1: {
            DEFAULT: "#8493a5",
            foreground: "#8493a5",
          },
          content2: {
            DEFAULT: "#f4f4f5",
            foreground: "#000",
          },
          content3: {
            DEFAULT: "#e4e4e7",
            foreground: "#000",
          },
          content4: {
            DEFAULT: "#d4d4d8",
            foreground: "#000",
          },
          focus: "#006FEE",
          overlay: "#000000",
        },
      },
    },
    layout: {
      disabledOpacity: "0.6",
    },
  }),
];
