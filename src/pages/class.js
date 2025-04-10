import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      track: file(relativePath: { eq: "images/class/track.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
              track2: file(relativePath: { eq: "images/class/track2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
        rimac: file(relativePath: { eq: "images/class/rimac.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gd: file(relativePath: { eq: "images/gd.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="lg:pl-xs">
        <div className="border-solid lg:border-l min-w-full min-h-screen">
          <BackgroundImage className="px-8 lg:px-16 pt-40 lg:pt-16 pb-8 lg:pb-16 border-solid border-b bg-tint" fluid={data.track.childImageSharp.fluid}>
            <h1 className="text-3xl lg:text-4xl mt-auto lg:pr-64 z-10" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
              Class
            </h1>
              <h3 className="text-lg lg:text-xl text-gray-500" >Last updated <strong>Apr 7th 2025</strong></h3>
          </BackgroundImage>
          
          <div className="px-8 lg:px-16 py-16">
            <p className="text-lg max-w-3xl">
            <br></br><br></br>Our classes feature training for individuals of all skill levels. These practices feature technique drills, advanced technique training (e.g. jumps), and form tutoring. 
            <br></br><br></br>To register for classes, please join our <a className="cyan" href="https://discord.com/invite/F6gSrcG">Discord</a>
            <br></br> <br></br>Class locations are tentative and may change throughout the quarter. Please check Discord for updates before heading to class.
            </p>
            <p className="text-lg max-w-3xl">
              
            </p>
            <h2 className="text-2xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Classes</h2>
             {<div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl">
              {/*sunday class*/}
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Sunday</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong><Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">Nathan</Link></strong> and takes place at the <strong>Triton Track and Field Stadium.</strong></p>
                <p className="pb-6 text-gray-400">A class for everyone</p>
                <p className="text-lg">1pm-3pm</p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.track.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}></h1>
              </BackgroundImage>
                            {/*monday class*/}
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Monday</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong><Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">Alex</Link></strong> and takes place at <strong>Eighth College Lawn.</strong></p>
                <p className="pb-6 text-gray-400">We focus on improving the quality of your combos, basics, and forms </p>
                <p className="text-lg">3pm-5pm</p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.rimac.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}></h1>
              </BackgroundImage>
                            {/*wednesday class*/}
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Wednesday</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong><Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">Serena</Link></strong> and takes place at <strong>TBA.</strong></p>
                <p className="pb-6 text-gray-400">We focus on improving the quality of your combos, basics, and forms</p>
                <p className="text-lg">5pm-7pm</p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.track2.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}></h1>
              </BackgroundImage>
{/*saturday class*/}
              <div className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}>Saturday</h1>
                <p className="pb-6 text-gray-400">This class is coached by <strong><Link to="/cabinet" className="border-b border-gray-700 hover:border-gray-100">Jess, Nathan, Alex, Seth</Link></strong></p>
                <p className="pb-6 text-gray-400">A class focused on competition preparation and training jumps. This class takes place at an off-campus Wushu studio.</p>
                <p className="text-lg">6:30pm-10:30pm</p>
              </div>
              <BackgroundImage className="border-solid py-6 pl-6 pr-8" style={{ borderWidth: "1px" }} fluid={data.gd.childImageSharp.fluid}>
                <h1 className="text-xl pb-2" style={{ fontVariationSettings: "'wdth' 125, 'wght' 600" }}></h1>
              </BackgroundImage>
      </div>}
            <p className="text-lg max-w-5xl pt-6">
              All classes are arranged directly with the club.
            </p>
            <p className="text-lg max-w-5xl pt-3">
              We accept payment in the following forms:
              <ul className="list-disc pt-2">
                <li>Venmo: @Wushu-UCSD</li>
                <li>Zelle: ucsdwushu@gmail.com</li>
                <li>Cash: talk to a cabinet member via Discord or at practice to make an arrangement.</li>
              </ul>
            </p>
            <h2 className="text-5xl pt-8 pb-4" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>Safety guidelines</h2>
            <p className="text-lg max-w-3xl">
                In accordance with UCSD Policy, wearing masks is optional but are still recommended during indoor practices
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default IndexPage
