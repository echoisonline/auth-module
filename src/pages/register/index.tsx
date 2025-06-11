import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { logo } from "../../shared/assets/logo-primary";
import { detectCountry, userCountry } from "../../shared/lib/detectCountry";
import { YandexAuthButton } from "../../shared/ui/YandexAuthButton";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState("");
  const [employees, setEmployees] = useState("");
  const [businessType, setBusinessType] = useState("");

  useEffect(() => {
    detectCountry;
  });

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isDigitsOnly = (value: string) => /^\d+$/.test(value);

  const handleRegister = () => {
    if (!isValidEmail(email)) {
      alert("Введите корректный email");
      return;
    }
    if (!phone.trim()) {
      alert("Введите номер телефона");
      return;
    }
    if (!isDigitsOnly(phone)) {
      alert("Телефон должен содержать только цифры");
      return;
    }

    localStorage.setItem("token", "registered-mock-token");
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    console.log({ company, employees, businessType });
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="max-w-screen w-[80%] lg:w-[900px]">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          radius="none"
          placeholder="Введите Телефон..."
          variant="bordered"
          label="Телефон"
          labelPlacement="outside"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="agreement text-content1-foreground mb-4">
        Нажимая кнопку "Продолжить", Вы подтверждаете что ознакомились и
        согласны, с{" "}
        <a
          className="agreement__buttons"
          href="https://docs.aitextura.com/policies/ru/publichnaya-oferta"
        >
          Офертой,{" "}
        </a>
        <a
          className="agreement__buttons"
          href="https://docs.aitextura.com/policies/ru/polzovatelskoe-soglashenie"
        >
          Пользовательским соглашением{" "}
        </a>
        и{" "}
        <a
          className="agreement__buttons"
          href="https://docs.aitextura.com/policies/ru/politika-konfidencialnosti"
        >
          Политикой конфиденциальности
        </a>
      </div>
      <div>
        <Button
          className="w-full mb-4"
          color="primary"
          variant="solid"
          onPress={handleRegister}
        >
          Продолжить
        </Button>
        <div className="text-center">
          У вас уже есть учётная запись?{" "}
          <a className="text-primary" href="/login">
            Войти
          </a>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalContent className="bg-background">
          <ModalHeader className="text-center text-secondary">
            <h1 className="w-full text-center">Расскажите о себе</h1>
          </ModalHeader>
          <ModalBody>
            <Input
              color="default"
              label="Название компании"
              labelPlacement="outside"
              placeholder="Введите название"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <Input
              label="Сколько человек"
              labelPlacement="outside"
              placeholder="Введите кол-во человек"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
            />
            <Input
              label="Сфера бизнеса"
              labelPlacement="outside"
              placeholder="Например: IT, строительство"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full"
              color="primary"
              onPress={handleModalSubmit}
            >
              Сохранить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Register;
