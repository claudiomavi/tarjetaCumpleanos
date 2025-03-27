import {
  name,
  date,
  location,
  googleMapsLink,
  whatsappLink,
  dressCode,
} from "../datas/datas";

export default function Invitation() {
  return (
    <div className="">
      <div className=""></div>

      <div className="">
        <h1 className="m-2 p-4 text-blue-500">18</h1>
        <p className="">Sei invitato/a al diciottesimo di</p>
        <h2 className="">{name}</h2>
        <p className="">📅 {date}</p>
        <p className="">📍 {location}</p>
        <p className="">🎩 Dress Code: {dressCode}</p>
        <div className="">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            ✅ Conferma su WhatsApp
          </a>
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            📍 Vedi la posizione
          </a>
        </div>
      </div>
    </div>
  );
}
