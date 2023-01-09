const validName = (name) => /^[a-zA-Z_]{3,100}$/.test(name);
const validMail = (mail) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail); 
const validNumber = (number) => /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/ .test(number);




module.exports={validName,validMail,validNumber}