import { createApp } from 'vue';
import {
  Field,
  Form,
  ErrorMessage,
  defineRule,
  configure,

} from 'vee-validate';
import { required, min, max } from '@vee-validate/rules';

// Register the validation rules
defineRule('required', required);
defineRule('min', min);
defineRule('max', max);

// Configure the validation messages
configure({
  generateMessage: ({ field, rule }) => {
    const messages = {
      required: `The ${field} field is required.`,
      min: `The ${field} field must be at least ${rule.params.min} characters.`,
      max: `The ${field} field must not exceed ${rule.params.max} characters.`,
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
