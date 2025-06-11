import { Button, Input } from "@heroui/react";
import { logo } from "../../shared/lib/assets/logo-primary";
import { userCountry } from "../../shared/lib/detectCountry";
import { YandexAuthButton } from "../../shared/lib/ui/YandexAuthButton";

function Login() {
  return (
    <div className="w-[480px]">
      <div className="flex flex-col gap-y-4 mb-6 items-center text-center">
        <a className="mb-6" href="/">
          <img className="h-[60px]" src={logo} alt="" />
        </a>
        {userCountry == "RU" ? (
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
        ></Input>
        <Input
        type=""
          radius="none"
          placeholder="Введите пароль..."
          variant="bordered"
          label="Пароль"
          labelPlacement="outside"
        ></Input>
      </div>
      <div className="text-center">
        <Button
          radius="sm"
          className="w-full mb-4"
          color="primary"
          variant="solid"
        >
          Войти
        </Button>
        <Button className="w-full mb-4" color="primary" variant="ghost">
          Регистрация
        </Button>
        <a href="">Забыл пароль</a>
      </div>
    </div>
  );
}

export default Login;
