import CategoryCart from './CategoryCart';
import LoadingCard from './LoadingCard';

const DisplayCategory = ({ data }: { data: any }) => {
  return (
    <div>
      {data?.category ? (
        <CategoryCart title={data?.category?.title} image={data?.category?.thumbnail_b64} />
      ) : (
        <LoadingCard width={295} height={312} />
      )}
      {/* {categoryNum == 'feature_post_category1' &&
          (data?.results?.[0]?.content?.feature_post_category1 ? (
            <ThumnileCategoryCart
              image={data?.results?.[0].content?.feature_post_category1.thumbnail}
            />
          ) : (
            <LoadingCard width={295} />
          ))}
        {categoryNum == 'feature_post_category2' &&
          (data?.results?.[0]?.content?.feature_post_category2 ? (
            <DashSideCategoryCard
              image={data?.results?.[0].content?.feature_post_category2.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category3' &&
          (data?.results?.[0]?.content?.feature_post_category3 ? (
            <DashSideCategoryCard
              image={data?.results?.[0].content?.feature_post_category3.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category4' &&
          (data?.results?.[0]?.content?.feature_post_category4 ? (
            <DashSideCategoryCard
              image={data?.results?.[0].content?.feature_post_category4.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))} */}
      {/* {categoryNum == 'feature_post_category5' &&
        (data?.results?.[0]?.content?.feature_post_category5 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category5.title}
            image={data?.results?.[0].content?.feature_post_category5.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category6' &&
        (data?.results?.[0]?.content?.feature_post_category6 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category6.title}
            image={data?.results?.[0].content?.feature_post_category6.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category7' &&
        (data?.results?.[0]?.content?.feature_post_category7 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category7.title}
            image={data?.results?.[0].content?.feature_post_category7.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category8' &&
        (data?.results?.[0]?.content?.feature_post_category8 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category8.title}
            image={data?.results?.[0].content?.feature_post_category8.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category9' &&
        (data?.results?.[0]?.content?.feature_post_category9 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category9.title}
            image={data?.results?.[0].content?.feature_post_category9.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category10' &&
        (data?.results?.[0]?.content?.feature_post_category10 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category10.title}
            image={data?.results?.[0].content?.feature_post_category10.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category11' &&
        (data?.results?.[0]?.content?.feature_post_category11 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category11.title}
            image={data?.results?.[0].content?.feature_post_category11.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category12' &&
        (data?.results?.[0]?.content?.feature_post_category12 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category12.title}
            image={data?.results?.[0].content?.feature_post_category12.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category13' &&
        (data?.results?.[0]?.content?.feature_post_category13 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category13.title}
            image={data?.results?.[0].content?.feature_post_category13.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category14' &&
        (data?.results?.[0]?.content?.feature_post_category14 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category14.title}
            image={data?.results?.[0].content?.feature_post_category14.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category15' &&
        (data?.results?.[0]?.content?.feature_post_category15 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category15.title}
            image={data?.results?.[0].content?.feature_post_category15.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category16' &&
        (data?.results?.[0]?.content?.feature_post_category16 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category16.title}
            image={data?.results?.[0].content?.feature_post_category16.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category17' &&
        (data?.results?.[0]?.content?.feature_post_category17 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category17.title}
            image={data?.results?.[0].content?.feature_post_category17.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category18' &&
        (data?.results?.[0]?.content?.feature_post_category18 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category18.title}
            image={data?.results?.[0].content?.feature_post_category18.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category19' &&
        (data?.results?.[0]?.content?.feature_post_category19 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category19.title}
            image={data?.results?.[0].content?.feature_post_category19.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category20' &&
        (data?.results?.[0]?.content?.feature_post_category20 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category20.title}
            image={data?.results?.[0].content?.feature_post_category20.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category21' &&
        (data?.results?.[0]?.content?.feature_post_category21 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category21.title}
            image={data?.results?.[0].content?.feature_post_category21.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category22' &&
        (data?.results?.[0]?.content?.feature_post_category22 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category22.title}
            image={data?.results?.[0].content?.feature_post_category22.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category23' &&
        (data?.results?.[0]?.content?.feature_post_category23 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category23.title}
            image={data?.results?.[0].content?.feature_post_category23.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category24' &&
        (data?.results?.[0]?.content?.feature_post_category24 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category24.title}
            image={data?.results?.[0].content?.feature_post_category24.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category25' &&
        (data?.results?.[0]?.content?.feature_post_category25 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category25.title}
            image={data?.results?.[0].content?.feature_post_category25.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
      {/* {categoryNum == 'feature_post_category26' &&
        (data?.results?.[0]?.content?.feature_post_category26 ? (
          <CategoryCart
            title={data?.results?.[0].content?.feature_post_category26.title}
            image={data?.results?.[0].content?.feature_post_category26.thumbnail}
          />
        ) : (
          <LoadingCard width={295} height={312} />
        ))} */}
    </div>
  );
};

export default DisplayCategory;
