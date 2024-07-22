'use client';

import { Depth } from '@/app/components/depth/Depth';
import { Marketbar } from '@/app/components/Marketbar';
import { SwapSection } from '@/app/components/SwapSection';
import { TradeView } from '@/app/components/TradeView';
import { useParams } from 'next/navigation';

export default function Page() {
  const { market } = useParams();

  return (
    <div className='flex flex-col flex-1'>
      {/* <div className='flex flex-col flex-1 bg-yellow-200'>
        Marketbar section
        <div className='flex flex-row h-[620px] border-y border-slate-800 bg-green-400'>
          <div className='flex flex-col flex-1'>Tradeview section</div>
          <div className='w-[1px] flex-col border-slate-800 border-l'></div>
          <div className='flex flex-col w-[250px] overflow-hidden bg-red-400'>
            Depth section
          </div>
        </div>
      </div>
      <div className='w-[1px] flex-col border-slate-800 border-l'></div>
      <div>
        <div className='flex flex-col w-[250px] bg-blue-200'>Swap section</div>
      </div> */}
      <div className='flex flex-col flex-1 border-yellow-200 border-2'>
        <Marketbar market={market as string} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-[2.5fr_1fr_1fr] border-y border-slate-800 border-2  h-auto'>
        <div className='flex flex-col flex-1 border-yellow-200 border-2'>
          <TradeView market={market as string} />
        </div>
        <div className='flex flex-col w-auto overflow-hidden border-yellow-200 border-2'>
          Depth section
          <Depth market={market as string} />
        </div>

        <div className='flex flex-col w-auto border-yellow-200 border-2'>
          <SwapSection market={market as string} />
        </div>
      </div>
    </div>
  );
}
