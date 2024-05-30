import { createApp } from './main';
import './style.css';

import SvgIcon from "~virtual/svg-component";
import { variables } from './utils';

const { app, router } = createApp(false);
app.component(SvgIcon.name??"SvgIcon", SvgIcon);
variables.router = router;
router.isReady().then(() => {
  app.mount('#app', true);
});
