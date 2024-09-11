import { sendMail } from './mail';

const sendMailToRecipient = async (recipientData) => {
  try {
    await sendMail({
      name: recipientData.name,
      email: recipientData.email,
      message: recipientData.message,
    });
  } catch (error) {
    console.error('Error in sendMailToRecipient:', error);
  }
};

export default sendMailToRecipient;
