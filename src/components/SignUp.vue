<template>
    <div class="w-full min-h-screen flex justify-center items-center">
        <div class="w-[500px] bg-white rounded-3xl shadow-2xl shadow-slate-300 px-10 py-6">
            <div>
                <img src="../assets/codenicely_name_w_small@2x 1.jpg" alt="logo">
            </div>
            <div class="w-full">
                <h2 class="pt-4 pb-8 text-3xl font-semibold ">Authentication</h2>
                <div class="w-full flex flex-col gap-6 items-start">
                    <div class="w-full">
                        <label for="name" class="font-medium text-xl">Name</label> <br /><br />
                        <input v-model="name" type="text" class="w-full border-b border-gray-500 focus:outline-none"
                            id="name" placeholder="Enter Your email">
                        <p v-if="nameError" class="text-red-500 text-sm">{{ nameError }}</p>
                    </div>
                    <div class="w-full">
                        <label for="email" class="font-medium text-xl">Email</label> <br /><br />
                        <input v-model="email" type="text" class="w-full border-b border-gray-500 focus:outline-none"
                            id="email" placeholder="Enter Your email">
                        <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
                    </div>
                    <div class="w-full">
                        <label for="password" class="font-medium text-xl">Password</label><br /><br />
                        <input v-model="password" type="text" id="password"
                            class="w-full border-b border-gray-500 focus:outline-none"
                            placeholder="Enter Your Password">
                        <p v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</p>
                    </div>
                    <button @click="getSignUp"
                        class="w-full rounded-lg py-4 bg-blue-600 font-semibold text-white">Signup</button>
                    <button class="w-full text-center" @click="gotToLogin">Already have an account Login</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            nameError: "",
            emailError: "",
            passwordError: ""
        }
    },
    methods: {
        gotToLogin() {
            this.$router.push("/");
        },
        async getSignUp() {
            this.nameError = ""
            this.emailError = ""
            this.passwordError = ""

            if (!this.name) {
                this.nameError = "Name is required"
            }
            if (!this.email) {
                this.emailError = "Email is required"
            }
            if (!this.password) {
                this.passwordError = "Password is required"
            }

            if (!this.nameError && !this.emailError && !this.passwordError) {
                try {
                    const response = await axios.post("https://node-backend-446i.onrender.com/register", {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    })
                    if (response.status === 201) {
                        console.log(response);
                        alert(response.data.message);
                        this.$router.push("/");
                    }
                } catch (error) {
                    console.log("error in fetching data");
                    alert(error.response.data);
                }
            }
        }
    }
}
</script>