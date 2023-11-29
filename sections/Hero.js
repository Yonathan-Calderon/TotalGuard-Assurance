import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import HeroBanner from "@/components/HeroBanner"
import HeroSection from "@/components/HeroSection"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <HeroBanner />
      <HeroSection home={home} />
      
      
      <Testimonial />
      
      <Brand />
      <Title title='LATEST NEWS & ARTICLES' />
      <BlogCard />
    </>
  )
}

export default Hero
