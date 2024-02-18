import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="w-full relative">
        <h1 className="text-center text-2xl font-bold pt-12 pb-4 font-sans">
          Why this repository ?
        </h1>
        <div className="flex flex-col md:flex-row w-[95%] lg:w-[80%] mx-auto  gap-12 md:gap-12 max-w-[1920px] lg:gap-16 3xl:text-[1.1vw] 3xl:leading-[2vw] 4xl:text-xl pt-6">
          <div className="w-full">
            <p className=" break-words whitespace-pre-line text-justify text-lg">
              The creation of this repository is a vital response to the
              pressing issue of Indigenous language endangerment. With 43
              percent of global languages facing endangerment, the repository
              plays a crucial role in safeguarding the invaluable repository of
              traditional knowledge, memories, values, practices, and unique
              worldviews embedded within these languages. Among the world&apos;s
              7,000 recognized languages, half of which are Indigenous,
              approximately 6,000 languages are currently endangered, with 1,500
              at particular risk (Australian National University: 2021).
              Linguistic forecasts paint a bleak picture, indicating that by the
              end of this century, 50% to 90% of languages could be at risk of
              extinction or severe endangerment.
            </p>
          </div>
          <div className="w-full">
            <p className=" break-words whitespace-pre-line text-justify text-lg">
              In the context of Odisha, where we focus on Indigenous languages,
              the situation is critical. While some languages thrive, others
              like Birhor, Parji, Pengo, Paraja, Gta & Remo are on the brink of
              extinction. According to the UNESCO Atlas of the World&apos;s
              Languages in Danger project, half of the Indigenous languages in
              Odisha are classified as &quot;definitely,&quot;
              &quot;severely,&quot; or &quot;critically&quot; endangered, while
              the remaining are deemed &quot;vulnerable/unsafe.&quot; This
              repository stands as a vital initiative to document, preserve, and
              revitalize these endangered languages, ensuring that the rich
              tapestry of cultural heritage embedded in them endures for
              generations to come.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-HeroBackground w-full relative">
        <h1 className="text-center text-2xl font-bold pt-12 pb-4 font-sans">
          About KISS & KIIT
        </h1>
        <div className="flex flex-col md:flex-row w-[95%] lg:w-[80%] mx-auto  gap-12 md:gap-12 max-w-[1920px] lg:gap-16 3xl:text-[1.1vw] 3xl:leading-[2vw] 4xl:text-xl">
          <div className="w-full">
            <div className="flex justify-center pb-8">
              <Image
                src="/about/kiitLogo.png"
                alt="KIIT logo"
                width={300}
                height={300}
                className="w-[100px] h-[75px] mt-8 mb-4 flex-shrink-0"
              ></Image>
            </div>
            <p className=" break-words whitespace-pre-line text-justify text-lg">
              Kalinga Institute of Social Sciences (KISS) and Kalinga Institute
              of Industrial Technology (KIIT) stand as inspirations of academic
              excellence and societal progress in Bhubaneswar, Odisha. While
              KISS specializes in social empowerment and cultural preservation
              of Indigenous communities, KIIT is recognized as an eminent
              technological hub in India. The creation of an Indigenous language
              repository by these esteemed institutions signifies a harmonious
              blend of social consciousness and technological advancement. It
              represents a joint effort to preserve and celebrate the linguistic
              and cultural diversity of Indigenous communities, ensuring that
              their voices and heritage continue to thrive for generations to
              come.
            </p>
          </div>
          <div className="w-full">
            <div className="flex justify-center pb-8">
              <Image
                src="/about/kissLogo.png"
                alt="KIIT logo"
                width={300}
                height={300}
                className="w-[93px] h-[85px] mt-6 mb-3.5"
              ></Image>
            </div>
            <p className=" break-words whitespace-pre-line text-justify text-lg">
              By creating an Indigenous language repository, KISS & KIIT aim to
              address the pressing need to safeguard and promote Indigenous
              languages. These repositories serve as invaluable archives of
              linguistic and cultural heritage, providing a platform for
              documentation, research, and revitalization efforts. Additionally,
              they play a crucial role in bridging the gap between traditional
              knowledge systems and modern technology, ensuring that Indigenous
              languages remain relevant and accessible in today&apos;s digital
              world.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0056D2] py-12 mt-12 text-white font-sans">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-center text-2xl font-bold md:pb-0 font-sans pb-8 uppercase">
            Knowledge partner
          </h1>
          <div className="flex gap-4 md:gap-12 flex-col-reverse sm:flex-row items-center">
            <div className="max-w-screen-lg mx-auto mt-12">
              <h1 className="font-semibold text-2xl">Dr. Satya Ranjan Dash</h1>
              <p className=" break-words whitespace-pre-line text-justify text-lg pt-2">
                Dr. Satya Ranjan Dash currently works at the School of Computer
                Applications, KIIT Deemed to be University as an Associate
                Professor. Satya does research in Machine Translation, Natural
                Language and Speech Processing. His current project is on
                Automatic Speech Procesing for Low resource Languages.
              </p>
            </div>
            <div className="border-4 border-white rounded-full 8 flex justify-center items-center flex-shrink-0 h-56 w-56">
              <Image
                src="/about/kiitLogo.png"
                alt="KIIT logo"
                width={300}
                height={300}
                className="w-[100px] h-[75px] mt-8 mb-4 flex-shrink-0"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
