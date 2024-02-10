
import ButtonFlip from "@/app/components/utils/ButtonFlip";
import "../../components/stylessheets/Insights.css"
import Link from 'next/link';

const InsightItem = () => {
  return (
    <div>


      <div className='border-t py-10 flex flex-col gap-10 sm:flex-row'>

        <div className='w-[100%] sm:w-[40%]'>
        <img src="/assets/img/shops/shop (1).png" className="w-full"/>
        </div>

        <div className='w-[100%] sm:w-[60%] flex flex-col justify-between max-sm:mt-4'>

          <div className=''>
            <h3 className='text-2xl xl:text-4xl 2xl:text-5xl font-bold'>AVY Pruthi, Nuneaton business owner – Coventry & Warwickshire Chamber workshops</h3>
          </div>

          <div className='mt-2  flex flex-col sm:flex-row justify-between max-sm:items-start'>
            <ul className='flex flex-row items-center gap-10 text-gray font-bold max-sm:py-8 text-sm sm:text-lg'>
              <li>30 June 2021</li>
              <li className='border-l border-l-gray pl-4'>Business</li>
              <li className='border-l border-l-gray pl-4'>Design</li>
            </ul>
            <Link href="/shop">
            <ButtonFlip text="read article" />
            </Link>
           
          </div>
        </div>
      </div>

    </div>
  )
}

export default InsightItem
