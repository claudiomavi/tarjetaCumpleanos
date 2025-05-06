export const name = "Rosa";
export const date = { day: "sabato", number: 12, month: "luglio" };
export const location = "Karibú CLUB - Giugliano";
export const time = "20:00";
export const googleMapsLink = "https://maps.app.goo.gl/PJFFVmM6gyr1qK2M9";
const phoneNumber = "393917647207"; // Código de país + número sin espacios
const whatsappMessage = encodeURIComponent(
  `Ciao ${name}! Confermo la mia presenza alla tua festa`,
);
export const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
export const dressCode = "Accessorio Fluo";
