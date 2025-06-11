import { createContext, useContext, useEffect, useState } from "react";

const CountryContext = createContext<{
  country: string | null;
  setCountry: (val: string) => void;
}>({
  country: null,
  setCountry: () => {},
});

export const useCountry = () => useContext(CountryContext);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [country, setCountry] = useState<string | null>(
    localStorage.getItem("userCountry")
  );

  useEffect(() => {
    localStorage.setItem("userCountry", country || "");
  }, [country]);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
