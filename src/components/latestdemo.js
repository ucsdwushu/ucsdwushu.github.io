import React from "react"
import BackgroundImage from "gatsby-background-image"

const LatestDemo = ({ name, date, link, img }) => {
  return (
    <BackgroundImage
    className="p-8 lg:px-16 lg:py-12 flex-grow flex w-full text-xl lg:text-4xl z-10 border-solid border-b tiny-bg-tint"
    style={{ height: "50vh" }}
    fluid={img}>
    <h1 className="mt-auto text-lg lg:text-xl" style={{ fontVariationSettings: "'wdth' 125" }}>
      Latest demo:
      <br/>
      {/*<p class="border-b border-transparent transition duration-250 text-xl lg:text-3xl" style={{ fontVariationSettings: `'wdth' 125` }}><strong>2023 Chinese Union</strong> Oct 1, 2023</p>*/}
      <a href={link} className="border-b border-transparent hover:border-gray-100 transition duration-250 text-xl lg:text-3xl" style={{ fontVariationSettings: `'wdth' 125` }}>
        <strong>{name}</strong> {date}</a>
    </h1>
  </BackgroundImage>
  )
}

export default LatestDemo