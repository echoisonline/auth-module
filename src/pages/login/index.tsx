import { Button } from "@heroui/react";
import { createNavigateHandler } from "../../shared/lib/navigation";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleNavigate = createNavigateHandler(navigate);
  return (
    <div className="light bg-background">
      <div>Login</div>
      <Button color="primary" variant="solid" onPress={handleNavigate("/")}>
        ДОМОЙ
      </Button>
      <Button
        color="primary"
        variant="solid"
        onPress={handleNavigate("/register")}
      >
        ЗАРЕГАТЬСЯ
      </Button>
    </div>
  );
}

export default Login;
