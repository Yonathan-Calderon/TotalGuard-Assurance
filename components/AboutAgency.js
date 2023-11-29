
import { Title, TitleSm } from "@/components/common/Title";

const AboutAgency = () => {
  return (
    <section className='agency '>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title='ABOUT US' /> <br />
          <br />
          <Title title="The last insurance provider you'll ever need" className='title-bg' />
        </div>

        <div className='content flex'>
          <div className='left w-100'>
            <div className='flex-wrap'>
              <div className='box'>
                <h1 className='gray'>10+</h1>
                <h3>Years of experience</h3>
              </div>
              <div className='box'>
                <h1 className='gray'>50+</h1>
                <h3>Successful cases</h3>
              </div>
              <div className='box'>
                <h1 className='gray'>12+</h1>
                <h3>Industry awards</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='content flex'>
          <div className='left w-40 py'>
            <img src='/images/aboutUs.webp' alt='Img' className='round' width='100%' height='100%' />
          </div>
          <div className='right w-60 ml'>
            <TitleSm title='Our Mission: Nurturing Security, Fostering Well-being' />
            <br />
            <p className='misson-p'>
                At the heart of our mission is a dedication to nurturing security and fostering well-being. We strive to be more than an insurance provider—we aim to be a steadfast guardian, offering a sanctuary of protection and peace in a world of uncertainties. Our holistic approach goes beyond policies, emphasizing a commitment to safeguarding aspirations, dreams, and futures. Join us on this journey where trust, transparency, and unwavering dedication converge to create a community that resonates with the diverse needs of our cherished clientele. We are more than a service; we are the beacon of security, the nurturer of dreams, and the guardian of your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAgency;
