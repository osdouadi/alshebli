import * as nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "osdouadi@gmail.com",
    pass: "lkdadesvpcgjhety",
  },
});

export const mailOptions = {
  from: "Alshebli.center@gmail.com",
  to: "osdouadi@gmail.com",
};
