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
    <div className="flex h-screen items-center justify-center bg-gray-500">
      <div className="relative flex h-screen max-h-[874px] max-w-[402px] flex-col items-center justify-center bg-[url(/assets/background.webp)] bg-cover shadow-2xl">
        <img
          src="/assets/cocktail-pink.svg"
          alt="pink cocktail"
          className="absolute top-0 right-0"
        />
        <img
          src="/assets/cocktail-white.svg"
          alt="white cocktail"
          className="absolute top-[28rem] right-0"
        />
        <img
          src="/assets/cocktail-rounded-pink.svg"
          alt="pink rounded cocktail"
          className="absolute bottom-8 left-0"
        />
        <div className="flex h-screen flex-col items-center pt-8">
          <h1 className="text-center font-party text-9xl text-white text-shadow-white">
            18
          </h1>
          <h1 className="pb-8 text-center font-party text-8xl text-pink-300 text-shadow-white">
            Birthday Party
          </h1>
          <h3 className="text-center font-dm text-white uppercase">
            festeggiamo il compleanno di {name}
          </h3>
          <div className="flex items-center justify-center">
            <h3 className="text-center font-dm text-white uppercase">
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
            <img
              src="/assets/pin.svg"
              alt="position pin"
              className="w-[3rem]"
            />
          </div>
          <div className="mt-12 flex items-center justify-center gap-3.5">
            <h3 className="text-center font-dm text-white uppercase">
              {date.day}
            </h3>
            <div class="rounded-full p-4 box-shadow-white outline-4 outline-pink-300">
              <h3 class="text-center font-dm text-4xl text-white uppercase">
                {date.number}
              </h3>
            </div>
            <h3 className="text-center font-dm text-white uppercase">
              {date.month}
            </h3>
          </div>
          <h3 className="pt-4 text-center font-dm text-white uppercase">
            dress code:{" "}
            <span className="text-pink-300 text-shadow-white">{dressCode}</span>
          </h3>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-20 cursor-pointer rounded-lg px-5 py-4 text-center font-dm text-white uppercase box-shadow-white outline-2 outline-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            conferma su whatsapp
          </a>
        </div>
      </div>
    </div>
  );
}
