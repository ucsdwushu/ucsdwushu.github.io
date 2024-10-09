import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import WushuBg from "../assets/wushu_intro.mp4"

class IndexPage extends Component {
  componentDidMount() {
    var tooltip = document.querySelectorAll('.tooltip');

    document.addEventListener('mousemove', fn, false);

    function fn(e) {
      for (var i = tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
      }
    }
  }

  render() {
    const data = this.props.data;

    return (
      <Layout>
        <SEO title="Home" />
        {/*<a href="https://www.youtube.com/watch?v=cqVRAgQnIjY" id="hero" className="px-8 lg:px-16 block pt-16 min-h-screen flex pb-20 lg:pl-xs">
          <span className="tooltip hidden absolute bg-black text-white border-solid px-3 pt-2 pb-1 overflow-hidden whitespace-no-wrap" style={{ borderWidth: "1px", zIndex: "1000" }}>Click to watch our 2019 showreel</span>
          <video autoPlay muted loop className="absolute left-0 bottom-0 min-w-full min-h-full z-0" style={{ objectFit: "cover" }}>
            <source src={WushuBg} type="video/mp4" />
          </video>
          <h1 className="text-3xl lg:text-4xl mt-auto lg:pr-64 z-10" style={{ fontVariationSettings: "'wdth' 105" }}>
            We swing swords and do backflips for fun. We are performers and competitors. And sometimes, we sell egg rolls.
            <br />
            This is<span style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}> UCSD Wushu.</span>
          </h1>
        </a>*/}
        <span className="px-8 lg:px-16 block pt-16 min-h-screen flex pb-20 lg:pl-xs">
          <video autoPlay muted loop className="absolute left-0 bottom-0 min-w-full min-h-full z-0" style={{ objectFit: "cover" }}>
            <source src={WushuBg} type="video/mp4" />
          </video>
          <h1 className="text-3xl lg:text-4xl mt-auto lg:pr-64 z-10" style={{ fontVariationSettings: "'wdth' 105" }}>
            We swing swords and do backflips for fun. We are performers and competitors. And sometimes, we sell egg rolls.
            <br />
            {/*sadge*/}
            {/*This is<span style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}> UCSD Wushu.</span>*/}
            We are<span style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}> Wushu Club @ UC San Diego.</span>
          </h1>
        </span>
        <div className="border-solid border-t min-h-screen flex z-0 lg:pl-xs">
          <div className="border-solid lg:border-l min-w-full">
            <div className="border-solid border-b bg-black w-full flex flex-col lg:flex-row">
              <div className="py-16 px-8 lg:px-16 lg:w-1/2 border-solid lg:border-r">
                <h1 className="mb-4 text-5xl leading-tight" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
                  <span className="align-text-top text-xl">01</span> What is Wushu?
              </h1>
                <p className="text-lg">UCSD practices contemporary Chinese Wushu, an exhibition martial art developed after 1949 in the People’s Republic of China based on traditional Chinese martial arts. Wushu performances and competition are based on routines, called forms (taolu), in various events representing different styles and types of weapons used in traditional Chinese martial arts. In addition, there is also sparring (sanda), although the club does not practice sparring.</p>
              </div>
              <GatsbyImage className="lg:w-1/2" alt="Our pres doin cool shit :)" image={data.wushu.childImageSharp.gatsbyImageData} />
            </div>
            <div className="border-solid border-b bg-black w-full flex flex-col lg:flex-row">
              <GatsbyImage className="lg:w-1/2" alt="Our pres doin cool shit :)" image={data.wat.childImageSharp.gatsbyImageData} />
              <div className="py-16 px-8 lg:px-16 lg:w-1/2 bg-teal-400 text-black">
                <h1 className="mb-4 text-5xl leading-tight" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
                  <span className="align-text-top text-xl">02</span> I'm a beginner; can I join?
              </h1>
                <p className="text-lg mb-8">We welcome people of all ages and experience levels to come share our passion by enrolling in wushu classes as well as to form lifelong friendships by hanging out at club events.</p>
                <Link to="/class" className="transition duration-500 hover:bg-black hover:text-white py-3 px-4 text-lg inline-block w-2/3 border-solid border-black flex" style={{ borderWidth: "1px", fontVariationSettings: "'wght' 500" }}><span className="flex-grow">Enroll in a wushu class</span>🡪</Link>
              </div>
            </div>
            {/*
            <div className="bg-black w-full flex flex-col lg:flex-row">
              <div className="py-16 px-8 lg:px-16 lg:w-1/2 border-solid lg:border-r">
                <h1 className="mb-4 text-5xl leading-tight" style={{ fontVariationSettings: "'wdth' 125, 'wght' 700" }}>
                  <span className="align-text-top text-xl">03</span> What's the difference between wushu "class" and "club"?
              </h1>
                <p className="text-lg">To be part of the class, enroll in at least one of the three wushu classes offered through UCSD Recreation.</p>
                <br />
                <p className="text-lg">To be part of the club, show up to at least two club events throughout the quarter, including but not limited to socials, fundraisers, performances, and competitions.</p>
              </div>
              <GatsbyImage className="lg:w-1/2" alt="Socializing" sizes={{ ...data.soc.childImageSharp.fluid, aspectRatio: 4 / 3 }} />
            </div>
            */}
          </div>
        </div>
      </Layout>
    )
  }
}

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        wushu: file(relativePath: { eq: "images/wushu.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.333)
          }
        }
        wat: file(relativePath: { eq: "images/wat.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.333)
          }
        }
        soc: file(relativePath: { eq: "images/soc.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.333)
          }
        }
      }
    `}
    render={(data) => (
      <IndexPage data={data} />
    )} />
)
export default Index
