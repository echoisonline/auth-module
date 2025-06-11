import React from "react";

const CLIENT_ID = "ТВОЙ_CLIENT_ID";
const REDIRECT_URI = "https://your-site.com/auth/callback";

function generateState(): string {
  return Math.random().toString(36).substring(2);
}

export const YandexAuthButton = () => {
  const handleClick = () => {
    const state = generateState();
    localStorage.setItem("yandex_oauth_state", state);

    const url = new URL("https://oauth.yandex.ru/authorize");
    url.searchParams.set("response_type", "code");
    url.searchParams.set("client_id", CLIENT_ID);
    url.searchParams.set("redirect_uri", REDIRECT_URI);
    url.searchParams.set("state", state);
    url.searchParams.set("scope", "login:info email");

    window.location.href = url.toString();
  };

  return (
    <div>
      <button
        className="flex flex-row items-center gap-x-4 bg-black py-2 px-[12px] rounded-2xl"
        onClick={handleClick}
      >
        <svg
          width="36"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="12" fill="#FC3F1D"></rect>
          <path
            d="M24.7406 33.9778H29.0888V9.04445H22.7591C16.3928 9.04445 13.0537 12.303 13.0537 17.1176C13.0537 21.2731 15.2186 23.6164 19.0531 26.1609L21.3831 27.6987L18.3926 25.1907L12.4666 33.9778H17.1817L23.5113 24.5317L21.3097 23.0672C18.6494 21.2731 17.3468 19.8818 17.3468 16.8613C17.3468 14.2069 19.2182 12.4128 22.7775 12.4128H24.7222V33.9778H24.7406Z"
            fill="white"
          ></path>
        </svg>{" "}
        <div className="text-white">Войти с Яндекс ID</div>
      </button>
    </div>
  );
};
