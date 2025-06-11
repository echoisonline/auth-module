export const detectCountry = fetch(
  `https://ipinfo.io/json?token=${import.meta.env.VITE_IPINFO_TOKEN}`
)
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("userCountry", data.country);
  });
