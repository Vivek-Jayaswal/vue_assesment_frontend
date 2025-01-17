<template>
    <div class="w-full lg:w-[80%] xl:w-[60%] py-10 px-5">
        <div class="w-full mb-5">
            <h1 class="text-2xl text-blue-600 font-medium pb-4">company details</h1>
            <form class="flex flex-col gap-5">
                <div class="w-[66%]">
                    <label for="companyname">Company Name : </label><br />
                    <input type="text" @input="clearError('companyNameError')" v-model="companyDetails.companyName"
                        class="w-full" placeholder="Enter Company Name" name="companyName" id="companyname">
                    <p class="text-xs text-red-600 pt-1" v-if="companyDetailsError.companyNameError">{{
                        companyDetailsError.companyNameError }}</p>
                </div>
                <div class="flex items-center gap-4 w-[66%]">
                    <div class="w-[50%]">
                        <label for="mobile-no">Mobile No. : </label><br />
                        <input type="text" @input="clearError('companyMobileNoError')" placeholder="Mobile Number"
                            v-model="companyDetails.companyMobileNo" class="w-full" name="companyMobileNo"
                            id="mobile-no">
                        <p class="text-xs text-red-600 pt-1" v-if="companyDetailsError.companyMobileNoError">{{
                            companyDetailsError.companyMobileNoError }}</p>
                    </div>
                    <div class="w-[50%]">
                        <label for="email">Email : </label><br />
                        <input type="text" placeholder="Enter Email" @input="clearError('companyEmailError')"
                            v-model="companyDetails.companyEmail" class="w-full" name="companyEmail" id="email">
                        <p class="text-xs text-red-600 pt-1" v-if="companyDetailsError.companyEmailError">{{
                            companyDetailsError.companyEmailError }}</p>
                    </div>
                </div>
                <div class="w-[66%]">
                    <label for="gst">GSTIN : </label><br />
                    <input type="text" class="w-[48%]" @input="clearError('gstinError')" v-model="companyDetails.gstin"
                        placeholder="Enter Email" name="gstin" id="gst">
                    <p class="text-xs text-red-600 pt-1" v-if="companyDetailsError.gstinError">{{
                        companyDetailsError.gstinError }}</p>
                </div>
                <div class="w-full">
                    <label for="company-address">Company Address : </label><br />
                    <input type="text" placeholder="Enter Address" @input="clearError('companyAddressError')"
                        v-model="companyDetails.companyAddress" class="w-full" name="companyAddress"
                        id="company-address">
                    <p class="text-xs text-red-600 pt-1" v-if="companyDetailsError.companyAddressError">{{
                        companyDetailsError.companyAddressError }}</p>
                </div>
            </form>
        </div>
        <div class="w-full">
            <h1 class="text-2xl text-blue-600 font-medium pb-4">Inovice Details</h1>
            <form class="flex flex-col items-start gap-5">
                <div class="w-full sm:w-[32%]">
                    <label for="payment-date">Payment Date : </label><br />
                    <input type="date" @input="clearError('paymentDateError')" v-model="userDetails.paymentDate"
                        class="w-full" placeholder="Select Date" name="paymentDate" id="payment-date">
                    <p class="text-xs text-red-600 pt-1" v-if="userDetailsError.paymentDateError">{{
                        userDetailsError.paymentDateError }}</p>
                </div>
                <div class="w-[66%]">
                    <label for="name">Name : </label><br />
                    <input type="text" class="w-full" @input="clearError('userNameError')"
                        v-model="userDetails.userName" placeholder="Enter Name" name="userName" id="">
                    <p class="text-xs text-red-600 pt-1" v-if="userDetailsError.userNameError">{{
                        userDetailsError.userNameError }}</p>
                </div>
                <div class="flex items-center gap-2 sm:gap-4 w-full">
                    <div class="w-[32%]">
                        <label for="contact-number">Mobile No. : </label><br />
                        <input type="text" class="w-full" @input="clearError('userContactNumberError')"
                            v-model="userDetails.userContactNumber" placeholder="Enter Mobile No."
                            name="userContactNumber" id="contact-number">
                        <p class="text-xs text-red-600 pt-1" v-if="userDetailsError.userContactNumberError">{{
                            userDetailsError.userContactNumberError }}
                        </p>
                    </div>
                    <div class="w-[32%]">
                        <label for="user-mail">Email ID : </label><br />
                        <input type="text" class="w-full" @input="clearError('userMailError')"
                            v-model="userDetails.userMail" placeholder="Enter Email" name="userMail" id="user-mail">
                        <p class="text-xs text-red-600 pt-1" v-if="userDetailsError.userMailError">{{
                            userDetailsError.userMailError }}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 sm:gap-4 w-full">
                    <div class="w-[33%]">
                        <label for="pincode">Pin Code : </label><br />
                        <input type="text" class="w-full" @input="clearError('pinCodeError')"
                            v-model="userDetails.pinCode" placeholder="Enter Pincode" name="pinCode" id="pincode">
                        <p class="text-xs text-red-600 pt-1" v-if="userDetailsError.pinCodeError">{{
                            userDetailsError.pinCodeError }}</p>
                    </div>
                    <div class="w-[33%]">
                        <label for="city">City : </label><br />
                        <input type="text" class="w-full" @input="clearError('cityError')" v-model="userDetails.city"
                            placeholder="Enter City" name="city" id="city">
                        <p class="text-xs text-red-600 pt-1" v-if="userDetailsError.cityError">{{
                            userDetailsError.cityError }}</p>
                    </div>
                    <div class="w-[33%]">
                        <label for="state">State : </label><br />
                        <input type="text" class="w-full" @input="clearError('stateError')" v-model="userDetails.state"
                            placeholder="Enter State" name="state" id="state">
                        <p class="text-xs text-red-600 pt-1" v-if="userDetailsError.stateError">{{
                            userDetailsError.stateError }}</p>
                    </div>
                </div>
                <div class="w-full">
                    <label for="user-address">Address : </label><br />
                    <input type="text" class="w-full" name="userAddress" @input="clearError('userAddressError')"
                        v-model="userDetails.userAddress" placeholder="Enter Address" id="user-address">
                    <p class="text-xs text-red-600 pt-1" v-if="userDetailsError.userAddressError">{{
                        userDetailsError.userAddressError }}</p>
                </div>
            </form>
        </div>
        <div class="w-full text-right pt-4">
            <button @click="handleNext" class="bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompanyDetails",
    props: {
        getCompanyAndUserData: Function,
        currentStep: Number,
        updateCurrentStep: Function
    },
    data() {
        return {
            companyDetails: { companyName: "", companyMobileNo: "", companyEmail: "", gstin: "", companyAddress: "" },
            userDetails: { paymentDate: "", userName: "", userContactNumber: "", userMail: "", pinCode: "", city: "", state: "", userAddress: "" },
            companyDetailsError: {},
            userDetailsError: {},
        };
    },

    methods: {
        clearError(field) {
            if (field in this.companyDetailsError) {
                this.companyDetailsError[field] = ""; // Direct update
            }
            if (field in this.userDetailsError) {
                this.userDetailsError[field] = ""; // Direct update
            }
        },
        validateFields(fields, errors, values) {
            let isValid = true;
            fields.forEach(({ key, label, pattern, error }) => {
                if (!values[key]) {
                    errors[error] = `${label} is required`;
                    isValid = false;
                } else if (pattern && !pattern.test(values[key])) {
                    if (error === "userNameError") {
                        errors[error] = `Invalid ${label} Does not contanins special character`
                    }
                    else {
                        errors[error] = `Invalid ${label}`;
                        isValid = false;
                    }
                }
                else {
                    errors[error] = "";
                }
            });
            return isValid;
        },
        handleNext() {
            const companyFields = [
                { key: "companyName", label: "Company name", error: "companyNameError" },
                { key: "companyMobileNo", label: "Company Mobile No.", pattern: /^[0-9]{10}$/, error: "companyMobileNoError" },
                { key: "companyEmail", label: "Compnany Email", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, error: "companyEmailError" },
                { key: "gstin", label: "Company GSTIN", error: "gstinError" },
                { key: "companyAddress", label: "Company Address", error: "companyAddressError" },
            ];
            const userFields = [
                { key: "paymentDate", label: "User Invoice Payment Date", error: "paymentDateError" },
                { key: "userName", label: "User Name", pattern: /^[a-zA-Z\s]+$/, error: "userNameError" },
                { key: "userContactNumber", label: "User contact number", pattern: /^[0-9]{10}$/, error: "userContactNumberError" },
                { key: "userMail", label: "User Email", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, error: "userMailError" },
                { key: "pinCode", label: "Pincode", error: "pinCodeError" },
                { key: "city", label: "City", error: "cityError" },
                { key: "state", label: "State", error: "stateError" },
                { key: "userAddress", label: "User Address", error: "userAddressError" },
            ];
            const isCompanyValid = this.validateFields(companyFields, this.companyDetailsError, this.companyDetails);
            const isUserValid = this.validateFields(userFields, this.userDetailsError, this.userDetails);
            if (isCompanyValid && isUserValid) {
                this.getCompanyAndUserData(this.companyDetails, this.userDetails);
                this.updateCurrentStep();
            }
        },
    }
};
</script>