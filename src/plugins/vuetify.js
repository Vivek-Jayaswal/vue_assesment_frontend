import { createVuetify } from 'vuetify'; 
// import 'vuetify/styles';  
import '@mdi/font/css/materialdesignicons.css';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',  // Make sure default icon set is set to 'mdi'
  },
  components,
  directives
});

export default vuetify;
