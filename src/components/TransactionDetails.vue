<template>
    <div class="mt-10">
        <div class="w-11/12 relative m-auto">
            <button @click="addRow"
                class="absolute lg:right-0 hidden lg:block bg-blue-600 rounded-full px-4 -top-10 text-2xl text-center font-bold">+</button>

            <!-- Table -->
            <table border="1" class="dynamic-table w-full hidden lg:table">
                <thead>
                    <tr class="bg-[#fff7ec] text-green-800">
                        <th v-for="(heading, index) in headings" :key="index">{{ heading }}</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                        <td class="text-wrap" v-for="(heading, colIndex) in headings" :key="colIndex">
                            <template v-if="heading === 'Total'">
                                {{ calculateTotal(row) }}
                            </template>
                            <template v-else>
                                <input type="text" v-model="row[heading]" :placeholder="`Enter ${heading}`" />
                            </template>
                        </td>
                        <td>
                            <button @click="removeRow(rowIndex)">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Responsive Mobile View -->
            <div class="lg:hidden relative">
                <div v-for="(row, rowIndex) in rows" :key="rowIndex"
                    class="border border-gray-300 p-4 mb-4 rounded-lg shadow">
                    <div v-for="(heading, colIndex) in headings" :key="colIndex" class="flex justify-between">
                        <span class="font-semibold">{{ heading }}:</span>
                        <template v-if="heading === 'Total'">
                            {{ calculateTotal(row) }}
                        </template>
                        <template v-else>
                            <input type="text" v-model="row[heading]" class="border px-2 py-1 w-1/2"
                                :placeholder="`Enter ${heading}`" />
                        </template>
                    </div>
                    <button @click="removeRow(rowIndex)" class="mt-2 text-red-500">Remove</button>
                </div>
                <button @click="addRow"
                    class="absolute right-0 lg:hidden bg-blue-600 rounded-full px-4 -top-10 text-2xl text-center font-bold">+</button>

            </div>

            <!-- Grand Total -->
            <div class="w-full flex justify-end items-end mt-10">
                <div class="flex bg-gray-300 py-2 px-5 items-center justify-end gap-10">
                    <p>Grand Total:</p>
                    <p class="border border-black h-5"></p>
                    <p>{{ calculateGrandTotal() }}</p>
                </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-end gap-10 mt-10">
                <button @click="handlePrevStep"
                    class="border border-blue-600 text-blue-800 font-semibold px-6 rounded-2xl py-2">Prev</button>
                <button @click="handleNextStep"
                    class="bg-blue-600 px-6 rounded-2xl py-2 text-white font-semibold">Next</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "transactionPage",
    props: {
        currentStep: Number,
        updateCurrentStep: Function,
        getTransactioData: Function,
        handleCurrentBackStep: Function,
    },
    data() {
        return {
            headings: ["Product", "Rate", "Quantity", "Discount(in Rs.)", "Total"],
            rows: [
                {
                    Product: "",
                    Rate: "",
                    Quantity: "",
                    "Discount(in Rs.)": "",
                    Total: "",
                },
            ],
        };
    },
    methods: {
        addRow() {
            let newRow = {};
            this.headings.forEach((heading) => {
                newRow[heading] = "";
            });
            this.rows.push(newRow);
        },
        removeRow(index) {
            this.rows.splice(index, 1);
            if (this.rows.length === 0) {
                this.addRow();
            }
        },
        calculateTotal(row) {
            const rate = parseFloat(row.Rate) || 0;
            const quantity = parseFloat(row.Quantity) || 0;
            const discount = parseFloat(row["Discount(in Rs.)"]) || 0;
            return (rate * quantity - discount).toFixed(2);
        },
        calculateGrandTotal() {
            return this.rows
                .reduce((total, row) => total + parseFloat(this.calculateTotal(row) || 0), 0)
                .toFixed(2);
        },
        validateRows() {
            return this.rows.some((row) => {
                return Object.keys(row).some((key) => key !== "Total" && row[key].trim() !== "");
            });
        },
        handleNextStep() {
            if (!this.validateRows()) {
                alert("Please fill at least one field in the transaction table before proceeding.");
                return;
            }
            this.getTransactioData(this.rows);
            this.updateCurrentStep();
        },
        handlePrevStep() {
            this.handleCurrentBackStep();
        },
    },
};
</script>
