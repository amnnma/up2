import React from "react";
import Head from "next/head";


const Meta = () => {
  const title = 'Waste is money Upcycling is culture'
  const description = 'Upcycling วิถีใหม่แห่งการลดขยะ เพิ่มมูลค่าและช่วยโลก'
  const og_image = 'og_image.png'

  return (
    <>
      <Head>
        <title lang='th' >{title}</title>
        <link rel="icon" type="image/x-icon" href="/upcycling/favicon.ico" />
        <meta name="description" content={description}></meta>

        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />

        <meta property="og:image" content={og_image} />

      </Head>
    </>
  );
}

export default Meta;
