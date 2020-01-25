import Vue from "vue";
import Vuetify from "vuetify/lib";
import ja from "vuetify/src/locale/ja";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ff9800",
        secondary: "#ff5722",
        accent: "#e91e63",
        error: "#f44336",
        warning: "#673ab7",
        info: "#3f51b5",
        success: "#2196f3"
      }
    }
  },
  lang: {
    locales: { ja },
    current: "ja"
  },
  icons: {
    iconfont: "fa"
  }
});
