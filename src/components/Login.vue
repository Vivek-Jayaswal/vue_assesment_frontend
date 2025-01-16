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
                        <label for="email" class="font-medium text-xl">Email</label> <br /><br />
                        <input type="text" v-model="email" class="border-b border-gray-500 w-full focus:outline-none"
                            id="email" placeholder="Enter Your email">
                        <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
                    </div>
                    <div class="w-full">
                        <label for="password" class="font-medium text-xl">Password</label><br /><br />
                        <input type="text" v-model="password" id="password"
                            class="w-full border-b border-gray-500 focus:outline-none"
                            placeholder="Enter Your Password">
                        <p v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</p>
                    </div>
                    <button class="w-full rounded-lg py-4 bg-blue-600 font-semibold text-white"
                        @click="handleLogin">Login</button>
                    <button class="w-full text-center" @click="gotToSignUp">Don't have an account Signup</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "LoginPage",

    data() {
        return {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
        }
    },

    methods: {
        gotToSignUp() {
            this.$router.push("/signup");
        },
        async handleLogin() {
            this.emailError = ""
            this.passwordError = ""

            if (!this.email) {
                this.emailError = "Email is required"
            }
            if (!this.password) {
                this.passwordError = "Password is required"
            }

            if (!this.emailError && !this.passwordError) {
                try {
                    // const response = await axios.post("https://node-backend-446i.onrender.com/login", {
                    const response = await axios.post("http://localhost:8000/login", {
                        email: this.email,
                        password: this.password,
                    },{
                        withCredentials : true
                    }
                )
                    if (response.status === 200) {
                        alert('Login successful!');
                        this.$router.push('/invoice'); // Redirect to private route
                    } else {
                        alert('Login failed. Please try again.');
                    }
                } catch (error) {
                    console.error(error);
                    alert("An error occurred while logging in.");
                }
            }
        }

    }
}
</script>