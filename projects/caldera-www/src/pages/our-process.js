import React from 'react'
import { Layout, SEO, Hero, Section } from '../components'
import styled, { css } from 'styled-components'
import { media } from '@caldera-digital/theme'

import OurProcessHero from '../assets/images/gamebyrd-mocks.png'
import ItsADateWelcomeFlow from '../assets/images/its-a-date-welcome-flow.png'
import POTMMockup from '../assets/images/pride-of-the-meadows-product-mockup.png'

const CallOut = styled.div`
  border-left: 6px solid ${props => props.theme.secondaryColor};
  padding-left: 1rem;
`

const Image = styled.img`
  object-fit: contain;

  ${({ floatLeft }) =>
    floatLeft &&
    css`
      float: left;
    `}

  ${({ floatRight }) =>
    floatRight &&
    css`
      float: right;
    `}
`

const ProcessImage2 = styled(Image)``

const FinalProductSection = styled.div`
  display: flex;
  margin-top: 2.5rem;

  > img {
    width: 40%;
  }

  > div {
    width: 60%;
    padding-left: 6rem;
  }

  ${media.forSmallOnly`
    flex-direction: column;

    > img {
      width: 80%;
      max-width: 250px;
      display: block;
      margin: 0 auto;
    }

    > div {
      width: 100%;
      padding: 0;
    }

  `}
`

const OurProcess = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Join our Process" />
      <Hero
        secondary
        title="How We Tackle Big Problems"
        secondaryText="We look at every project as an explosion of ideas – we move fast, we break things down, and at the end you’re left with something great that works just right."
        heroImgConfig={{
          src: OurProcessHero,
          alt: 'Gamebyrd proof of concept',
        }}
      />
      <Section>
        <Section.H2>Discover</Section.H2>
        <p>
          Step one - sit down with key stakeholders and current customers to
          discuss goals, learn more about your business and talk about your
          current digital strategy. We dive into any and all metrics, analytics
          or other information available to establish a measurable baseline. The
          purpose of all of this? To devise a way to tailor those metrics to
          your digital strategy for your desired outcome.
        </p>
        <Section.Image
          src={ItsADateWelcomeFlow}
          alt="Welcome screen for Its a Date"
          floatRight
          phoneImage
        />
        <p>
          We know – planning sucks. Plans change, timing changes, you know the
          drill. But, to reach any measurable outcome, we can’t move forward
          without a moment of planning. That’s why we’re always looking towards
          the future. Who are your prospective users? What do their experience
          and tech needs look like down the road?
        </p>
        <Section.H2>Design</Section.H2>
        <p>
          The discovery phase grants us two major pieces of information need to
          start designing:
        </p>
        <CallOut>
          <p>
            Buyer personas of an ideal customer: This is a 360-degree view of a
            user that details what their pains are, how they interact with the
            internet, and even a short story about them (this part is fun)
          </p>
          <p>
            A conversion funnel: This shows how we intend on attracting
            prospective customers and what steps we will take to bring them down
            the funnel to full conversion.
          </p>
        </CallOut>
        <p>
          From here, we move on to initial wireframes to illustrate a user’s
          journey from first-time visitor to converted customer. Wireframes lead
          to mockups, either static or interactive depending on the complexity
          of the application. The last step of this process is to determine the
          features needed for a 1.0 launch. This mirrors the conversion flow and
          user journey crafted via the wireframes.
        </p>
        <Section.H2>Development</Section.H2>
        <p>
          Development is a whirlwind. We move quickly through this phase, with
          two-week iterations that help us develop features to mirror the
          customer’s journey. Key stakeholders are an invaluable resource, fully
          interacting in each iteration. We keep you involved in all projects
          through a continuous integration flow, so you are able to see progress
          online as we complete features.
        </p>
        <Section.H2>Refinement</Section.H2>
        <p>
          Once the website is launched we begin to measure everything. There’s
          normally a backlog of features to add to the application after the 1.0
          launch, and we use analytics to determine the priority for completing
          each feature. At this point in the process, we’re no longer guessing
          what a prospective user wants - we’re using data and leaning on our
          insights from the design process to be precise in our next steps.
        </p>
        <p>
          Our primary focus for most clients starts with website, but it’s
          important to keep all other digital aspects in mind. Your website
          serves as the center of your digital strategy, and everything else you
          present online should be done to generate traffic to the website and
          lead customers through the conversion funnel.
        </p>

        <FinalProductSection>
          <ProcessImage2 src={POTMMockup} alt="Pride of the Meadows mockup" />
          <div>
            <Section.H2>A final product – for now</Section.H2>
            <p>
              While this process may end, the project is often on-going. Our
              process is refined to keep our clients involved without any added
              stress. We ensure that you are given a memorable experience with
              high-quality results. We are always here to analyze post-launch
              results, manage add-ons, and to celebrate your success!
            </p>
          </div>
        </FinalProductSection>
      </Section>
    </Layout>
  )
}

export default OurProcess