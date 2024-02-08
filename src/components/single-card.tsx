import Image from "next/image";
import Link from "next/link";
import EllipsisText from "./ellipse-text";

const SingleCard = ({
  url,
  desc,
  title,
  link,
}: {
  url: string;
  desc: string;
  title: string;
  link: string;
}) => {
  return (
    <div className="rounded-lg overflow-hidden font-sans border box-shadow hover:scale-105 transition-all duration-500 max-w-xs sm:max-w-60">
      <div className="h-32">
        <Image
          src={url}
          alt={desc}
          width={300}
          height={100}
          className="w-full object-cover h-full"
        ></Image>
      </div>
      <div className="flex flex-col pb-4 h-[180px] justify-between">
        <div>
          <Link href={link}>
            <div className="p-2 text-sm sm:text-base font-semibold">
              {title}
            </div>
          </Link>
          <div className="px-2 text-[10px] sm:text-xs font-medium text-gray-600 hover:text-black">
            <EllipsisText text={desc} maxCharacters={150} />
          </div>
        </div>
        <Link href={link}>
          <span className="text-blue-700 text-sm px-2 hover:text-blue-600">Know more</span>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
