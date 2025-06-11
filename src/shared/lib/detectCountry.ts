export const detectCountry = fetch(
  "https://ipinfo.io/json?token=06a1afe2bd09d7"
)
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("userCountry", data.country);
  });

export const userCountry = localStorage.getItem("userCountry")
  ? localStorage.getItem("userCountry")
  : null;
