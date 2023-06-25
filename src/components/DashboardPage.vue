<template>
  <div class="dashboard-page">
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
    <h6>Dashboard</h6>
    <div class="widgets-container">
      <div class="farm-card" shadow="hover">
        <div class="card-header" >
          Farms
        </div>
        <div class="card-content">
          <h5>2</h5>
          <div class="divider"></div>
          <p>Kiambu <br/> county</p>
        </div>
        <el-button class="order-button" type="warning">Order Feeds</el-button>
      </div>

      <div class="farm-card" shadow="hover">
        <div class="card-header" >
          PIGS
        </div>
        <div class="card-content">
          <h5>36</h5>
          <div class="divider"></div>
          <p>White <br/> Large</p>
        </div>
        <el-button class="sell-button" type="warning">Sell a Batch</el-button>
      </div>
    </div>
    <div class="display-cards">
      <h5>Latest</h5>
      <div v-if="isLoading">Loading...</div>

      <div class="display-cards-container">
        <img alt="image" src="../assets/bananachocholate.png"/>
        <div class="content-wrapper">
          <p class="banana-chocolate-chip-muffins">Banana chocolate chip muffins</p>
          <div class="btn-container">
            <button class="btn-banana" type="">Banana</button>
            <button class="btn-chocholate" type="">Chocolate</button>
          </div>
        </div>

      </div>
      <div class="display-cards-container">
        <img alt="image" src="../assets/overnightbreakfast.png"/>
        <div class="content-wrapper">
          <p class="banana-chocolate-chip-muffins">Overnight breakfast casserole</p>
          <div class="btn-container">
            <button class="btn-casserole" type="">Casserole</button>
            <button class="btn-breakfast" type="">Breakfast</button>
          </div>
        </div>
      </div>
      <div class="display-cards-container">
        <img alt="image" src="../assets/blueBerry.png"/>
        <div class="content-wrapper">
          <p class="banana-chocolate-chip-muffins">Blueberry Margarita</p>
          <div class="btn-container">
            <button class="btn-blueberry" type="">Blueberry</button>
            <button class="btn-margarita" type="">Margarita</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

  
  <script>
  import axios from 'axios';

  export default {
    data() {
    return {
      isLoading: true,
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      const apiUrl = 'https://api.noblepig.com';

      axios.get(apiUrl, {
        params: {
          limit: 5,
          sortBy: 'date',
          sortOrder: 'desc',
        },
      })
        .then(response => {
          this.posts = response.data;
          this.isLoading = false;
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
          this.isLoading = false;
        });
    },
  },
  }
  </script>
  