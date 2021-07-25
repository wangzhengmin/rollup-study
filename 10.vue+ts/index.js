import Button from './src/button.vue';

Button.install = (app) => {
  app.components(Button.name, Button)
}
export default Button;
