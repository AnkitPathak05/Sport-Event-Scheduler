import Profile from '../components/Profile/Profile'
import Home from '../components/Home/Home'
import Events from '../components/upcomin_events/Events'
import Contact from '../components/contact/Contact'
import Find from '../components/Find/Find'

export const routes=[
    {path:'/', element :<Home/>},
    {path:'upcoming', element :<Events/>},
    {path:'find-events', element :<Find/>},
    {path:'contact', element :<Contact/>},
    {path:'profile', element :<Profile/>},

]

