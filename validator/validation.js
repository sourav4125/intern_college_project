const { link } = require("fs/promises");

const validName = (name) => /^[a-zA-Z_]{3,20}$/.test(name);
const validFullName = (fullName) => /^[a-zA-Z ,-]*$/.test(fullName);
const validMail = (mail) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
const validNumber = (number) =>
  /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(number);
const isValidLink = (Link) =>
  /^https?:\/\/+(.)+(.gif|.jpe?g|tiff?|.png|.webp|.bmp)$/.test(Link);

module.exports = {
  validName,
  validFullName,
  validMail,
  validNumber,
  isValidLink,
};
