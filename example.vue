<template>
    <!-- <h2>Home page</h2>  -->
    <!-- <form action="">
      <label for="email">Email : </label>
      <input type="text" id="email" placeholder="enter email" v-model="form.email">
      <br /><br />
  
      <label for="password">Password : </label>
      <input type="password" placeholder="enter password" v-model="form.password">
      <br /> <br />
  
      <select v-model="form.country">
      <option value="India">India</option>
      <option value="China">China</option>
      <option value="USA">USA</option>
      </select>
  
      <br/><br/>
      <h2>Technology</h2> 
      <label for="java">Java : </label>
      <input type="checkbox" id="java" value="java" v-model="form.technology">
      <br /> <br />
      <label for="python">Python : </label>
      <input type="checkbox" id="python" value="python" v-model="form.technology">
      <br /> <br />  
  
      <h2>Gender</h2>
      <label for="male">Male : </label>
      <input type="radio" id="male" value="male" name="gender" v-model="form.gender">
      <br /> <br />
      <label for="female">Female : </label>
      <input type="radio" id="female" value="female" name="gender" v-model="form.gender">
      <br/><br/>
      <button v-on:click="login" type="submit">Login</button>
    </form> -->
  
    <!-- form modifire -->
    <!-- <h2>Form Modifires</h2>
    <input type="text" v-model.lazy="data">
    <input type="text" v-model.trim="data">
    <input type="number" v-model.number.lazy="data">
    <h3>Data is:{{ typeof(data) }}</h3> -->
  
  
    <div>
      <h2>Non-Props Data</h2>
      <User data="some data" id="user-cmp"/>
    </div>
  
  
  </template>

<script>
import User from './components/User.vue';

// export default {
//   name: "HomePage",
//   data() {
//     return {
//       form: {
//         email: "",
//         password: "",
//         country :"",
//         technology:[],
//         gender:""
//       },
//       error:[]
//     }
//   },
//   methods : {
//      login(e) {
//       e.preventDefault();
//       this.error = [];
//       for(const item in this.form){
//         if (this.form[item] === "" || this.form[item].length === 0) {
//           this.error.push(item)
//         }
//       }
//       if (this.error.length === 0) {
//         alert("data has been submitted")
//       }

//       console.log("login data",this.form,this.error);
//      }

//   }
// } 

// export default {
//   name: "HomePage",
//   data() {
//     return {
//       data:""
//     }
//   },
// }

// Non Props Data
export default {
    name: "HomePage",
    components: {
        User
    },
    data() {
        return {

        }
    },
}

</script>

<style scoped></style>



<template>
    <!-- <div>
        <h2>User Component</h2>
        <h2>Peter</h2>
        <h2>Bruce</h2>
        <p>{{ data }}</p>
    </div> -->

    <div>
        <h2>User Component</h2>
        <h2>Peter</h2>
        <h2 v-bind="$attrs">Bruce</h2>
    </div>


</template>

<script>
export default {
    name: "User",
    inheritAttrs : false,
    props: {
        data: String
    },
} 
</script>