const vm = ({ createApp } = Vue);

createApp({
  data() {
    return {
      mailList: "",
    };
  },
  methods: {
    getEmail() {
      axios
        .get(" https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.mailList = response.data.response;
        })
        .catch((errors) => {
          alert(errors);
        });
    },
  },
  mounted() {
    axios
      .get(" https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        this.mailList = response.data.response;
      })
      .catch((errors) => {
        alert(errors);
      });
  },
}).mount("#app");
