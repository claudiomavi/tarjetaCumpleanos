import { name, date, location, googleMapsLink, whatsappLink, dressCode } from '../datas/datas'

export default function Invitation() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white p-6 text-center relative">
			<div className="relative bg-black border border-gray-700 rounded-2xl p-8 shadow-2xl max-w-md overflow-hidden">
				<div className="absolute inset-0 bg-[url('/assets/background.webp')] bg-cover bg-center opacity-20"></div>

				{/* Capa superior para asegurar que el contenido sea legible */}
				<div className="relative z-10">
					<h1 className="text-6xl font-extrabold mb-2 text-white font-[Great Vibes]">18</h1>
					<p className="text-lg italic mb-4 font-[Montserrat]">Sei invitato/a al diciottesimo di</p>
					<h2 className="text-4xl font-semibold mb-4 text-white font-[Great Vibes]">{name}</h2>
					<p className="text-xl mb-2 font-[Montserrat]">📅 {date}</p>
					<p className="text-lg mb-4 font-[Montserrat]">📍 {location}</p>
					<p className="text-md italic mb-6 font-[Montserrat]">🎩 Dress Code: {dressCode}</p>
					<div className="mt-6 flex flex-col gap-4">
						<a
							href={whatsappLink}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-white hover:text-black transition">
							✅ Conferma su WhatsApp
						</a>
						<a
							href={googleMapsLink}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-white hover:text-black transition">
							📍 Vedi la posizione
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
