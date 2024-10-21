import { useNavigationManager } from "../router/NavigationManager";

function StartPage() {
    const { navigateTo } = useNavigationManager();
    return (
        <div>
            <div>Let's play</div>
            <button onClick={() => navigateTo('/story')}>Start Game</button>
        </div>
    );
}

export default StartPage;