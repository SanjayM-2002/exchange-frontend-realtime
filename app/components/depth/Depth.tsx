'use client';

import { useEffect, useState } from 'react';
import {
  getDepth,
  getKlines,
  getTicker,
  getTrades,
} from '../../utils/httpClient';
import { AskTable } from './AskTable';
import { BidTable } from './BidTable';
import Loader from '../common/Loader';

export function Depth({ market }: { market: string }) {
  const [bids, setBids] = useState<[string, string][]>();
  const [asks, setAsks] = useState<[string, string][]>();
  const [price, setPrice] = useState<string>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const depthData = await getDepth(market);
        setBids(depthData.bids.reverse());
        setAsks(depthData.asks);

        const tickerData = await getTicker(market);
        setPrice(tickerData.lastPrice);

        // Uncomment if you want to use these functions
        // const tradesData = await getTrades(market);
        // setPrice(tradesData[0].price);

        // const klinesData = await getKlines(market, "1h", 1640099200, 1640100800);
        // setPrice(klinesData[0].close);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [market]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div>
      <TableHeader />
      {asks && <AskTable asks={asks} />}
      {price && <div className='font-extrabold text-lg'>{price}</div>}
      {bids && <BidTable bids={bids} />}
    </div>
  );
}

function TableHeader() {
  return (
    <div className='flex justify-between text-xs'>
      <div className='text-white'>Price</div>
      <div className='text-slate-500'>Size</div>
      <div className='text-slate-500'>Total</div>
    </div>
  );
}
