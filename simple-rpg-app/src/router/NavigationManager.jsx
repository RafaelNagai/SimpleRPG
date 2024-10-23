import { useNavigate } from "react-router-dom";

function useNavigationManager() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(`/QaisStory${path}`);
    };
    return { navigateTo };
}

export { useNavigationManager }