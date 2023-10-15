import Image from 'next/legacy/image';

export const DashFeaturedCard = ({
  image = '/images/uploadImages/featuredCategory.png',
}: {
  image?: string;
}) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          layout="responsive"
          objectFit="cover"
          width={576}
          height={625}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export const DashVideoCard = ({ url, title }: { url?: string; title?: string }) => {
  return (
    <>
      {url ? (
        <div>
          <div className="relative w-full  h-48 xl:h-[250px]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${new URL(url).searchParams.get('v')}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <button className="py-2 bg-[#392FA3] text-white leading-[140%] w-full text-center font-medium xl:text-xl xl:py-5">
            {title}
          </button>
        </div>
      ) : (
        <div className="relative">
          <Image
            src={'/images/uploadImages/video.png'}
            layout="responsive"
            objectFit="cover"
            width={273}
            height={289}
            alt="placeholder"
          />
        </div>
      )}
    </>
  );
};

export const DashSideCategoryCard = ({ image = '/images/uploadImages/featuredCategory.png' }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          layout="responsive"
          objectFit="cover"
          width={273}
          height={135}
          alt="placeholder"
        />
      </div>
    </div>
  );
};
export const DashCategoryCard = ({ image = '/images/uploadImages/addMainCategory.png' }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          layout="responsive"
          objectFit="cover"
          width={273}
          height={289}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export const DashAddCard = ({
  image,
  width,
  height,
}: {
  image?: string;
  width: number;
  height: number;
}) => {
  return (
    <div>
      <div className="">
        {image ? (
          <Image
            src={image}
            layout="responsive"
            objectFit="cover"
            width={width}
            height={height}
            alt="img"
          />
        ) : (
          <div className="relative w-fit">
            <div className="relative w-fit">
              <Image src="/images/cardBg.png" width={width} height={height} alt="img" />
            </div>
            <div className="absolute top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p>add</p>
              <p className="text-2xl font-semibold pt-2">
                {width}x{height}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export const DashBlogAddCard = ({
  image,
  width,
  height,
}: {
  image?: string;
  width: number;
  height: number;
}) => {
  return (
    <div>
      <div className="">
        {image ? (
          <Image
            src={image}
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            alt="img"
          />
        ) : (
          <div className="relative w-fit">
            <div className="relative w-fit">
              <Image src="/images/cardBg.png" width={400} height={400} alt="img" />
            </div>
            <div className="absolute top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p>add</p>
              <p className="text-2xl font-semibold pt-2">
                {width}x{height}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const DashLargeAddCard = ({ image = '/images/uploadImages/largeAdd.png' }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          layout="responsive"
          objectFit="cover"
          width={875}
          height={238}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export const DashVerticalAddCard = ({
  width,
  height,
  image = '/images/uploadImages/verticalAdd.png',
}: {
  width: any;
  height: any;
  image?: any;
}) => {
  return (
    <div>
      <div className="relative">
        <Image src={image} layout="responsive" width={width} height={height} alt="placeholder" />
      </div>
    </div>
  );
};

export const DashRegularAddCard = ({ image = '/images/uploadImages/verticalAdd.png' }) => {
  return (
    <div>
      <div className="relative">
        <Image src={image} layout="responsive" width={273} height={306} alt="placeholder" />
      </div>
    </div>
  );
};
