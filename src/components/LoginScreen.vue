<template>
    <div class="login-screen">
        <img alt="Sausages Image" src="../assets/sausageimage.png" />
        <div class="image-container">
            <img class="nairabi-sausages-image" alt="Nairobi Sausages" src="../assets/nairobisausages.png"/>
            <svg class="svg-icon" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="sausage 1" clip-path="url(#clip0_1_147)">
                <g id="Group">
                <path id="Vector" d="M41.8811 10.0089C41.4623 7.04313 39.683 5.05422 37.6941 4.18192L38.1825 2.61179C38.5664 1.35564 37.5196 0.0298157 36.2285 0.0298157C34.9027 0.0298157 34.0652 1.35564 34.5538 2.5421C34.5538 2.5421 34.8329 3.23994 35.0073 3.65872C32.7044 3.83318 31.0297 5.85684 30.5412 8.02021C28.0639 19.0112 19.0269 28.0831 8.00099 30.5604C5.66316 31.0838 3.81395 32.7238 3.63949 35.0964C3.08119 34.8173 2.48812 34.5381 1.85997 34.5381C0.359681 34.5032 -0.477862 36.0733 0.289829 37.3644C0.603822 37.8878 1.16213 38.2367 1.75536 38.3065C2.03443 38.3415 3.49996 37.9576 4.09319 37.8181C5.24456 40.5396 8.35008 41.9702 11.3506 41.9702C17.7707 41.9702 25.6913 37.7831 32.3904 30.7698C39.0898 23.7913 42.7185 15.836 41.8811 10.0089Z" fill="#F4D052" fill-opacity="0.9"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_1_147">
                <rect width="42" height="42" fill="white"/>
                </clipPath>
                </defs>
            </svg>
     </div>
        <form @submit.prevent="login" id="logging-form">  
            <div class="form-inputs">     
                <div class="input-wrapper" >
                    <label for="username">Enter your email address:</label>
                    <input class="text-field"  type="text" id="username" v-model="username" placeholder="Email address" />
                </div>
                <div class="input-wrapper">
                    <label for="password">Enter your Password:</label>
                    <input class="text-field" type="password" id="password" v-model="password" placeholder="Password" />
                </div>
            </div> 
            <button class="submit-button" type="submit" @click="signIn">Login</button>
        </form>
        <div class="account">
            <p>Don’t have an account? Register</p>
            <p class="forgot-password">Forgot Password</p>

        </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      signIn() {
        // Perform login logic
        // Access data properties using `this`
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        this.redirectToDashboard()
      },
      redirectToDashboard() {
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  
  
  