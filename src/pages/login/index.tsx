import { useEffect, useState } from "react";
import { Button, Input } from "@heroui/react";
import { logo } from "../../shared/assets/logo-primary";
import { detectCountry } from "../../shared/lib/detectCountry";
import { YandexAuthButton } from "../../shared/ui/YandexAuthButton";
import { useNavigate } from "react-router-dom";
import { useCountry } from "../../shared/context/CountryContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { country, setCountry } = useCountry();

  useEffect(() => {
    detectCountry.then(() => {
      const c = localStorage.getItem("userCountry");
      if (c) setCountry(c);
    });
  }, [setCountry]);

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Ошибка авторизации");

      const data = await res.json();
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-[480px]">
      <div className="flex flex-col gap-y-4 mb-6 items-center text-center">
        <a className="mb-6" href="/">
          <img className="h-[60px]" src={logo} alt="" />
        </a>
        {country == "RU" ? (
          <YandexAuthButton />
        ) : (
          <div className="h-[40px] w-[183px]">
            <script src="https://accounts.google.com/gsi/client" async></script>
            <div
              id="g_id_onload"
              data-client_id="YOUR_GOOGLE_CLIENT_ID"
              data-login_uri="https://your.domain/your_login_endpoint"
              data-auto_prompt="false"
            ></div>
            <div
              className="g_id_signin"
              data-type="standard"
              data-size="large"
              data-theme="outline"
              data-text="sign_in_with"
              data-shape="rectangular"
              data-logo_alignment="left"
            ></div>
          </div>
        )}
      </div>
      <hr className="mt-4 mb-4 text-[#dee2e6]" />
      <div className="mt-12 mb-4">
        <Input
          type="email"
          required
          radius="none"
          className="mb-12"
          placeholder="Введите Email..."
          variant="bordered"
          label="Email адрес"
          labelPlacement="outside"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          radius="none"
          placeholder="Введите пароль..."
          variant="bordered"
          label="Пароль"
          labelPlacement="outside"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-danger-500 mt-2">{error}</p>}
      </div>
      <div className="text-center">
        <Button
          radius="sm"
          className="w-full mb-4"
          color="primary"
          variant="solid"
          onPress={handleLogin}
        >
          Войти
        </Button>
        <Button
          className="w-full mb-4"
          color="primary"
          variant="ghost"
          onPress={() => navigate("/register")}
        >
          Регистрация
        </Button>
        <a href="">Забыл пароль</a>
      </div>
    </div>
  );
}

export default Login;
