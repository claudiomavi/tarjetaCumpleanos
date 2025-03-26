import { name, date, location, googleMapsLink, whatsappLink, dressCode } from '../datas/datas'

export default function Invitation() {
	return (
		<div className="invitation-container">
			<div className="background-overlay"></div>

			<div className="card">
				<h1 className="title">18</h1>
				<p className="subtitle">Sei invitato/a al diciottesimo di</p>
				<h2 className="name">{name}</h2>
				<p className="info">📅 {date}</p>
				<p className="info">📍 {location}</p>
				<p className="info">🎩 Dress Code: {dressCode}</p>
				<div className="buttons">
					<a
						href={whatsappLink}
						target="_blank"
						rel="noopener noreferrer"
						className="button">
						✅ Conferma su WhatsApp
					</a>
					<a
						href={googleMapsLink}
						target="_blank"
						rel="noopener noreferrer"
						className="button">
						📍 Vedi la posizione
					</a>
				</div>
			</div>
		</div>
	)
}
