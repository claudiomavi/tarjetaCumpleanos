import {
  name,
  date,
  location,
  time,
  googleMapsLink,
  whatsappLink,
  dressCode,
} from "../datas/datas";

export default function Invitation() {
  return (
    <div className="relative flex max-h-[874px] max-w-[402px] flex-col items-center justify-center bg-[url(/assets/background.webp)] bg-cover shadow-2xl">
      <div className="flex flex-col items-center pt-16">
        <h1 className="animate-fade-in text-center font-party text-9xl text-white animate-delay-300 text-shadow-white">
          18
        </h1>
        <h1 className="animate-fade-in pb-8 text-center font-party text-8xl text-pink-300 text-shadow-white">
          Birthday Party
        </h1>
        <h3 className="animate-fade-in text-center font-dm text-white uppercase animate-delay-500">
          festeggiamo il compleanno di {name}
        </h3>

        <h3 className="animate-fade-in text-center font-dm text-white uppercase animate-delay-500">
          alle {time} |{" "}
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-all duration-300 text-shadow-white hover:text-pink-300"
          >
            {location}
          </a>
        </h3>

        <div className="mt-12 flex animate-fade-in items-center justify-center gap-3.5 animate-delay-500">
          <h3 className="text-center font-dm text-white uppercase">
            {date.day}
          </h3>
          <div className="rounded-full p-4 box-shadow-white outline-4 outline-pink-300">
            <h3 className="text-center font-dm text-4xl text-white uppercase">
              {date.number}
            </h3>
          </div>
          <h3 className="text-center font-dm text-white uppercase">
            {date.month}
          </h3>
        </div>
        <h3 className="animate-fade-in pt-4 text-center font-dm text-white uppercase animate-delay-500">
          dress code:{" "}
          <span className="text-pink-300 text-shadow-white">{dressCode}</span>
        </h3>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 mt-20 mb-16 animate-fade-in cursor-pointer rounded-lg px-5 py-4 text-center font-dm text-white uppercase box-shadow-white outline-2 outline-white transition-all duration-300 animate-delay-700 hover:bg-white hover:text-black"
        >
          conferma su whatsapp
        </a>
      </div>
    </div>
  );
}
