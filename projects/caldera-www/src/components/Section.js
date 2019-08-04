import React from 'react'
import styled, { css } from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import { jiggle } from '../style/utils'

const FancyContainer = styled(Container)`
  ${({ twoColumn }) =>
    twoColumn &&
    css`
      display: flex;

      ${Section.Column} {
        &:first-child {
          width: 40%;
          padding-right: 2rem;
        }

        &:last-child {
          width: 60%;
        }
      }

      ${media.forSmallMediumOnly`
        flex-direction: column;

        ${Section.Column} {
          &:first-child {
            width: 70%;
            padding-right: 0;
          }

          &:last-child {
            width: 100%;
          }
        }
      `}

      ${media.forSmallOnly`

        ${Section.Column} {
          &:first-child {
            width: 100%;
          }

          &:last-child {
            width: 100%;
          }
        }
      `}
    `}
`

const SectionContainer = styled.section`
  padding: ${props =>
    props.smallPadding ? '2rem 0' : props.noPadding ? '0' : '5rem 0 4rem'};
  position: relative;
  background-color: ${props => {
    if (props.lightBackground) {
      return props.theme.lightBackgroundColor
    }
    if (props.backgroundColor) {
      return props.backgroundColor
    }

    return 'transparent'
  }};
  min-height: ${props => (props.bottomBackgroundImage ? '800px' : 'auto')};

  ${media.forSmallMediumOnly`
    padding: ${props =>
      props.smallPadding ? '1.5rem 0' : props.noPadding ? '0' : '4rem 0 3rem'};
    min-height: auto !important;
  `}

  ${media.forSmallOnly`
    padding: ${props =>
      props.smallPadding ? '1.25rem 0' : props.noPadding ? '0' : '3rem 0'};
  `}
`

const BottomBackgroundImage = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 400px;
  opacity: 0.55;
  z-index: -1;
  background-size: cover;
  background-image: url(${props => props.bottomBackgroundImage});
  background-repeat: no-repeat;

  ${media.forSmallOnly`
    display: none;
  `}
`

const BlobContainer = styled.div`
  position: relative;
  width: 45%;

  svg {
    width: 130%;
    position: absolute;
    left: -40%;
    bottom: -25%;
    animation: 15s ${jiggle} infinite;
  }
`

const SectionHeader = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
  padding: 0 1rem;

  ${media.forSmallMediumOnly`
    font-size: 2.75rem;
    margin-bottom: 3rem;
  `}

  ${media.forSmallOnly`
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  `}
`

export const Section = ({
  children,
  fluid = false,
  blob: Blob,
  smallPadding = false,
  noPadding = false,
  lightBackground,
  backgroundColor,
  bottomBackgroundImage,
  renderSection,
  sectionContainerStyle = {},
  contentContainerStyle = {},
  sectionContainerClassName = '',
  twoColumn = false,
  renderColumnOne = () => null,
  renderColumnTwo = () => null,
  header,
  // This is needed for styled components when we style the section component
  className,
}) => {
  return (
    <SectionContainer
      backgroundColor={backgroundColor}
      lightBackground={lightBackground}
      bottomBackgroundImage={bottomBackgroundImage}
      style={sectionContainerStyle}
      sectionContainerClassName={sectionContainerClassName}
      smallPadding={smallPadding}
      noPadding={noPadding}
    >
      {header && <SectionHeader>{header}</SectionHeader>}
      {renderSection ? (
        renderSection()
      ) : (
        <FancyContainer
          fluid={fluid}
          style={contentContainerStyle}
          className={className}
          twoColumn={twoColumn}
        >
          {Blob && (
            <BlobContainer>
              <Blob />
            </BlobContainer>
          )}

          {twoColumn ? (
            <>
              {renderColumnOne()}
              {renderColumnTwo()}
            </>
          ) : (
            children
          )}
        </FancyContainer>
      )}
      {bottomBackgroundImage ? (
        <BottomBackgroundImage bottomBackgroundImage={bottomBackgroundImage} />
      ) : null}
    </SectionContainer>
  )
}

export const BlobSection = styled(Section)`
  display: flex;
  min-height: 400px;
  padding-right: 3rem;

  ${media.forSmallOnly`
    padding: 0 1rem;
    min-height: auto;

    ${BlobContainer} {
      display: none;
    }
  `}
`

Section.BoldText = styled.p`
  font-weight: bold;
  color: ${props => props.theme.black};
  margin: 0;
`

Section.H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${props => props.theme.primaryColor};
  margin: 2.5rem 0 1.5rem;

  &:first-of-type {
    margin-top: 0;
  }

  ${media.forSmallMediumOnly`
    font-size: 2.4rem;
  `}

  ${media.forSmallOnly`
    font-size: 2rem;
  `}
`

Section.Image = styled.img`
  object-fit: contain;
  position: relative;
  z-index: 10;

  ${({ floatLeft }) =>
    floatLeft &&
    css`
      float: left;
      padding: 0 0 1rem 1rem;
    `}

  ${({ floatRight }) =>
    floatRight &&
    css`
      float: right;
      padding: 0 1rem 1rem 0;
    `}


  ${({ responsive }) =>
    responsive &&
    css`
      width: 100%;
      height: 100%;
    `}

  ${({ phoneImage }) =>
    phoneImage &&
    css`
      ${media.forSmallMediumOnly`
        max-width: 250px;
      `}

      ${media.forSmallOnly`
        float: none;
        max-width: 175px;
        display: block;
        margin: 1.5rem auto;
      `}
    `}
`

Section.Column = styled.div`
  ${({ fluidGuard }) =>
    fluidGuard &&
    css`
      max-width: 800px;
      padding-right: 4rem;

      ${media.forSmallMediumOnly`
        margin: 0 auto;
        padding: 0 1rem;
      `}
    `}
`

Section.OrderedList = styled.ol``
Section.UnorderedList = styled.ol``

Section.ListItem = styled.li`
  line-height: 1.5;
  margin-bottom: 1rem;
`

Section.ResponsiveVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`
