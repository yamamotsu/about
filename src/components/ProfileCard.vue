<template>
  <div class="profile">
    <g-image
      class="profile-icon"
      src="~/assets/images/profile.jpg"
      width="250"
    />
    <div class="profile-summary">
      <p class="profile-name light-accent-text">Yusuke Yamamoto</p>
      <table class="profile-info-list">
        <tr class="profile-info"
          v-for="info in infos" :key="info.id">
          <td class="profile-info-title">{{ info.name }}</td>
          <td class="profile-info-value">{{ info.value }}</td>
        </tr>
      </table>
    </div>
    <ul class="profile-links">
      <li class="profile-item"
        v-for="item in socialLinks" :key="item.id"
        @click="toURL(item.link)"
        >
        <v-icon large class="profile-link-icon">{{item.icon}}</v-icon>
        <p class="profile-link-title">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infos: [
        {
          name: "Age",
          value: 23
        },
        {
          name: "Location",
          value: "Fukuoka"
        },
        {
          name: "Mail",
          value: "motsulab[at]gmail.com"
        },
      ],
      socialLinks: [
        {
          title: "Github",
          icon: "mdi-github",
          link: "https://github.com/yamamotsu",
        },
        {
          title: "Twitter",
          icon: "mdi-twitter",
          link: "https://twitter.com/yamamotsuy",
        },
      ]
    }
  },
  methods: {
    toURL (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: 250px;

  background-color: #FFF;
  /* padding-bottom: 12px; */
  border-bottom: solid 1px #d5d5d5;
}

.profile-summary {
  margin-bottom: 12px;
}

.profile-name {
  font-size: 24px;
  font-weight: 600;
  margin: 12px 10px;
}

.profile-info {
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
}

.profile-info-list {
  padding: 0 12px;
  width: 100%;
}

.profile-info-title {
  padding: 2px 8px;
  /* background-color: #F8410C; */
  background-color: transparent;
  border: solid #F8410C 1px;
  border-radius: 8px;
  color: #F8410C;
  margin-right: 10px;
  width: 35%;
  font-size: 14px;
}

.profile-info-value {
  margin: auto 0;
  color: #5a5a5a;
  font-size: 16px;;
}

.profile-links {
  /* border-top: solid 1px #d5d5d5; */
}

.profile-item {
  padding: 12px 16px;
  display: flex;
  flex-direction: row;

  border-top: solid 1px #d5d5d5;
  color: #5a5a5a;
  background-color: #FFF;
}

.profile-item:hover {
  cursor: pointer;

  color: #FFF;
  background-color: #F8410C;

  transition: all 0.5s ease-out;
}

.profile-item::after{
  content: "";
  height: 24px;
  border: solid 12px transparent;
  border-left: solid 8px #d5d5d5;
  margin: auto -16px auto 0;
}

.profile-item:hover::after{
  border-left-color: #FFF;
}

.profile-item .profile-link-icon {
  /* margin: auto 8px; */
  color: #F8410C;
}
.profile-item:hover .profile-link-icon {
  /* margin: auto 8px; */
  color: #FFF;
}

.profile-link-title{
  margin-left: 20px;
  margin-right: auto;
  text-align: left;
  vertical-align: middle;
  font-size: 24px;
}

</style>