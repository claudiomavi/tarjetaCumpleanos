export const name = "Rosa";
export const date = { day: "sabato", number: 27, month: "ottobre" };
export const location = "Ristorante La Bella Vita";
export const time = "20:30";
export const googleMapsLink =
  "https://www.google.com/maps?q=Ristorante+La+Bella+Vita,+Roma";
const phoneNumber = "393917647207"; // Código de país + número sin espacios
const whatsappMessage = encodeURIComponent(
  `Ciao ${name}! Confermo la mia presenza alla tua festa 🎉`,
);
export const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
export const dressCode = "Tropicale";
