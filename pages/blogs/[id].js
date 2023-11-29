import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  
  if (!post) {
    
    return <div>Post no encontrado</div>
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='50%' height='100%' className='round' />
            </div>
            <div className='desc'>
            <TitleSm title=' Navigating the Layers of Protection for Your Peace of Mind' />
              <p className='desc-p'>Your home is more than just a physical structure; it's a sanctuary where memories are created and cherished. As a homeowner, ensuring the security of your haven is paramount. In this comprehensive guide, we delve into the fundamentals of home insurance, unraveling the layers of protection that contribute to the safeguarding of your home and the well-being of your loved ones.</p>

              <p className='desc-p'>Home insurance serves as a financial safety net, offering coverage for your dwelling and personal belongings in the face of unforeseen events. From natural disasters to theft or accidents, having a robust insurance policy provides peace of mind, allowing you to navigate life's uncertainties with confidence.</p>

              <p className='desc-p'>Before delving into the world of home insurance, it's crucial to assess your coverage needs. Take a moment to evaluate the value of your home, the replacement cost of your belongings, and any potential liabilities you may face. Building a comprehensive understanding of your unique requirements will guide you in selecting the right insurance coverage.</p>

              <p className='desc-p'>Home insurance typically encompasses various types of coverage, each serving a specific purpose. Dwelling coverage shields the structure of your home, including walls, roofs, and built-in appliances. Personal property coverage extends its protective umbrella to your belongings, covering everything from furniture to electronics. Liability coverage steps in to provide financial protection in case of injury on your property for which you may be held responsible. Additionally, Additional Living Expenses (ALE) coverage can ease the burden of temporary living arrangements if your home becomes uninhabitable due to covered damage.</p>

              <p className='desc-p'>A myriad of factors influences the cost of home insurance premiums. Your home's location, characteristics, security measures, and even your claims history can impact the amount you pay for coverage. Installing security systems, smoke detectors, and deadbolts not only enhance your home's safety but may also qualify you for potential discounts on your premiums.</p>

              <p className='desc-p'>Shopping for home insurance is a significant decision that warrants careful consideration. Beyond comparing quotes, explore customer reviews, the reputation of insurance providers, and the level of customer service they offer. The goal is not just to find affordable coverage but to establish a relationship with an insurer that values your peace of mind as much as you do.</p>

              <p className='desc-p'>In the dynamic landscape of life, your insurance needs evolve alongside it. Regularly reviewing and updating your policy ensures that it aligns with any changes in your home, possessions, or lifestyle. This proactive approach guarantees that your coverage remains comprehensive and tailored to your unique circumstances.</p>

              <p className='desc-p'>Securing your home with the right insurance coverage is an investment in the tranquility and safety of your sanctuary. It's a testament to the importance of protecting not just a house, but the cherished moments and the life within its walls. As you embark on the journey of home ownership, let a comprehensive home insurance policy be your steadfast companion, providing a foundation for security and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
