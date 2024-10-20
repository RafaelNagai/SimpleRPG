import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from '../pages/StartPage'
import StoryPage from '../pages/StoryPage'

const GuideRoutes = {
    "/SimpleRPG": <StartPage />,
    "/SimpleRPG/story": <StoryPage />
}

const RouteManager = () => {
    return (
        <BrowserRouter>
            <Routes>
            {
                Object.entries(GuideRoutes).map(([key, value]) => (
                    <Route key={key} path={key} element={value} />
                ))
            }
            </Routes>
        </BrowserRouter>
    )
}

export default RouteManager;
export { GuideRoutes };