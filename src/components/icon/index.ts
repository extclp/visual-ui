import { App } from "vue";
import Icon from "./src/icon.vue";

Icon.install = function(app: App) {
    app.component(Icon.name!, Icon)
}

export default Icon;