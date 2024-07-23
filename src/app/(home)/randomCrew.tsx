import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const RandomPics = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  
  const names = [
    "marlin",
    "ankur",
    "grace",
    "angela",
    "lucine",
    "sydney",
    "issac",
    "madelyn",
    "winston",
    "maya",
    "fatemtuz",
    "emerson",
    "ryan",
    "janssen",
    "veronica",
    "sandy",
    "poe",
    "chloe",
    "cecil",
    "jiawen",
    "arham",
  ];
  const transforms = isMobile
    ? [
        "translate-x-[45%] z-10 scale-90 brightness-75 ",
        "translate-x-[20%] z-20 scale-100 brightness-90 ",
        "translate-x-[0%] z-30 scale-110 brightness-110 ",
        "-translate-x-[20%] z-20 scale-100 brightness-90 ",
        "-translate-x-[45%] z-10 scale-90 brightness-75 ",
      ]
    : [
        "translate-x-[10rem] z-0 scale-75 brightness-50 ",
        "translate-x-[5rem] z-10 scale-90 brightness-75 ",
        "translate-x-[2rem] z-20 scale-110 brightness-90 ",
        "translate-x-[0rem] z-30 scale-125 brightness-110 ",
        "-translate-x-[2rem] z-20 scale-110 brightness-90 ",
        "-translate-x-[5rem] z-10 scale-90 brightness-75 ",
        "-translate-x-[10rem] z-0 scale-75 brightness-50 ",
      ];
  const amount = isMobile ? 5 : 7;

  return (
    <div className="flex items-center gap-0 mx-0 h-[10rem] py-16 relative">
      {names
        .sort(() => Math.random() - (isMobile ? 0.5 : 0.7))
        .slice(0, amount)
        .map((name: string, index: number) => (
          <Image
            alt="Logo"
            className={
              transforms[index] +
              " aspect-square overflow-hidden rounded object-contain drop-shadow-lg outline-4 outline-black"
            }
            height="140"
            key={index}
            src={`/crew/cropped/${name}.jpg`}
            width="140"
          />
        ))}
    </div>
  );
}

export default RandomPics;
