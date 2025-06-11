import { Button, Input } from "@heroui/react";
import { logo } from "../../shared/lib/assets/logo-primary";
import { userCountry } from "../../shared/lib/detectCountry";
import { YandexAuthButton } from "../../shared/lib/ui/YandexAuthButton";

function Register() {
  return (
    <div className="w-[480px]">
      <div className="flex flex-col gap-y-4 mb-6 items-center text-center">
        <a className="mb-6" href="/">
          <img className="h-[60px]" src={logo} alt="" />
        </a>
        <h1 className="text-secondary">Создать учетную запись</h1>
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
          radius="none"
          placeholder="Введите Телефон..."
          variant="bordered"
          label="Телефон"
          labelPlacement="outside"
        ></Input>
      </div>
      <div className="agreement text-content1-foreground mb-4">
        Нажимая кнопку "Продолжить", Вы подтверждаете что ознакомились и
        согласны, с{" "}
        <a
          className="agreement__buttons"
          href="https://docs.aitextura.com/policies/ru/publichnaya-oferta"
        >
          Офертой,
        </a>{" "}
        <a
          className="agreement__buttons"
          href="https://docs.aitextura.com/policies/ru/polzovatelskoe-soglashenie"
        >
          {" "}
          Пользовательским соглашением
        </a>{" "}
        и{" "}
        <a
          className="agreement__buttons"
          href="https://docs.aitextura.com/policies/ru/politika-konfidencialnosti"
        >
          Политикой конфиденциальности
        </a>
      </div>
      <div>
        <Button className="w-full mb-4" color="primary" variant="solid">
          Продолжить
        </Button>
        <div className="text-center">
          У вас уже есть учётная запись?{" "}
          <a className="text-primary" href="/login">
            Войти
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
