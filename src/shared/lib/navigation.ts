import { type NavigateFunction } from "react-router-dom";

export const createNavigateHandler = (navigate: NavigateFunction) => {
  return (path: string) => () => {
    navigate(path);
  };
};

// Использовангие:
// const navigate = useNavigate();
// const handleNavigate = createNavigateHandler(navigate);
