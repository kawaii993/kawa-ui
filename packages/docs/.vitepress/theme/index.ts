import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import kawaUI from "kawa-ui";
import { ElementPlusContainer } from "../../../../libs/vitepress-preview-component";

import '@vitepress-demo-preview/component/dist/style.css'
import "kawa-ui/dist/index.css";

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.component("demo-preview", ElementPlusContainer);
        app.use(kawaUI);
    },
};
