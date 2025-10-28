import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Member from "../components/member"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      vivian: file(relativePath: { eq: "images/cabinet/vivian.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      benson: file(relativePath: { eq: "images/cabinet/benson.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1)
        }
      }
      bingbing: file(relativePath: { eq: "images/cabinet/bingbing.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1)
        }
      }
      jerwey: file(relativePath: { eq: "images/cabinet/jerwey.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.1)
        }
      }
      brandon: file(relativePath: { eq: "images/cabinet/brandon.JPG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.1)
        }
      }
      bobby: file(relativePath: { eq: "images/cabinet/bobby.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      jeremy: file(relativePath: { eq: "images/cabinet/jeremy.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      jess: file(relativePath: { eq: "images/cabinet/jess.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 0.75)
        }
      }
      nathan: file(relativePath: { eq: "images/cabinet/nathan.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
        daniel: file(relativePath: { eq: "images/cabinet/daniel.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1)
        }
      }
      serena: file(relativePath: { eq: "images/cabinet/serena.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      novak: file(relativePath: { eq: "images/cabinet/novak.JPG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.1)
        }
      }
              alex: file(relativePath: { eq: "images/cabinet/alex.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      all: file(relativePath: { eq: "images/cabinet/troll.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Cabinet" />
      <BackgroundImage
          fluid={data.all.childImageSharp.fluid}
          className="px-8 lg:px-16 pt-16 min-h-screen pb-20 lg:pl-xs"
          style={{ columns: "2 400px", columnGap: "0.75rem", paddingTop: "65vh", backgroundAttachment: "fixed", backgroundColor: "rgba(0,0,0,.50)", backgroundBlendMode: "multiply" }}>
          <div className="inline-block text-xl lg:text-3xl mb-8" style={{ fontVariationSettings: "'wdth' 125, 'wght' 400" }}>
            <h1>Everything falls under the responsibility of <strong>cabinet</strong>. If you have any questions or concerns, talk to us—we don't bite!</h1>
          </div>
          {/*Left Column*/}
          <Member
            title="Vice President"
            name="vivian yu"
            desc="vivian (虞薇) is a 4th year feeble scholar in ERC. as vice president her duties include collecting swords (currently 6 in her possession at the time of writing), trafficking goods from china, and breaking and entering into the CSE building. when she is not present at practice you may find her asleep in class, asleep in a lab meeting, or asleep at work. her favorite wushu forms are jian (straightsword) and wing chun."
            img={data.vivian.childImageSharp.gatsbyImageData} />
          <Member
            title="Demo Choreographer"
            name="Daniel Xie"
            desc="Daniel is a second year Human Biology major who’s practiced Wushu long enough to sacrifice both knees in the name of martial arts. After skipping practices, his splits were stolen by Alex (splits can’t be created or destroyed, only transferred)."
            img={data.daniel.childImageSharp.gatsbyImageData} />
          <Member
            title="Coach"
            name="Serena Xie"
            desc="Serena is a fourth year data science and chinese studies major at Marshall College. As a Jojo stan, she has mastered the art of posing and has thus obtained a stand power which enables her to function with a cursed amount of sleep."
            img={data.serena.childImageSharp.gatsbyImageData} />
          <Member
            title="Internal"
            name="BingBing Guinto"
            desc={`BingBing is a second year MCB major whose cackle you’ve probably heard echoing all the way from Revelle. When she isn’t stressing over that one pesky class, she can be found watching videos instead of studying, and getting her third drink from Audrey’s Cafe. As internals, she’s in charge of <s>peer pressuring you to go to socials</s> encouraging socialization and planning your next Wushu memory. Amid her chaotic personality, she is very friendly, so don't be afraid to suggest any socials you want to have!`}
            img={data.bingbing.childImageSharp.gatsbyImageData}
            /*useSmallFont="1"*/ />
          <Member
            title="Treasurer"
            name="Brandon Nguyen"
            desc="My name is Brandon Nguyen and I’m a 4th year business economics student. I have a background in taekwondo and roughly 4 years of wushu experience. Hobbies of mine include reading, watching tv, and cooking fancy meals."
            img={data.brandon.childImageSharp.gatsbyImageData} />
          {/* don't delete this, we will never let jeremy retire
          <Member
            title="Demo Coordinator"
            name="Jeremy Lei"
            desc={`Jeremy “Big J” is a fourth year Math-CS major at seventh college. After his return to wushu, he has lost all sense of shame (though I’m not sure he had any to begin with) and can frequently be found doing wushu in the wild (especially hammerfists). When not performing this strange ritual, he can usually be found downing Tapex’s fried chicken and milk tea or procrastinating on his homework.`}
            img={data.jeremy.childImageSharp.gatsbyImageData} /> */}

          <Member
            title="President"
            name="Jerwey Guo"
            desc="Jerwey is a third year Sociology major. Some may say he is going through an existential crisis: an ex-vegetarian, non-STEM pre-med, constantly deciding whether he should land that jump on his two broken knees. However, knowing him, things are probably less serious in the places where he stands—it’s all made up. As club internal, he’ll keep you in the loop about the what, where, and when of all our exciting events, so stick around and keep your eyes peeled for the fun!"
            img={data.jerwey.childImageSharp.gatsbyImageData} />

          <Member
            title="Coach"
            name="Alex Zhang"
            desc="Alex Zhang is a fourth year ICAM major and CSE minor. He started wushu in Beijing, China as a kid (elementary school), but stopped practicing regularly in high school. He then started training for competitive wushu in college. Outside of wushu, he plays a lot of video games - Mostly fps games and occasionally plays cs casually."
            img={data.alex.childImageSharp.gatsbyImageData} />

          <Member
            title="Secretary"
            name="Benson Zhu"
            desc="Benson is a 3rd year Math CS major who is chronically online. When he isn't accidentally bruising himself at practice, he enjoys baking sweet treats and listening to metal at potentially debilitating volumes. As the club secretary, he is constantly reminding you of that one thing that you were supposed to do several weeks ago and talking about current happenings (off and on topic). Behind his rbf lies a hunger for conversation and a little laugh, so do say hi !"
            img={data.benson.childImageSharp.gatsbyImageData} />
            <Member
            title="Historian"
            name="Novak Tatarevic"
            desc="Novak is a second year Anthropology Major with an Archaeology concentration. In his role as historian he is mostly concerned with farming raw material (photos and videos) for the UCSD Wushu content machine. As for martial arts, he has had experience in more traditional Chinese martial arts (Shaolin Kung Fu) and has started practicing contemporary styles since joining the club. Outside of all that, he enjoys a good adventure (aka: lots of walking), nature, cooking, writing, and videogames. "
            img={data.novak.childImageSharp.gatsbyImageData}/>
          {/*<Member
            title="Freeloader"
            name="Bobby Reilly"
            desc="Bobby is occasionally at practice - not to do anything productive, just to let his anger out on children."
            img={data.bobby.childImageSharp.gatsbyImageData} />*/}
              <Member
            title="Coach"
            name="Jessica Tuey"
            desc={"Jess is a 4th-year Kinesiology (pre-PT) major & Psychology minor at San Diego State. Aside from coaching UCSD’s club, she also coaches and presides over the new Aztec Wushu Club at SDSU. She loves her miaodao and enjoys hauling that giant sword to every wushu event possible. Her specialty is mostly traditional kung fu and some changquan, but she hopes to practice more contemporary wushu. Besides training, she enjoys eating copious amounts of food, side questing with friends, crashing out over the NFL, and lifting heavy circles. If you want workout advice, an adventure buddy, or just to yap, please don’t hesitate to reach out! "}
            img={data.jess.childImageSharp.gatsbyImageData} />
          
        </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
