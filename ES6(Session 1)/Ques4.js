// Extract all keys inside address object from user object using destructuring 


const user = {
    firstName: 'Sahil',
    lastName: 'Dua',
    Address: {
        Line1: 'address line1',
        Line2: 'address line2',
        State: 'Delhi',
        Pin: 110085,
        Country: 'India',
        City: 'New Delhi',
    },
    phoneNo: 9999999999
}

const {Address: {Line1,Line2,State,Pin,Country,City}} = user;
