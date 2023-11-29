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

  // Añadir una comprobación para manejar el caso en el que 'post' es undefined
  if (!post) {
    // Puedes redirigir a una página de error o manejarlo de alguna otra manera
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
              {/* Resto del código */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
