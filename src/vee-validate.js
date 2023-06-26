import { createApp } from 'vue';
import {
  Field,
  Form,
  ErrorMessage,
  defineRule,
  configure,

} from 'vee-validate';
import { required, min, max, email } from '@vee-validate/rules';

// Register the validation rules
defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('email', email);

// Configure the validation messages
configure({
  generateMessage: ({ field, rule }) => {
    const messages = {
      required: `The ${field} field is required.`,
      min: `The ${field} field must be at least ${rule.params.min} characters.`,
      max: `The ${field} field must not exceed ${rule.params.max} characters.`,
      email: `The ${field} field must be a valid email address.`,

    };

    return messages[rule.name] || `The ${field} field is invalid.`;
  },
  validateOnBlur: true, // Validate on blur

});


const app = createApp();

// Global components
app.component('FormField', Field);
app.component('FormComponent', Form);
app.component('ErrorMessage', ErrorMessage);

export default app;
