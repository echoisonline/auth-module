import { Button, ButtonGroup } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { createNavigateHandler } from "../../shared/lib/navigation";
import { logo } from "../../shared/assets/logo-primary";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = createNavigateHandler(navigate);

  return (
    <div className="flex flex-col items-center gap-x-4 p-[15px]">
      <img className="h-[60px] mb-6" src={logo} alt="" />
      <div>
        <ButtonGroup>
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
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Home;
