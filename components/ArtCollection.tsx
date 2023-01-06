import { useDispatch } from "react-redux";
import { changeCursor } from "../features/cursorSlice";
import dynamic from "next/dynamic";
import statueOfDavidImg from "../public/statue-of-david.jpg";
import dawnImg from "../public/michelangelo-dawn.jpg";
import pietaImg from "../public/michelangelo-pieta.jpg";
import mosesImg from "../public/moses.jpg";
import { useState } from "react";
import Link from "next/link";
import { openHamburger } from "../features/hamburgerSlice";
import { useRouter } from "next/router";
const Art = dynamic(() => import("./Art"));

type ArtCollectionProps = {
  full: boolean;
};

const ArtCollection = ({ full }: ArtCollectionProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [arrowHover, setArrowHover] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(openHamburger(false));

    const href = e.currentTarget.href.split("/");

    const nextSection = `/${href[href.length - 1]}`;

    setTimeout(() => {
      router.push(nextSection);
    }, 750);
  };

  return (
    <section
      className="w-full wrapper-container"
      style={{
        marginBottom: full ? `5rem` : `0rem`,
      }}
    >
      <div className="flex flex-col w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12">
        {!full && (
          <div className="flex justify-end w-full">
            <h1
              className="text-3xl uppercase border-b pb-[1rem] border-primary 
          w-3/4 sm:w-1/2 text-right"
              onMouseEnter={() => dispatch(changeCursor("textWhite"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              Art Collection
            </h1>
          </div>
        )}
        <Art
          header="David"
          text={[
            `Between 1501 and 1504, Michelangelo took over a commission for a statue of "David," which two prior sculptors had previously attempted and abandoned, and turned the 17-foot piece of marble into a dominating figure.`,
            `The strength of the statue's sinews, vulnerability of its nakedness, humanity of expression and overall courage made the "David" a highly prized representative of the city of Florence.`,
          ]}
          imageOnRight={true}
          image={statueOfDavidImg}
        />
        <Art
          header="Moses"
          text={[
            `Vasari once wrote: “Michelangelo completed the Moses in marble, a statue unrivaled by any contemporary or ancient achievement. Seated in a solemn posture, he lays one arm on the slate and the other on his long, lustrous beard, the strands of which are so silky and feathery that it appears as if the metal chisel has turned into a brush. The lovely face, like that of a prophet or a strong prince, seemed to require a veil to cover it, so magnificent and radiant is it, and so beautifully has the artist depicted in marble the purity with which He had bestowed that holy visage.”`,
          ]}
          imageOnRight={false}
          image={mosesImg}
        />
        {full && (
          <>
            <Art
              header="Dawn"
              text={[
                `In the spirit of an allegory of Time, the deceased were coupled with figures representing the times of the day whose gender was determined by Italian grammar. The thoughtful figures of Dusk and Dawn are endowed with soft outlines as they gracefully adorn the edge of the sarcophagus. Along with Night, Dawn is the only female nude Michelangelo ever sculpted. A youthfully smooth, yet powerful body turns towards the observer. Her features are by no means serene: the dark eyes are deep set in their shadowy sockets. She wears a turban and a band around her chest in the style of slaves' garments.`,
              ]}
              imageOnRight={true}
              image={dawnImg}
            />
            <Art
              header="Pieta"
              text={[
                `In the Pieta, Michelangelo approached a subject which until then had been given form mostly north of the Alps, where the portrayal of pain had always been connected with the idea of redemption: it was called the "Vesperbild" and represented the seated Madonna holding Christ's body in her arms. But now the twenty-three year-old artist presents us with an image of the Madonna with Christ's body never attempted before. Her face is youthful, yet beyond time; her head leans only slightly over the lifeless body of her son lying in her lap. "The body of the dead Christ exhibits the very perfection of research in every muscle, vein, and nerve. No corpse could more completely resemble the dead than does this. There is a most exquisite expression in the countenance. The veins and pulses, moreover, are indicated with so much exactitude, that one cannot but marvel how the hand of the artist should in a short time have produced such a divine work."`,
              ]}
              imageOnRight={false}
              image={pietaImg}
            />
          </>
        )}
        {!full && (
          <Link
            className="btnArrow my-[3rem] flex uppercase duration-500  text-secondary"
            onMouseEnter={() => {
              dispatch(changeCursor("text"));
              setArrowHover(true);
            }}
            onMouseLeave={() => {
              dispatch(changeCursor("default"));
              setArrowHover(false);
            }}
            style={{
              transform: arrowHover ? "translateX(15px)" : "translateX(0px)",
            }}
            onClick={handleClick}
            href={`collection`}
          >
            To see more works
            <span className="ml-[1rem] h-full  right-[-1rem]">
              <svg
                className="h-full"
                viewBox="0 0 102 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M102 25L77 50V46L98 25L77 4V0L102 25Z"
                  fill="#9E8D74"
                />
                <line y1="26.5" x2="100" y2="26.5" stroke="#9E8D74" />
                <line y1="25.5" x2="100" y2="25.5" stroke="#9E8D74" />
                <line y1="24.5" x2="100" y2="24.5" stroke="#9E8D74" />
                <line y1="23.5" x2="100" y2="23.5" stroke="#9E8D74" />
              </svg>
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ArtCollection;
