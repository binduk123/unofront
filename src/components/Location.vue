<template>
  <div class="location">
     <p>{{ error }}</p>
     <p>{{ logouterror }}</p>
 
      <table>
          <th>Name</th> <th>Description</th>
    <tr v-for="res in response">
      <td>{{ res.name }}</td>
      <td>{{ res.desc }}</td>
    </tr>
    
  </table>
   
   <button v-on:click="logout()">Logout</button>
   </div>
</template>

<script>
export default {
  name: 'location',
  data () {
    return {
      response: '',
      error: '',
      logouterror: ''
    }
  },
  mounted () {
    var locid = this.$route.params.id
    this.$http.get('https://multivendor.dev.api.unoapp.io/api/app/menus/full/' + locid, { app_id: 'O2byrCjWfpfa1pf38eQpX34EFz96VCfy', app_secret: 'kKHr0MacflY2qBCHHMSzvZMXTnoW5e9O' })
    .then(result => { this.response = result.data.payload }, error => { console.error(error) })
    .catch(() => this.error)
  },
  methods: {
    logout () {
      this.$http.post('https://multivendor.dev.api.unoapp.io/api/application/admin/logout', { app_id: 'O2byrCjWfpfa1pf38eQpX34EFz96VCfy', app_secret: 'kKHr0MacflY2qBCHHMSzvZMXTnoW5e9O', auth_token: 'dfb0ec3023726f77b5b118f10a921197' })
      .then(result => { this.logouturl = 'localhost:8080' }, logouterror => { console.error(logouterror) })
      .catch(() => this.logouterror)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

table, th, td {
  border: 1px solid black;
}
</style>
