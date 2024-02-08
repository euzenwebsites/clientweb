import PhilosophyItem from '@/app/components/ui/PhilosophyItem'



const PhilosophySec = () => {
  return (
    <section className='w-[100%] flex justify-center mt-20'>
        <div className="w-[90%] ">
        <PhilosophyItem number="01" heading="PASSIONATE" description="We breathe life into brands through creative design, driven by our love for making a difference."/>
        <PhilosophyItem number="02" heading="BE CURIOUS" description="We question, we explore, and we deliver successful outcomes fueled by our curiosity." />
        <PhilosophyItem  number="03" heading="COMMUNICATE" description="We keep it straightforward, no jargon. We're always in touch."/>
        <PhilosophyItem number="04" heading="GRATEFUL" description="Every opportunity to work with new clients is an honour, regardless of size."/>
        <PhilosophyItem number="05" heading="USER IN MIND" description="We keep it straightforward, no jargon. We're always in touch."/>
        <PhilosophyItem number="06" heading="CONSTANT LEARNING " description="We believe in the power of collaboration, shared knowledge & continuous learning."/>
        </div>
    </section>
  )
}

export default PhilosophySec
