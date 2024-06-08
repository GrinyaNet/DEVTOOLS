// file path: src/profile/printProfile.js

export default profileData => {
    const { name, company } = profileData;
    console.log(`${name} from ${company}`);
  };