'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashCategoryCard, DashSideCategoryCard } from './Cards';
import Image from 'next/legacy/image';
import { useGetPageContent, useMutionPageContent } from '@/hooks/querey/pageContent.tsq';
import { enqueueSnackbar } from 'notistack';
import { CategoryType, useGetCategoryData } from '@/hooks/querey/category.tsq';

const MiniCard = ({
  category,
  setOpen,
  categoryNum,
}: {
  category: CategoryType;
  setOpen: any;
  categoryNum: string;
}) => {
  const { mutateAsync } = useMutionPageContent();
  const handleClick = useCallback(async () => {
    try {
      let data;
      if (categoryNum === 'feature_post_category1') {
        data = {
          page_name: 'home',
          content: { feature_post_category1: category },
        };
      } else if (categoryNum === 'feature_post_category2') {
        data = {
          page_name: 'home',
          content: { feature_post_category2: category },
        };
      } else if (categoryNum === 'feature_post_category3') {
        data = {
          page_name: 'home',
          content: { feature_post_category3: category },
        };
      } else if (categoryNum === 'feature_post_category4') {
        data = {
          page_name: 'home',
          content: { feature_post_category4: category },
        };
      } else if (categoryNum === 'feature_post_category5') {
        data = {
          page_name: 'home',
          content: { feature_post_category5: category },
        };
      } else if (categoryNum === 'feature_post_category6') {
        data = {
          page_name: 'home',
          content: { feature_post_category6: category },
        };
      } else if (categoryNum === 'feature_post_category7') {
        data = {
          page_name: 'home',
          content: { feature_post_category7: category },
        };
      } else if (categoryNum === 'feature_post_category8') {
        data = {
          page_name: 'home',
          content: { feature_post_category8: category },
        };
      } else if (categoryNum === 'feature_post_category9') {
        data = {
          page_name: 'home',
          content: { feature_post_category9: category },
        };
      } else if (categoryNum === 'feature_post_category10') {
        data = {
          page_name: 'home',
          content: { feature_post_category10: category },
        };
      } else if (categoryNum === 'feature_post_category11') {
        data = {
          page_name: 'home',
          content: { feature_post_category11: category },
        };
      } else if (categoryNum === 'feature_post_category12') {
        data = {
          page_name: 'home',
          content: { feature_post_category12: category },
        };
      } else if (categoryNum === 'feature_post_category13') {
        data = {
          page_name: 'home',
          content: { feature_post_category13: category },
        };
      } else if (categoryNum === 'feature_post_category14') {
        data = {
          page_name: 'home',
          content: { feature_post_category14: category },
        };
      } else if (categoryNum === 'feature_post_category15') {
        data = {
          page_name: 'home',
          content: { feature_post_category15: category },
        };
      } else if (categoryNum === 'feature_post_category16') {
        data = {
          page_name: 'home',
          content: { feature_post_category16: category },
        };
      } else if (categoryNum === 'feature_post_category17') {
        data = {
          page_name: 'home',
          content: { feature_post_category17: category },
        };
      } else if (categoryNum === 'feature_post_category18') {
        data = {
          page_name: 'home',
          content: { feature_post_category18: category },
        };
      } else if (categoryNum === 'feature_post_category19') {
        data = {
          page_name: 'home',
          content: { feature_post_category19: category },
        };
      } else if (categoryNum === 'feature_post_category20') {
        data = {
          page_name: 'home',
          content: { feature_post_category20: category },
        };
      } else if (categoryNum === 'feature_post_category21') {
        data = {
          page_name: 'home',
          content: { feature_post_category21: category },
        };
      } else if (categoryNum === 'feature_post_category22') {
        data = {
          page_name: 'home',
          content: { feature_post_category22: category },
        };
      }
      await mutateAsync(data);
      setOpen(false);
      enqueueSnackbar('Saved', { variant: 'success' });
    } catch (err: any) {
      for (let key of err.errors) {
        enqueueSnackbar(`${key?.detail}`, { variant: 'error' });
      }
    }
  }, [category, mutateAsync, setOpen, categoryNum]);
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image
        className="rounded-lg"
        src={category?.thumbnail}
        width={150}
        height={150}
        alt="thumbnail"
      />
      <p>{category?.title}</p>
    </div>
  );
};

const FeaturePostCategory = ({ categoryNum }: { categoryNum: string }) => {
  const [open, setOpen] = useState(false);
  const { data: category } = useGetCategoryData();
  const { data } = useGetPageContent('home');
  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {categoryNum == 'feature_post_category1' &&
          (data?.results?.[0]?.content?.feature_post_category1 ? (
            <DashSideCategoryCard
              image={data?.results?.[0].content?.feature_post_category1.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
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
          ))}
        {categoryNum == 'feature_post_category5' &&
          (data?.results?.[0]?.content?.feature_post_category5 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category5.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category6' &&
          (data?.results?.[0]?.content?.feature_post_category6 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category6.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category7' &&
          (data?.results?.[0]?.content?.feature_post_category7 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category7.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category8' &&
          (data?.results?.[0]?.content?.feature_post_category8 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category8.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category9' &&
          (data?.results?.[0]?.content?.feature_post_category9 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category9.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category10' &&
          (data?.results?.[0]?.content?.feature_post_category10 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category10.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category11' &&
          (data?.results?.[0]?.content?.feature_post_category11 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category11.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category12' &&
          (data?.results?.[0]?.content?.feature_post_category12 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category12.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category13' &&
          (data?.results?.[0]?.content?.feature_post_category13 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category13.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category14' &&
          (data?.results?.[0]?.content?.feature_post_category14 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category14.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category15' &&
          (data?.results?.[0]?.content?.feature_post_category15 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category15.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category16' &&
          (data?.results?.[0]?.content?.feature_post_category16 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category16.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category17' &&
          (data?.results?.[0]?.content?.feature_post_category17 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category17.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category18' &&
          (data?.results?.[0]?.content?.feature_post_category18 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category18.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category19' &&
          (data?.results?.[0]?.content?.feature_post_category19 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category19.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category20' &&
          (data?.results?.[0]?.content?.feature_post_category20 ? (
            <DashSideCategoryCard
              image={data?.results?.[0].content?.feature_post_category20.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category21' &&
          (data?.results?.[0]?.content?.feature_post_category21 ? (
            <DashSideCategoryCard
              image={data?.results?.[0].content?.feature_post_category21.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category22' &&
          (data?.results?.[0]?.content?.feature_post_category22 ? (
            <DashSideCategoryCard
              image={data?.results?.[0].content?.feature_post_category22.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category23' &&
          (data?.results?.[0]?.content?.feature_post_category23 ? (
            <DashSideCategoryCard
              image={data?.results?.[0].content?.feature_post_category23.thumbnail}
            />
          ) : (
            <DashSideCategoryCard />
          ))}
        {categoryNum == 'feature_post_category24' &&
          (data?.results?.[0]?.content?.feature_post_category24 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category24.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category25' &&
          (data?.results?.[0]?.content?.feature_post_category25 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category25.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
        {categoryNum == 'feature_post_category26' &&
          (data?.results?.[0]?.content?.feature_post_category26 ? (
            <DashCategoryCard
              image={data?.results?.[0].content?.feature_post_category26.thumbnail}
            />
          ) : (
            <DashCategoryCard />
          ))}
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>ক্যাটেগরি সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="flex flex-wrap gap-4">
            {category?.results?.length > 0 &&
              category?.results?.map((category: CategoryType) => (
                <MiniCard
                  key={Math.random()}
                  category={category}
                  setOpen={(x: any) => setOpen(x)}
                  categoryNum={categoryNum}
                />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeaturePostCategory;
