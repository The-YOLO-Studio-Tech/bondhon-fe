'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashLargeAddCard, DashRegularAddCard, DashVerticalAddCard } from './Cards';
import Image from 'next/legacy/image';
import { useGetPageContent, useMutionPageContent } from '@/hooks/querey/pageContent.tsq';
import { enqueueSnackbar } from 'notistack';
import { useGetAdvertisementData } from '@/hooks/querey/useAdvertisementData';
import { AddType } from '@/models/HomePageCoontentType';

const MiniCard = ({ add, setOpen, addNum }: { add: AddType; setOpen: any; addNum: string }) => {
  const { mutateAsync } = useMutionPageContent();
  const handleClick = useCallback(async () => {
    let data;
    try {
      if (addNum == 'add1') {
        data = {
          page_name: 'home',
          content: { add1: add },
        };
      } else if (addNum == 'add2') {
        data = {
          page_name: 'home',
          content: { add2: add },
        };
      } else if (addNum == 'add3') {
        data = {
          page_name: 'home',
          content: { add3: add },
        };
      } else if (addNum == 'add4') {
        data = {
          page_name: 'home',
          content: { add4: add },
        };
      } else if (addNum == 'add5') {
        data = {
          page_name: 'home',
          content: { add5: add },
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
  }, [add, mutateAsync, setOpen, addNum]);
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image className="rounded-lg" src={add.add_banner} width={150} height={150} alt="thumbnail" />
    </div>
  );
};

const AddPost = ({ addNum }: { addNum: string }) => {
  const [open, setOpen] = useState(false);
  const { data: adds } = useGetAdvertisementData();
  const { data } = useGetPageContent('home');

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {addNum == 'add1' &&
          (data?.results?.[0].content.add1 ? (
            <DashRegularAddCard image={data?.results?.[0].content.add1.add_banner} />
          ) : (
            <DashRegularAddCard />
          ))}
        {addNum == 'add2' &&
          (data?.results?.[0].content.add2 ? (
            <DashVerticalAddCard
              image={data?.results?.[0].content.add2.add_banner}
              width={273}
              height={548}
            />
          ) : (
            <DashVerticalAddCard width={273} height={548} />
          ))}
        {addNum == 'add3' &&
          (data?.results?.[0].content.add3 ? (
            <DashVerticalAddCard
              image={data?.results?.[0].content.add3.add_banner}
              width={273}
              height={430}
            />
          ) : (
            <DashVerticalAddCard width={273} height={430} />
          ))}
        {addNum == 'add4' &&
          (data?.results?.[0].content.add4 ? (
            <DashLargeAddCard image={data?.results?.[0].content.add4.add_banner} />
          ) : (
            <DashLargeAddCard />
          ))}
        {addNum == 'add5' &&
          (data?.results?.[0].content.add5 ? (
            <DashLargeAddCard image={data?.results?.[0].content.add5.add_banner} />
          ) : (
            <DashLargeAddCard />
          ))}
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>অ্যাড সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="flex flex-wrap gap-4">
            {adds &&
              adds.results.map((add: AddType) => (
                <MiniCard key={add.id} add={add} setOpen={(x: any) => setOpen(x)} addNum={addNum} />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddPost;
