import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { createNavigateHandler } from "../../shared/lib/navigation";
import { logo } from "../../shared/lib/assets/logo-primary";
import { useEffect } from "react";
import { detectCountry } from "../../shared/lib/detectCountry";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = createNavigateHandler(navigate);

  useEffect(() => {
    detectCountry;
  });

  return (
    <div className="flex flex-col gap-x-4 p-[15px]">
      <img className="h-[60px] mb-6" src={logo} alt="" />
      <div>
        <Button
          onPress={handleNavigate("register")}
          color="primary"
          variant="solid"
        >
          Зарегестрироваться
        </Button>
        <Button
          onPress={handleNavigate("login")}
          color="primary"
          variant="solid"
        >
          Войти
        </Button>
      </div>
    </div>
  );
}

export default Home;
