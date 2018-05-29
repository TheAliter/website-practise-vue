new Vue ({
  el:'#vue',
  data: {
    status: false,
    hp: 100,
  },
  methods: {
    punch: function() {
      this.hp -= 10;
      if (this.hp <= 0) {
        this.status = true
      };
    },
    restart() {
      this.hp = 100;
      this.status = false;
    }
  },
  computed: {

  }
})
