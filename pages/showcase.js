import { ShowCase } from "@/sections"
import Head from "next/head"
import React from "react"

const showcase = () => {
  return (
    <>
      <Head>
        <title>TotalGuard Assurance</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ShowCase />
    </>
  )
}

export default showcase
