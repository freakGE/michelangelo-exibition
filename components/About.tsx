/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCursor } from "../features/cursorSlice";
import michelangeloImg from "../public/michelangelo.jpg";
import useCurrentScroll from "./CurrentScroll";

type Biography = { title: string; text: string[] }[];

const About = () => {
  const scroll = useCurrentScroll();
  const dispatch = useDispatch();
  const [arrowHover, setArrowHover] = useState(false);
  const [details, setDetails] = useState(false);
  const [detailsAnimation, setDetailsAnimation] = useState(0);

  const [savedScroll, setSavedScroll] = useState<number | null>(null);
  const [borderTop, setBorderTop] = useState(false);

  const [frontGround, setfrontGround] = useState(false);
  const [hiddenText, setHiddenText] = useState(false);

  const handleArrowClick = () => {
    if (details === false) {
      setSavedScroll(scroll);
      setDetails(true);
      setHiddenText(true);
      setfrontGround(true);
      setTimeout(() => {
        setfrontGround(false);
        setHiddenText(false);
      }, 1500);
    } else {
      setfrontGround(true);
      setHiddenText(false);
      setTimeout(() => {
        setHiddenText(true);
        setfrontGround(false);
        setTimeout(() => {
          setDetails(false);
          // if (savedScroll)
          if (savedScroll && scroll > savedScroll) {
            setTimeout(() => {
              window.scroll({
                top: savedScroll,
                left: 0,
                behavior: "smooth",
              });
            }, 1);
          }
        }, 650);
      }, 1500);
    }

    // setBorderTop(true);
    // if (details === false) {
    //   setSavedScroll(scroll);
    //   setDetails(true);
    //   setDetailsAnimation(1);
    //   setTimeout(() => {
    //     setDetailsAnimation(0);
    //     setBorderTop(false);
    //   }, 2500);
    // } else {
    //   setDetailsAnimation(2);
    //   setDetails(false);
    //   setTimeout(() => setBorderTop(false), 3000);
    //   if (savedScroll)
    //     setTimeout(() => {
    //       window.scroll({
    //         top: savedScroll,
    //         left: 0,
    //         behavior: "smooth",
    //       });
    //     }, 1150);
    // }
  };

  const michangeloBiography: Biography = [
    {
      title: "Early Life",
      text: [
        `Born on March 6, 1475, in a town near Arezzo, in Tuscany, Michelangelo lived a comfortable life during his childhood. His family were bankers in Florence, but his father decided to enter a government post when the bank industry failed. When he was born, his father served as the judicial administrator at Caprese, as well as Chiusi's local administrator.`,
        `Eventually, Michelangelo's family went back to Florence, and this was where the artist lived much of his childhood. In 1481, his mother died of a chronic illness, and he was only 6 years of age at that time. `,
        `The artist came to Florence, so he could study grammar under his master Francesco da Urbino. However, he was vaguely interested in formal schooling, as he was more fascinated with copying paintings from various churches in Italy. He was also able to meet several painters who inspired him to pursue his art education. `,
      ],
    },
    {
      title: "Life in Florence",
      text: [
        ` At that time, Florence was considered as the center of learning and arts throughout Italy. The town council sponsored art, along with wealthy patrons, banking associates and merchant guilds. Moreover, the Renaissance was flourishing in this Italian city, which gave rise to impressive structures and artistic masterpieces.`,
        ` At 13 years old, Michelangelo obtained apprenticeship from Ghirlandaio. A year after, the artist's father asked Ghirlandaio to pay Michelangelo as an artist, and this was a rather unusual circumstance during that time.`,
        ` In 1489, a wealthy man and Florence's de facto ruler named Lorenzo de Medici asked Ghirlandaio for two of his best pupils. Without hesitation, he recommended Francesco Granacci and Michelangelo. Hence, the young artist was given a chance to be enrolled in the Humanist Academy, an institution founded by the Medici.`,
        ` While studying at the academy, Michelangelo realized that his outlook and works were rather influenced by numerous writers and philosophers in history such as Pico della Mirandola, Poliziano and Marsilio Ficino. It was also during this period that the artist began sculpting some of his renowned works including the Battle of the Centaurs and Madonna of the Steps. Poliziano suggested the theme Battle of the Centaurs, and this artwork was commissioned by Lorenzo de Medici. `,
      ],
    },
    {
      title: "Accomplishments",
      text: [
        `When Lorenzo died in 1492, this caused some challenges and uncertainties in the life of Michelangelo. He was forced to leave the security of living and earning money at the Medici court, and he came back to his father's house. A few months after, he was able to make a wooden crucifix, which he gave as a present to the prior of the Santa Maria del Santo Spirito. The said prior gave the artist a chance to study the anatomy of some of the corpses found at the church's hospital.`,
        ` By 1493, he decided to buy a marble that he could use for a life-size statue of Hercules, which was eventually sent to France. The artist was given another chance to re-enter the Medici court in 1494, and this was the time when Piero de Medici commissioned from him a snow statue.`,
        ` During the same year that the artist came back to the court, the Medici had to leave Florence because of the rise of Savonarola. Michelangelo, however, left the city even before the political crisis started. He relocated to Venice before proceeding to Bologna, where he was tasked to complete the carving of some small figures found at the Shrine and tomb of St. Dominic.`,
        ` Before 1494 ended, he traveled back to Florence during the time Charles VIII were experiencing defeats and Florence was in a stable condition. While in Florence, the artist became preoccupied with his latest projects such as the statue of a sleeping Cupid and the child St. John the Baptist.`,
      ],
    },
    {
      title: "Life in Rome",
      text: [
        ` At 21 years of age, the artist came to Rome where he engaged in new projects. On July 4, 1496, he began sculpting the massive statue of Bacchus, the Roman god of wine. Cardinal Raffaele Riario commissioned him to do this project, but he eventually rejected the artist's work. Afterward, the statue was bought by Jacopo Galli, a wealthy banker. `,
        ` In 1497, the French Ambassador in Rome commissioned Michelangelo's work called the Pieta. Although the artist was very much devoted to his sculpting, he became deeply interested in drawing and painting. In fact, while in Rome, he completed several artworks that made him one of the most popular artists in his time. `,
      ],
    },
    {
      title: "Later Life",
      text: [
        `Later in Michelangelo's life, he was able to create several Pietas, which reflects different images. The Pieta of Vittoria Colonna, for instance, was a chalk drawing that presented Mary with upraised arms and hands, which indicated her prophetic role. As for the frontal features of the image, it resembled the fresco by Masaccio, which is found at the Holy Trinity in Santa Maria Novella, in Florence. `,
        ` As for the Florentine Pieta, the artist depicted himself as the old image of Nicodemus as he lowered Jesus' body upon his death on the cross. Mary Magdalene and Mary, the mother of Jesus, were also included in this Pieta. `,
        ` It can be found that the leg and left arm of Jesus in this Pieta was smashed, which was said to have been done by Michelangelo. Eventually, the disfigured arm and leg were repaired by Tiberio Calcagni, the artist's pupil. `,
        ` According to scholars, the Rondanini Pieta was Michelangelo's final work, yet it remains unfinished because he started working on it until there was a lack of stone to complete the work. Hence, this work of art maintained an abstract quality that resembled the 20th century concept and style of sculpting. `,
        ` Along with Leonardo da Vinci and Raphael, and Donatello Michelangelo was responsible for sixteenth century Florence becoming the century of a movement of artists that has permanently enriched western culture. Considered as one of the leading lights of the Italian Renaissance, Michelangelo was without a doubt one of the most inspirational and talented artists in modern history. `,
      ],
    },
  ];

  return (
    <section
      id="aboutSection"
      className="w-full wrapper-container md:pb-[5rem] sm:pb-[4rem] pb-[3rem]"
    >
      <div
        // className="flex flex-col w-11/12 max-w-7xl" max-w-6xl
        className="flex flex-col w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12"
      >
        <h1
          className="text-3xl uppercase border-b pb-[1rem] border-primary 
          w-3/4 sm:w-1/2"
          onMouseEnter={() => dispatch(changeCursor("textWhite"))}
          onMouseLeave={() => dispatch(changeCursor("default"))}
        >
          Who was
          <br />
          michalangelo?
        </h1>
        <div className="flex flex-col w-full sm:flex-row sm:pt-[5rem] xl:py-[5rem]">
          <div className="h-full py-[3rem] basis-1/2 sm:py-0 esm:flex justify-center items-start">
            <Image
              src={michelangeloImg}
              alt={"michelangelo"}
              placeholder="blur"
              className="px-[1rem] lg:w-2/3"
              style={{
                objectFit: "cover",
              }}
              onMouseEnter={() => dispatch(changeCursor("imageWhite"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            />
          </div>
          <div className="basis-1/2 flex flex-col gap-y-[1.1rem] h-full para-text relative">
            <p
              onMouseEnter={() => dispatch(changeCursor("textWhite"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              Michelangelo Buonarroti was a painter, sculptor, architect and
              poet widely considered one of the most brilliant artists of the
              Italian Renaissance. Michelangelo was an apprentice to a painter
              before studying in the sculpture gardens of the powerful Medici
              family.
            </p>
            <p
              onMouseEnter={() => dispatch(changeCursor("textWhite"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              What followed was a remarkable career as an artist, famed in his
              own time for his artistic virtuosity. Although he always
              considered himself a Florentine, Michelangelo lived most of his
              life in Rome, where he died at age 88.
            </p>
            <button
              className="btnArrow flex bottom-0 left-0 uppercase duration-500 moreBiography text-secondary pb-[1.1rem] items-center"
              onMouseEnter={() => {
                dispatch(changeCursor("text"));
                setArrowHover(true);
              }}
              onMouseLeave={() => {
                dispatch(changeCursor("default"));
                setArrowHover(false);
              }}
              // onClick={() => (!details ? handleArrowClick() : 0)}
              onClick={() => handleArrowClick()}
              style={{
                transform: arrowHover ? "translateX(15px)" : "translateX(0px)",
                // opacity: details ? `0%` : `100%`,
              }}
            >
              {details ? `Show less` : `More about biography`}
              <span className="ml-[1rem] h-full  moreBiography right-[-1rem]">
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
            </button>
          </div>
        </div>

        {details && (
          <ol
            className="flex overflow-hidden relative flex-col justify-center items-center w-full h-full" //mt-[1.1rem]
          >
            {michangeloBiography.map((o, i) => {
              return (
                <li key={o.title} className="flex flex-col para-text">
                  <h1
                    className={`
                    text-lg lg:text-xl uppercase text-secondary mb-[0.125rem]  relative w-max
                    `}
                    onMouseEnter={() => dispatch(changeCursor("text"))}
                    onMouseLeave={() => dispatch(changeCursor("default"))}
                  >
                    <AnimatePresence>
                      {frontGround && (
                        <motion.span
                          initial={{ translateX: `-100%` }}
                          exit={{ translateX: `-100%` }}
                          animate={{ translateX: `0%` }}
                          transition={{ duration: 0.5 }}
                          className={`absolute w-full h-full bg-secondary`}
                        />
                      )}
                    </AnimatePresence>
                    {/* {o.title} */}
                    <span
                      className={`${hiddenText ? `opacity-0` : `opacity-100`}`}
                    >
                      {o.title}
                    </span>
                  </h1>
                  {o.text.map((text, k) => {
                    const words = text.split(" ");
                    return (
                      <p
                        key={k}
                        className="mb-[1.1rem]"
                        onMouseEnter={() => dispatch(changeCursor("textWhite"))}
                        onMouseLeave={() => dispatch(changeCursor("default"))}
                      >
                        <AnimatePresence>
                          {frontGround && (
                            <motion.span
                              initial={{ translateX: `-100%` }}
                              animate={{ translateX: `0%` }}
                              exit={{ translateX: `-100%` }}
                              transition={{ duration: 0.5 }}
                              className="absolute w-full h-full"
                            >
                              {words.map((word, i) => {
                                return (
                                  <span key={i} className={`bg-primary`}>
                                    {i === 0 ? word : ` ${word}`}
                                  </span>
                                );
                              })}
                            </motion.span>
                          )}
                        </AnimatePresence>
                        {/* {text} */}
                        <span
                          className={`${
                            hiddenText ? `opacity-0` : `opacity-100`
                          }`}
                        >
                          {text}
                        </span>
                      </p>
                    );
                  })}
                  {i === michangeloBiography.length - 1 && (
                    <button
                      className="btnArrow flex uppercase duration-500 text-secondary my-[1.1rem]"
                      onMouseEnter={() => {
                        dispatch(changeCursor("text"));
                        setArrowHover(true);
                      }}
                      onMouseLeave={() => {
                        dispatch(changeCursor("default"));
                        setArrowHover(false);
                      }}
                      onClick={() => handleArrowClick()}
                      style={{
                        transform: arrowHover
                          ? "translateX(15px)"
                          : "translateX(0px)",

                        opacity: !details ? `0%` : `100%`,
                      }}
                    >
                      Show less
                      <span className="ml-[1rem] h-full">
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
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
        )}
        {/* 
        <AnimatePresence>
          {borderTop && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5 }}
              className=" w-full h-[1px] bg-primary"
            />
          )}
        </AnimatePresence>
        <div className="overflow-hidden">
          <AnimatePresence>
            {details && (
              <motion.ol
                className="flex overflow-hidden relative flex-col justify-center items-center w-full h-full" //mt-[1.1rem]
                initial={{ translateY: `-100%` }}
                animate={{ translateY: "0%" }}
                exit={{
                  translateY: `-100%`,
                }}
                transition={{ duration: 2.5 }}
                style={{
                  transitionDelay: detailsAnimation === 2 ? "500ms" : "0ms",
                }}
              >
                <span
                  className="absolute w-screen h-full backdrop-blur-[2px] transition-opacity ease-in"
                  style={{
                    transform:
                      detailsAnimation === 1 || detailsAnimation === 2
                        ? `translateY(0%)`
                        : `translateY(100%)`,
                    transitionDuration:
                      detailsAnimation === 1
                        ? `0ms`
                        : detailsAnimation === 2
                        ? `1000ms`
                        : `1500ms`,
                    opacity:
                      detailsAnimation === 1 || detailsAnimation === 2
                        ? 100
                        : 0,
                  }}
                ></span>

                {michangeloBiography.map((o, i) => {
                  return (
                    <li key={o.title} className="flex flex-col para-text">
                      <h1
                        className="text-lg lg:text-xl uppercase text-secondary pb-[0.1rem] "
                        onMouseEnter={() => dispatch(changeCursor("text"))}
                        onMouseLeave={() => dispatch(changeCursor("default"))}
                      >
                        {o.title}
                      </h1>
                      {o.text.map((text, k) => {
                        return (
                          <p
                            key={k}
                            className="pb-[1.1rem]"
                            onMouseEnter={() =>
                              dispatch(changeCursor("textWhite"))
                            }
                            onMouseLeave={() =>
                              dispatch(changeCursor("default"))
                            }
                          >
                            {text}
                          </p>
                        );
                      })}
                      {i === michangeloBiography.length - 1 && (
                        <button
                          className="flex uppercase duration-500 text-secondary my-[1.1rem]"
                          onMouseEnter={() => {
                            dispatch(changeCursor("text"));
                            setArrowHover(true);
                          }}
                          onMouseLeave={() => {
                            dispatch(changeCursor("default"));
                            setArrowHover(false);
                          }}
                          onClick={() => handleArrowClick()}
                          style={{
                            transform: arrowHover
                              ? "translateX(15px)"
                              : "translateX(0px)",

                            opacity: !details ? `0%` : `100%`,
                          }}
                        >
                          Show less
                          <span className="ml-[1rem] h-full">
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
                              <line
                                y1="26.5"
                                x2="100"
                                y2="26.5"
                                stroke="#9E8D74"
                              />
                              <line
                                y1="25.5"
                                x2="100"
                                y2="25.5"
                                stroke="#9E8D74"
                              />
                              <line
                                y1="24.5"
                                x2="100"
                                y2="24.5"
                                stroke="#9E8D74"
                              />
                              <line
                                y1="23.5"
                                x2="100"
                                y2="23.5"
                                stroke="#9E8D74"
                              />
                            </svg>
                          </span>
                        </button>
                      )}
                    </li>
                  );
                })}
              </motion.ol>
            )}
          </AnimatePresence>
        </div>*/}
      </div>
    </section>
  );
};

export default About;
