'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import Image from 'next/legacy/image';
import { useGetAdvertisementData } from '@/hooks/querey/useAdvertisementData';
import { AddType } from '@/models/HomePageCoontentType';
import { DashAddCard } from './Cards';
import { useGetLandingAdd, useUploadLandingAdd } from '@/hooks/querey/pageContent.tsq';

const MiniCard = ({
  add,
  setOpen,
  addNum,
  open,
}: {
  add: any;
  setOpen: any;
  addNum: string;
  open: boolean;
}) => {
  const { mutateAsync } = useUploadLandingAdd();
  const handleClick = useCallback(async () => {
    try {
      const body = {
        sl: Number(addNum),
        advertisementId: add.id,
      };
      mutateAsync(body);
      setOpen(!open);
    } catch (error) {}
  }, [addNum, add, mutateAsync, setOpen, open]);
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image className="rounded-lg" src={add.base64} width={150} height={150} alt="thumbnail" />
    </div>
  );
};

const AddPost = ({ addNum }: { addNum: string }) => {
  const [open, setOpen] = useState(false);
  const { data: adds } = useGetAdvertisementData();
  const { data } = useGetLandingAdd();

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <DashAddCard
          image={data?.find((i: any) => i.id == Number(addNum))?.advertisement?.base64}
          addNum={addNum}
          width={295}
          height={84}
        />

        {/* {addNum == 'topAdd' &&
          (data?.results?.[0]?.content?.topAdd ? (
            <DashAddCard
              width={295}
              height={84}
              image={data?.results?.[0]?.content?.topAdd?.add_banner}
            />
          ) : (
            <DashAddCard width={295} height={84} />
          ))} */}
        {/* 
        {addNum == 'add1' &&
          (data?.results?.[0]?.content?.add1 ? (
            <DashAddCard
              width={273}
              height={306}
              image={data?.results?.[0]?.content?.add1?.add_banner}
            />
          ) : (
            <DashAddCard width={273} height={306} />
          ))} */}
        {/* {addNum == 'add2' &&
          (data?.results?.[0]?.content?.add2 ? (
            <DashVerticalAddCard
              image={data?.results?.[0]?.content?.add2?.add_banner}
              width={273}
              height={548}
            />
          ) : (
            <DashVerticalAddCard width={273} height={548} />
          ))} */}
        {/* {addNum == 'add3' &&
          (data?.results?.[0]?.content?.add3 ? (
            <DashVerticalAddCard
              image={data?.results?.[0].content.add3.add_banner}
              width={273}
              height={430}
            />
          ) : (
            <DashVerticalAddCard width={273} height={430} />
          ))} */}
        {/* {addNum == 'add4' &&
          (data?.results?.[0]?.content.add4 ? (
            <DashLargeAddCard image={data?.results?.[0]?.content?.add4?.add_banner} />
          ) : (
            <DashLargeAddCard />
          ))} */}
        {/* {addNum == 'add5' &&
          (data?.results?.[0]?.content?.add5 ? (
            <DashLargeAddCard image={data?.results?.[0]?.content?.add5?.add_banner} />
          ) : (
            <DashLargeAddCard />
          ))} */}
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>অ্যাড সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="flex flex-wrap gap-4">
            {adds &&
              adds.map((add: AddType) => (
                <MiniCard
                  key={add.id}
                  add={add}
                  open={open}
                  setOpen={(x: any) => setOpen(x)}
                  addNum={addNum}
                />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPost;
