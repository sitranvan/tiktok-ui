import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Dùng cho những routers không cần đăng nhập vẫn xem được
const publlicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Cần phải đăng nhập, nếu không đăng nhập sẽ chuyển hướng sang trang login
const privateRoutes = [];

export { publlicRoutes, privateRoutes };
