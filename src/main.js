import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import veeValidateApp from "./vee-validate"
import router from './router';



createApp(App)
  .use(ElementPlus)
  .use(veeValidateApp)
  .use(router)
  .mount('#app');


  // Fetching Data:

  // Make HTTP requests to noblepig.com API to retrieve the 5 latest posts.
  // Parse the JSON response and extract the required data.
  // Display the fetched data in the appropriate component(s).
  // Git Version Control:
  
  // Initialize a Git repository in your project folder: git init
  // Commit your changes regularly: git add . followed by git commit -m "Commit message"
  // Testing and Refinement:
  
  // Test the application thoroughly, ensuring all features and functionalities work as intended.
  // Refine the UI, fix any bugs or issues, and optimize the performance of the app.