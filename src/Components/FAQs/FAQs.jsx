import Faq_Data from './FAQDATA';
import FAQ from './FAQ';
const FAQs = () => {
    return (
        <main>
            <section className='bg-gray-400 px-20 py-10'>
            <h1 className='text-center text-5xl'>FAQ </h1>
                {
                    Faq_Data.map( faq => <FAQ  key={faq.id} {...faq}/>)
                }
            </section>
        </main>
    )
}

export default FAQs;