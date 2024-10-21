import { useNavigate } from "react-router-dom";

function useNavigationManager() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(`/SimpleRPG${path}`);
    };
    return { navigateTo };
}

export { useNavigationManager }