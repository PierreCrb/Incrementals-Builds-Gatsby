// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { PageProps, Link } from "gatsby"
import Image from "../components/Image/Image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => {
  const [imageList] = useState([
    {
      file: "carte.png",
    },
    {
      file: "firstcommit.png",
    },
    {
      file: "gatsby-illustration.png",
    },
    {
      file: "icon-gatsby-netlify.png",
    },
    {
      file: "jolicode-lausanne.jpg",
    },
    {
      file: "jolicode.png",
    },
    {
      file: "lettre.png",
    },
    {
      file: "netlify.png",
    },
    {
      file: "post-premieroctet.png",
    },
    {
      file: "premieroctet.png",
    },
    {
      file: "screenguru.png",
    },
  ])
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>from the second page</h1>
      <p>Welcome to page 2 ({props.path})</p>
      {imageList.map((e, i) => (
        <Image class="logo-img" filename={e.file} key={i} alt="image" />
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
