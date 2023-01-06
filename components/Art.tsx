import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { changeCursor } from "../features/cursorSlice";

type ArtProps = {
  header: string;
  text: string[];
  imageOnRight: boolean;
  image: StaticImageData;
};

const Art = ({ imageOnRight, header, text, image }: ArtProps) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex overflow-hidden items-start w-full mt-[5rem] flex-col  
      ${imageOnRight ? `sm:flex-row-reverse` : `sm:flex-row sm:items-end`}`}
    >
      <div
        className={`flex relative justify-between  w-full sm:w-2/5 pb-[3rem] sm:pb-0 sm:justify-end ${
          imageOnRight ? `flex-row items-start` : `flex-row-reverse items-end`
        }`}
      >
        <div
          className={`sm:hidden sm:my-0  ${
            imageOnRight ? `mr-[1.1rem] ml-0` : `ml-[1.1rem] mr-0`
          }`}
        >
          <h1
            className="text-3xl uppercase"
            onMouseEnter={() => dispatch(changeCursor("textWhite"))}
            onMouseLeave={() => dispatch(changeCursor("default"))}
          >
            {header}
          </h1>
        </div>
        <div className="xl:w-[25rem] xl:h-[22.5rem]  sm:w-[20rem] sm:h-[20rem] w-[15rem] h-[15rem]  overflow-hidden">
          <Image
            alt={header}
            src={image}
            placeholder="blur"
            className="min-w-[17.5rem] sm:min-w-[18.5rem] translate-x-[-1.25rem] md:translate-x-[0rem]"
            onMouseEnter={() => dispatch(changeCursor("image"))}
            onMouseLeave={() => dispatch(changeCursor("default"))}
          />
        </div>
      </div>
      <div
        className={`w-full sm:w-3/5 ${
          imageOnRight ? `pl-0 sm:pr-[2rem]` : `pr-0 sm:pl-[2rem]`
        }`}
      >
        <h1
          className="sm:flex hidden text-3xl uppercase mb-[3rem] w-min"
          onMouseEnter={() => dispatch(changeCursor("textWhite"))}
          onMouseLeave={() => dispatch(changeCursor("default"))}
        >
          {header}
        </h1>
        {text.map((p, i) => {
          return (
            <p
              key={i}
              className={`para-text ${i !== 0 ? `pt-[1.1rem]` : `pt-0`}`}
              onMouseEnter={() => dispatch(changeCursor("textWhite"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Art;
