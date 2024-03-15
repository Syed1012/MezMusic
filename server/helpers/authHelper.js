// server/helpers/authHelper.js

import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    console.log("Password to hash: ", password);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password: ", hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error("Error in hashPassword:", error);
    return null;
  }
};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
