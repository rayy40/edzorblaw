import { BiLogoPlayStore } from "react-icons/bi";
import EmblaCarouselSlides from "./components/Carousel/EmblaCarouselSlides";
import { EmblaOptionsType } from "embla-carousel-react";

const Home = () => {
  const options: EmblaOptionsType = {};
  const Slide_count = 7;
  const slides = [
    {
      title: "",
      list: ["", "", "", "", ""],
      image: "section_1.jpg",
    },
    {
      title: "",
      list: ["", "", "", "", ""],
      image: "section_1.jpg",
    },
    {
      title: "",
      list: ["", "", "", "", ""],
      image: "section_1.jpg",
    },
    {
      title: "",
      list: ["", "", "", "", ""],
      image: "section_1.jpg",
    },
    {
      title: "",
      list: ["", "", "", "", ""],
      image: "section_1.jpg",
    },
    {
      title: "",
      list: ["", "", "", "", ""],
      image: "section_1.jpg",
    },
    {
      title: "",
      list: ["", "", "", "", ""],
      image: "section_1.jpg",
    },
  ];

  return (
    <>
      <main className="w-full py-[7rem] bg-primary bg-[url('/images/background.png')] bg-no-repeat bg-[center_right_-25em] bg-cover">
        <div className="max-w-[1000px] mx-auto flex justify-start items-center">
          <div className="max-w-[500px] text-primary-foreground">
            <h1 className="text-5xl font-semibold">
              Turn Your Judiciary Dream Into Reality
            </h1>
            <p className="max-w-[80%] py-14">
              Revolutionize your Prelims + Mains + Interview preparation in an
              Integerated Manner
            </p>
            <p>#1 Most downloaded Judicial Services App</p>
            <div className="flex items-center gap-4 mt-4">
              <button className="flex items-center gap-2 p-2 bg-[#121212] rounded-md shadow-md hover:bg-black transition-all">
                <BiLogoPlayStore size={"2rem"} />
                <p className="flex flex-col items-start">
                  <span className="uppercase text-xs">get it on</span>
                  Google Play
                </p>
              </button>
              <button className="flex items-center gap-2 p-2 bg-[#121212] rounded-md shadow-md hover:bg-black transition-all">
                <BiLogoPlayStore size={"2rem"} />
                <p className="flex flex-col items-start">
                  <span className="uppercase text-xs">get it on</span>
                  Google Play
                </p>
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="py-20 relative flex flex-col justify-center overflow-hidden">
        <EmblaCarouselSlides slides={slides} options={options} />
      </section>
    </>
  );
};

export default Home;
