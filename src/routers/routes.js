import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import config from '~/config';
// Dùng cho những routers không cần đăng nhập vẫn xem được
const publlicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.upload, component: Search, layout: null },
];

// Cần phải đăng nhập, nếu không đăng nhập sẽ chuyển hướng sang trang login
const privateRoutes = [];

export { publlicRoutes, privateRoutes };
