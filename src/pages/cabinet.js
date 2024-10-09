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
      benson: file(relativePath: { eq: "images/cabinet/benson.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      jessica: file(relativePath: { eq: "images/cabinet/jessica.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1)
        }
      }
      jerwey: file(relativePath: { eq: "images/cabinet/jerwey.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1)
        }
      }
      james: file(relativePath: { eq: "images/cabinet/james.JPG" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1)
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
      nathan: file(relativePath: { eq: "images/cabinet/nathan.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      zhoujie: file(relativePath: { eq: "images/cabinet/zhoujie.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1)
        }
      }
      serena: file(relativePath: { eq: "images/cabinet/serena.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
        }
      }
      novak: file(relativePath: { eq: "images/cabinet/novak.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, aspectRatio: 1.5)
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
            name="James Young"
            desc="James is a senior in Computer Science with Bioinformatics at Revelle College. He revels in collaging what is purposive without purpose. Attainment of this desired end entails erratic enrollment in electives, labor in unrelated labs, and living in different colleges (5/8✓). Young James's first martial art was taijiquan, as it didn't strike as very martial. He now practices more ostensibly combative forms—changquan and jianshu—albeit even less combatively."
            img={data.james.childImageSharp.gatsbyImageData} />
          <Member
            title="Coach & Demo Choreographer"
            name="Nathan"
            desc="Nathan is a fourth year Computer Engineering major… that’s all."
            img={data.nathan.childImageSharp.gatsbyImageData} />
          <Member
            title="Coach"
            name="Serena Xie"
            desc="Serena is a fourth year data science and chinese studies major at Marshall College. As a Jojo stan, she has mastered the art of posing and has thus obtained a stand power which enables her to function with a cursed amount of sleep."
            img={data.serena.childImageSharp.gatsbyImageData} />
          <Member
            title="Internal"
            name="Jerwey Guo"
            desc={`Jerwey is a third year Sociology major. Some may say he is going through an existential crisis: an ex-vegetarian, non-STEM pre-med, constantly deciding whether he should land that jump on his two broken knees. However, knowing him, things are probably less serious in the places where he stands—it’s all made up. As club internal, he’ll keep you in the loop about the what, where, and when of all our exciting events, so stick around and keep your eyes peeled for the fun!`}
            img={data.jerwey.childImageSharp.gatsbyImageData}
            /*useSmallFont="1"*/ />
          <Member
            title="Treasurer"
            name="Jessica Ju"
            desc="Jessica is a third year Linguistics (Speech and Language Sciences) major. In her five years of wushu experience she has practiced various forms including straight sword, fan, and emei piercers. She is also passionate about learning Mandarin and enjoys watching Chinese dramas and listening to Chinese music. As treasurer, she manages class payments, organizes fundraisers, and handles funding and reimbursements."
            img={data.jessica.childImageSharp.gatsbyImageData} />
          {/* dw we will never let jeremy retire
          <Member
            title="Demo Coordinator"
            name="Jeremy Lei"
            desc={`Jeremy “Big J” is a fourth year Math-CS major at seventh college. After his return to wushu, he has lost all sense of shame (though I’m not sure he had any to begin with) and can frequently be found doing wushu in the wild (especially hammerfists). When not performing this strange ritual, he can usually be found downing Tapex’s fried chicken and milk tea or procrastinating on his homework.`}
            img={data.jeremy.childImageSharp.gatsbyImageData} /> */}

          {/*Right Column*/}
          <Member
            title="President"
            name="Zhoujie Yu"
            desc="Zhoujie Y. is a senior in the Nanoengineering department. She has a huge sweet tooth despite not liking things that are too sweet and also has an eternal attraction to bread/pastries. Aside from wushu, she has too many hobbies for the amount of time that she is free. You can usually find her either in class, in the library, or wandering out and about for no particular reason. As a certified senior, she presides over the club and maintains its peace and prosperity."
            img={data.zhoujie.childImageSharp.gatsbyImageData} />
          <Member
            title="Coach"
            name="Alex Zhang"
            desc="Alex Zhang is a fourth year ICAM major and CSE minor. He started wushu in Beijing, China as a kid (elementary school), but stopped practicing regularly in high school. He then started training for competitive wushu in college. Outside of wushu, he plays a lot of video games - Mostly fps games and occasionally plays cs casually."
            img={data.alex.childImageSharp.gatsbyImageData} />
          <Member
            title="External"
            name="Vivian Yu"
            desc="vivian is a 3rd year math-cs major who is allergic to capital letters and going to class. she is awake for approximately no hours a day and can often be seen napping at practice. her favorite classroom to sleep in is the back row of warren lecture hall because you can lean your head against the wall there. as externals she makes the graphics and videos seen on ucsd wushu’s social media accounts when her wrist isn’t in a cast."
            img={data.vivian.childImageSharp.gatsbyImageData} />
          <Member
            title="Secretary"
            name="Benson Zhu"
            desc="Benson is a second year Math CS major with a minor in Data Science who enjoys all things silly. When he isn’t distracted and rotting at Geisel, he enjoys baking and playing video games. As the club secretary, he takes care of logistics behind the scenes, and occasionally buying items for club events. Behind his rbf and excessively loud metal music, he is always up for a conversation, so do say hi and maybe he will even have an extra baked treat for you!"
            img={data.benson.childImageSharp.gatsbyImageData} />
            <Member
            title="Historian"
            name="Novak Tatarevic"
            desc=""
            img={data.novak.childImageSharp.gatsbyImageData}/>
          {/*<Member
            title="Freeloader"
            name="Bobby Reilly"
            desc="Bobby is occasionally at practice - not to do anything productive, just to let his anger out on children."
            img={data.bobby.childImageSharp.gatsbyImageData} />*/}
          
        </BackgroundImage>
    </Layout>
  )
}

export default IndexPage
