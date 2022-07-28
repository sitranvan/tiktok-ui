import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes';
// Dùng cho những routers không cần đăng nhập vẫn xem được
const publlicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.upload, component: Search, layout: null },
];

// Cần phải đăng nhập, nếu không đăng nhập sẽ chuyển hướng sang trang login
const privateRoutes = [];

export { publlicRoutes, privateRoutes };
