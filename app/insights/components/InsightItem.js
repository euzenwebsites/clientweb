
import "../../components/stylessheets/Insights.css"
import Link from 'next/link';

const InsightItem = () => {
  return (
    <div>


      <div className='border-t py-10 flex flex-col sm:flex-row'>

        <div className='w-[100%] sm:w-[40%]'>
        <img src="/assets/img/shops/shop (1).png" />
        </div>

        <div className='w-[100%] sm:w-[60%] flex flex-col justify-between max-sm:mt-4'>

          <div className=''>
            <h3 className='text-3xl sm:text-5xl font-bold'>AVY Pruthi, Nuneaton business owner – Coventry & Warwickshire Chamber workshops</h3>
          </div>

          <div className='mt-2  flex flex-col sm:flex-row justify-between max-sm:items-start'>
            <ul className='flex flex-row items-center gap-10 text-gray font-bold max-sm:py-8'>
              <li>30 June 2021</li>
              <li className='border-l border-l-gray pl-4'>Business</li>
              <li className='border-l border-l-gray pl-4'>Design</li>
            </ul>

            <Link href="/shop" className='bg-orange rounded-full text-white font-bold px-8 py-4 uppercase'>read article</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InsightItem
