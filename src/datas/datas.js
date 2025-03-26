export const name = 'Rosa'
export const date = 'Sabato, 20 Aprile 2025'
export const location = 'Ristorante La Bella Vita, Roma'
export const googleMapsLink = 'https://www.google.com/maps?q=Ristorante+La+Bella+Vita,+Roma'
const phoneNumber = '393917647207' // Código de país + número sin espacios
const whatsappMessage = encodeURIComponent(
	`Ciao ${name}! Confermo la mia presenza alla tua festa`
)
export const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
export const dressCode = 'Elegante, nero'
