import AccountPage from '@pages/AccountPage'
import SettingsPage from '@pages/SettingsPage'
import DashboardPage from '@pages/DashboardPage'

const routes = [
    { path: '/', name: 'dashboard', component: DashboardPage },
    { path: '/settings', name: 'settings', component: SettingsPage },
    { path: '/account', name: 'account', component: AccountPage },
]

export default routes
