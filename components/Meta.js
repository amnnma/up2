import React from "react";
import Head from "next/head";
import config from "tsconfig.json"

const Meta = () => {
  const web_url = config.web_url
  const title = 'Waste is money Upcycling is culture'
  const description = 'Upcycling วิถีใหม่แห่งการลดขยะ เพิ่มมูลค่าและช่วยโลก'
  const og_image = 'og_image.png'

  return (
    <>
      <Head>
      <title lang='th' >{title}</title>
        <link rel="icon" type="image/x-icon" href="fav2.ico" />
        <meta name="description" content={description}></meta>

        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />

        <meta property="og:image" content={web_url + '/' + og_image} />

        <meta property="og:url" content={web_url} />

        <meta name="twitter:title" content={title} />

        <meta name="twitter:description" content={description} />

        <meta name="twitter:card" content={title} />

        <meta name="twitter:image:src" content={web_url + '/' + og_image} />

        <meta property="twitter:url" content={web_url} />

      </Head>
    </>
  );
}

export default Meta;
