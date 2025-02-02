const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const sendEmail = (data) => {
  const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "testert.dot@meta.ua",
      pass: META_PASSWORD,
    },
  };

  const transport = nodemailer.createTransport(nodemailerConfig);

  const email = {
    ...data,
    from: "testert.dot@meta.ua",
  };

  return transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error));
};

module.exports = sendEmail;
