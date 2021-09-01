// eslint-disable-next-line import/no-anonymous-default-export
export default [
  function step1({ errors }) {
    let validity = true;
    let arr = [
      "dateOfBirth",
      "gender",
      "sexualOrientation",
      "preferredLanguage",
      "ethnicity",
      "weight",
      "heightFeet",
      "heightInches",
    ];
    for (let val of arr) {
      if (errors[val]) {
        validity = false;
      }
    }
    return validity;
  },

  function step2({ errors }) {
    let validity = true;
    let arr = ["HphoneNo", "HphoneExt", "WphoneNo", "WphoneExt"];

    for (let val of arr) {
      if (errors[val]) {
        validity = false;
      }
    }
    return validity;
  },

  function step3({ errors }) {
    let validity = true;
    let arr = ["Haddress1", "Haddress2", "Hcity", "Hstate", "Hzip"];

    for (let val of arr) {
      if (errors[val]) {
        validity = false;
      }
    }
    return validity;
  },
  function step4({ errors }) {
    let validity = true;
    let arr = ["Waddress1", "Waddress2", "Wcity", "Wstate", "Wzip"];

    for (let val of arr) {
      if (errors[val]) {
        validity = false;
      }
    }
    return validity;
  },
];

// doc validations

export const docValidations = [
  function step1({ errors }) {
    let validity = true;
    let arr = ["dateOfBirth", "gender", "country", "city", "state"];
    for (let val of arr) {
      if (errors[val]) {
        validity = false;
      }
    }
    return validity;
  },

  function step2({ errors }) {
    let validity = true;
    let arr = ["specialty", "NpiNumber", "NpiExpireDate", "certificateFile"];

    for (let val of arr) {
      if (errors[val]) {
        validity = false;
      }
    }
    return validity;
  },
];
