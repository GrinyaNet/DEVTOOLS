// file path: src/profile.js

const printProfile = function (profileData) {
  const {
    name,
    company
  } = profileData;
  console.log("".concat(name, " from ").concat(company));
};