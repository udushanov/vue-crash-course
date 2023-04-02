const App = {
  data() {
    return {
      title: "List of notions",
      placeHolderString: "type name of notion here",
      inputValue: "",
      notes: ["note1", "note2"],
    };
  },

  methods: {
    inputHandler(e) {
      this.inputValue = e.target.value;
    },

    addHandler() {
      if (this.inputValue.length !== 0) {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },

    toUpperCase(item) {
      return item.toUpperCase();
    },

    deleteHandler(i) {
      this.notes.splice(i, 1);
    },
  },

  computed: {
    doubled() {
      return this.notes.length * 2;
    },
  },

  watch: {
    inputValue(value) {
      if (value.length >= 10) {
        this.inputValue = "";
      }
    },
  },
};

Vue.createApp(App).mount("#app");
