<template>
  <div>
    <h2 class="head">{{msg}}</h2>
    <div class="article_list">
      <ul>
        <li v-for="i in list" :key="i">
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  props:["msg"],
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get("/api/data.json")
        .then((res) => {
          const d = res.data.data;
          for (let l in d) {
            if (d[l].lis === this.msg) {
              this.list.push(d[l]);
            }
          }
        })
    },
  },
};
</script>
