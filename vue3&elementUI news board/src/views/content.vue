<template>
  <div>
    <h2 v-text="dat.title"></h2>
    <p>作者：{{dat.author}}</p>
    <hr>
    <article v-html="dat.html"></article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      dat: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.axios
        .get("/api/data.json")
        .then((res) => {
          this.dat = res.data.data[this.id-1];
        })
        .catch((err) => {
          console.log(err, "error");
        });
    }
  }
}
</script>