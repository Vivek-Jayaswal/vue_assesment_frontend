<template>
    <div>
        <div class="flex justify-between items-center px-10 py-5">
            <div>
                <h2 class="font-semibold text-xl">Company Name : <span>{{ companyData.companyName }}</span></h2>
            </div>
            <div>
                <p>Mobile No. <span class="font-semibold">+91 {{ companyData.companyMobileNo }}</span></p>
                <p>Eamil : <span class="font-semibold">{{ companyData.companyEmail }}</span></p>
                <p>GSTIN : <span class="font-semibold">{{ companyData.gstin }}</span></p>
                <p></p>
            </div>
        </div>
        <div class="flex px-10 py-4 bg-gray-300 justify-between items-center">
            <h2 class="text-2xl text-green-600 font-bold">Invoice</h2>
            <p class="text-2xl font-semibold">#345677</p>
        </div>
        <div class="flex px-10 py-4 justify-between items-center">
            <h2 class="text-2xl font-semibold">Invoice To</h2>
            <p>Date : <span class="font-semibold">{{ userData.paymentDate }}</span></p>
        </div>
        <div class="px-10 pb-10">
            <p>Name : <span class="font-semibold">{{ userData.userName }}</span></p>
            <p>Mobile No: <span class="font-semibold">+91 {{ userData.userContactNumber }}</span></p>
            <p>Email : <span class="font-semibold">{{ userData.userMail }}</span></p>
            <p>Address : <span class="font-semibold">{{ userData.userAddress }}</span></p>
        </div>

        <div class="px-10 pb-10">
            <table border="1" class="dynamic-table w-full border-2 border-black">
                <thead>
                    <tr class="bg-[#fff7ec] text-green-800">
                        <th v-for="(heading, index) in headings" :key="index">{{ heading }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in transactionData" :key="rowIndex">
                        <td v-for="(heading, colIndex) in headings" :key="colIndex">
                            <span v-if="heading === 'Total'">
                                {{ calculateTotal(row) }}
                            </span>
                            <span>
                                {{ row[heading] }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="w-full flex px-10 justify-end items-end">
            <div class="flex bg-gray-300 py-2 px-5 items-center justify-end gap-10">
                <p>Grand Total :</p>
                <p class="border border-black h-5"></p>
                <p>{{ calculateGrandTotal() }}</p>
            </div>
        </div>

        <div class="flex justify-end gap-10 py-10 px-10">
            <button @click="handlePrevStep"
                class="border border-blue-600 text-blue-800 font-semibold px-6 rounded-2xl py-2">Prev</button>
            <button @click="handlefinalStep"
                class="bg-blue-600 px-6 rounded-2xl py-2 text-white font-semibold">Done</button>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: "FinalDetails",
    props: {
        currentStep: Number,
        userData: Object,
        companyData: Object,
        transactionData: Array,
        handleCurrentBackStep: Function
    },
    data() {
        return {
            headings: ["Product", "Rate", "Quantity", "Discount(in Rs.)", "Total"],
        };
    },
    methods: {
        calculateTotal(row) {
            const rate = parseFloat(row.Rate) || 0;
            const quantity = parseFloat(row.Quantity) || 0;
            const discount = parseFloat(row["Discount(in Rs.)"]) || 0;
            return (rate * quantity - discount).toFixed(2);
        },
        calculateGrandTotal() {
            return this.transactionData.reduce((total, row) => total + parseFloat(this.calculateTotal(row) || 0), 0).toFixed(2);
        },
        handlePrevStep() {
            if (this.currentStep >= 1 && this.currentStep <= 3) {
                this.handleCurrentBackStep();
            }
        },
        async handlefinalStep() {
            console.log("click");
            if (this.userData && this.companyData && this.transactionData) {
                try {
                    const response = await axios.post("http://localhost:8000/invoice", {
                        userData: this.userData,
                        companyData: this.companyData,
                        transactionData: this.transactionData,
                    }, {
                        withCredentials: true
                    }
                    )

                    console.log(response);

                } catch (error) {
                    alert(error);
                }
            }
        }
    },
};
</script>
