import Image from "../../../Image";
const MetaItem = ({ imageUrl, alt, value }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image imageUrl={imageUrl} alt={alt} className="w-4 h-4 md:w-6 md:h-6" />
      {value}
    </div>
  );
};

export default MetaItem;
