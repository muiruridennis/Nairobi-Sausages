<template>
  <div class="main">
    <div class="submit-pig-details">
      <div class="top-app-bar">
      <svg class="hamburg" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icons/menu_24px">
        <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M3.60193 7.90291V6.15533H19.3301V7.90291H3.60193ZM3.60193 12.2718H19.3301V10.5243H3.60193V12.2718ZM3.60193 16.6408H19.3301V14.8932H3.60193V16.6408Z" fill="#49454F"/>
        </g>
      </svg>
      <h4>Nairobi Sausages</h4>
      <svg class="account" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icons/account_circle_filled_24px">
        <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M10.534 2.66019C5.71071 2.66019 1.79614 6.57475 1.79614 11.3981C1.79614 16.2214 5.71071 20.1359 10.534 20.1359C15.3573 20.1359 19.2719 16.2214 19.2719 11.3981C19.2719 6.57475 15.3573 2.66019 10.534 2.66019ZM16.0913 15.6184C14.8418 14.0981 11.8097 13.5825 10.534 13.5825C9.25828 13.5825 6.22624 14.0981 4.97672 15.6184C4.08546 14.4476 3.54372 12.9883 3.54372 11.3981C3.54372 7.54465 6.68061 4.40776 10.534 4.40776C14.3874 4.40776 17.5243 7.54465 17.5243 11.3981C17.5243 12.9883 16.9825 14.4476 16.0913 15.6184ZM7.47575 9.21358C7.47575 7.51844 8.83886 6.15533 10.534 6.15533C12.2292 6.15533 13.5923 7.51844 13.5923 9.21358C13.5923 10.9087 12.2292 12.2718 10.534 12.2718C8.83886 12.2718 7.47575 10.9087 7.47575 9.21358Z" fill="#49454F"/>
        </g>
      </svg>
      </div>
      <div class="submission-form">
        <h2>Submit Pig Details</h2>
          <form @submit.prevent="submitForm" >
          <div class="form-item">
            <label class="custom-label">Submit Batch</label>
            
            <input type="range" v-model="form.submitBatch" min="0" max="36" @input="updateSubmitBatch" :title="form.submitBatch">
            <span v-if="errors && errors.submitBatch" class="error-message">{{ errors.submitBatch }}</span>

            <span class="range-value">{{ form.submitBatch }}</span>
          </div>
          <div class="slider-labels">
            <span>0</span>
            <span>36</span>
          </div>
          <div class="form-item">
            <label class="custom-label">Breed</label>
            <select class="inputs" v-model="form.breed" placeholder="Select Breed">
              <option value="breed1">Breed 1</option>
              <option value="breed2">Breed 2</option>
              <option value="breed3">Breed 3</option>
            </select>
            <span v-if="errors && errors.breed" class="error-message">{{ errors.breed }}</span>

          </div>
          <div class="form-item"> 
            <label class="custom-label">Age</label>
            <input class="inputs" type="text" v-model="form.age">
            <span v-if="errors && errors.age" class="error-message">{{ errors.age }}</span>

          </div>
          <div class="form-item">
            <label class="custom-label">Average Weight</label>
            <input class="inputs" type="text" v-model="form.averageWeight">
            <span v-if="errors && errors.averageWeight" class="error-message">{{ errors.averageWeight }}</span>

          </div>
          <div class="form-item">
            <label class="custom-label">Ask Price per Pig</label>
            <input class="inputs" type="text" v-model="form.askPrice">
            <span v-if="errors && errors.askPrice" class="error-message">{{ errors.askPrice }}</span>

          </div>
          <div class="form-button">
            <button type="submit">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const form = ref({
      submitBatch: '',
      breed: '',
      age: '',
      averageWeight: '',
      askPrice: '',
    });
    const isFormSubmitted = ref(false);
    const errors = reactive({}); // Define errors as reactive object

    const submitForm = () => {
      isFormSubmitted.value = true;
      if (isFormValid()) {
        console.log(form.value);
        resetForm();
      }
      else console.log("form.value is not valid");
    };
    
    const resetErrors = () => {
      for (const field in errors) {
        errors[field] = ''; // Reset each error message to an empty string
      }
    };
    const resetForm = () => {
      form.value = {
        submitBatch: '',
        breed: '',
        age: '',
        averageWeight: '',
        askPrice: '',
      };
      isFormSubmitted.value = false;
    };
    const isFormValid = () => {
      resetErrors()      
      let isValid = true;

      if (form.value.submitBatch === '') {
        errors.submitBatch = 'Submit Batch is required';
        isValid = false;
      }
      if (form.value.breed === '') {
        errors.breed = 'Breed is required';
        isValid = false;
      }
      if (form.value.age === '') {
        errors.age = 'Age is required';
        isValid = false;
      }
      
      if (form.value.averageWeight === '') {
        errors.averageWeight = 'Average weight is required';
        isValid = false;
      }
      if (form.value.askPrice === '') {
        errors.askPrice = 'Ask price is required';
        isValid = false;
      }

      // ... perform validation for other form fields ...

      return isValid;
    };

    return {
      form,
      isFormSubmitted,
      submitForm,
      errors,

    };
  },
};
</script>
   
   <style scoped>
   .custom-label .el-form-item__label {
     font-size: 14px;
     font-family: Roboto;
     line-height: 15.059px;
     letter-spacing: 0.376px;
   }
   </style>

   
   
   
   
   
   
   