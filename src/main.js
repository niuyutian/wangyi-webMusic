import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"//注意只有后缀名为js的才可以省略后缀
import "@/styles/reset.css"
import router from '@/router' //路由对象
import { Tabbar, TabbarItem ,Col, Row ,NavBar } from 'vant';
import { Image as VanImage } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon} from 'vant';
import { Search } from 'vant';
import { List } from 'vant';

Vue.use(List);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
