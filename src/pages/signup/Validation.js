export const validation = {
    fullName: {
        required: {
            message: "cannot be empty",
            value: true
        },
        minLength: { 
            value: 3, 
            message: 'Atleast 3 characters' 
        }
    },
    address:{
        required: {
            message: "cannot be empty",
            value: true
        },
        minLength: { 
            value: 8, 
            message: 'Atleast 8 characters' 
        }
    },
    fatherName:{
        required: {
            message: "cannot be empty",
            value: true
        },
        minLength: { 
            value: 3, 
            message: 'Atleast 3 characters' 
        }
    },
    motherName:{
        required: {
            message: "cannot be empty",
            value: true
        },
        minLength: { 
            value: 3, 
            message: 'Atleast 3 characters' 
        }
    },
    phoneNo:{
        required: {
            message: "cannot be empty",
            value: true
        },
        minLength: { 
            value: 3, 
            message: 'Atleast 3 characters' 
        },
        pattern:{
            value:/^\d+$/,
            message:'value is not a number'
        }
    },
    email:{
        required: {
            message: "cannot be empty",
            value: true
        },
        pattern:{
            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message:'not valid email'
        }
    },
    image:{
        required: {
            message: "cannot be empty",
            value: true
        },
    },
    district:{
        required: {
            message: "cannot be empty",
            value: true
        },
    },
    taluk:{
        required: {
            message: "cannot be empty",
            value: true
        },
    },
    panchayath:{
        required: {
            message: "cannot be empty",
            value: true
        },
    },
    wardNo:{
        required: {
            message: "cannot be empty",
            value: true
        },
    },
    pinCode:{
        required: {
            message: "cannot be empty",
            value: true
        },
        pattern:{
            value:/^\d+$/,
            message:'enter valid pincode'
        }
    },
    'dob.day':{
        required: {
            value: true,
            message: "required",
        },
        min:{
            value:1,
            message:'not Valid'
        },
        max:{
            value:31,
            message:'not Valid',
        }
    },
    'dob.month':{
        required: {
            value: true,
            message: "required"
        },
        min:{
            value:1,
            message:'not Valid'
        },
        max:{
            value:12,
            message:'not Valid',
        }
    },
    'dob.year':{
        required: {
            value:true,
            message:"required",
        },
        min:{
            value:1,
            message:'not Valid'
        },
    },
    adharNo:{
        required: {
            message: "cannot be empty",
            value: true
        },
        pattern:{
            value:/^\d+$/,
            message:'enter valid pincode'
        }
    },
    password:{
        required:{
            value:true,
            message:"required"
        }
    }
}