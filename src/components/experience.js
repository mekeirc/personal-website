// Core
import React, { useState } from "react";
import styled, { css } from 'styled-components';

// Components
import Heading from "./heading";
import Paragraph from "./paragraph";
import { Section } from "../pages/homepage";
import Badge from "./badge";
import { MaxWidthContainer } from "../pages/homepage";

const Work = ({ role, company, duration }) => (
	<div className="pb-3 row">
		<div className="col-12 col-md-3 pb-2 pb-md-0">
			<Paragraph subtext color="burntOrange" className="mb-0">
				Role
			</Paragraph>
			<Heading as="h4" color="burntOrange">
				{role}
			</Heading>
		</div>
		<div className="col-12 col-md-3 pb-2 pb-md-0">
			<Paragraph subtext color="black" className="mb-0">
				Company
			</Paragraph>
			<Heading as="h4" color="black">
				{company}
			</Heading>
		</div>
		<div className="col-12 col-md-6 pb-2 pb-md-0">
			<Paragraph subtext className="mb-0">
				Duration
			</Paragraph>
			<Paragraph>{duration}</Paragraph>
		</div>
	</div>
);

const Tab = styled.button(({ theme }) => css`
    background: none;
    border: 0;
    padding: 0;

    &.active {
        border-bottom: 3px solid ${theme.colors.black};
		font-family: 'Cerebri-Sans-Bold';
    }
`);

const Experience = () => {
	const [tab, setTab] = useState("contract");

	return (
		<React.Fragment>
            <Section className="pb-0" id="experience">
                <MaxWidthContainer>
                    <Heading as="h2" color="burntOrange">
                        Experience
                    </Heading>
                    <Tab onClick={() => setTab('contract')} className={`${tab === 'contract' ? 'active me-3' : 'me-3'}`}>
                        <Paragraph color="black" className="mb-0">Contract</Paragraph>
                    </Tab>
                    <Tab onClick={() => setTab('permanent')} className={`${tab === 'permanent' ? 'active' : ''}`}>
                        <Paragraph color="black" className="mb-0">Permanent</Paragraph>
                    </Tab>
                </MaxWidthContainer>
            </Section>
			{tab === "contract" ? (
				<React.Fragment>
                    <Section lessPadding>
						<MaxWidthContainer>
							<Work
								role="Frontend Developer"
								company="The One Off"
								duration="4 Months (July 2022 - November 2022)"
							/>
							<Paragraph color="black" className="pb-2">
                                Contract Frontend Development for a successful design agency. Working with UX/UI Designers to produce frontend code for a large sporting goods client.
                                Complex state management and working with an external API to return products based on user questions.
							</Paragraph>
							<div className="d-flex align-items-baseline flex-wrap">
								<Badge small text="ReactJS" color="black" className="me-2" />
								<Badge small text="ES6 Javascript" color="black" className="me-2" />
								<Badge small text="HTML" color="black" className="me-2" />
								<Badge small text="git" color="black" className="me-2" />
								<Badge small text="npm" color="black" className="me-2" />
								<Badge small text="Bootstrap" color="black" className="me-2" />
								<Badge small text="CSS / SCSS / SASS" color="black" className="me-2" />
								<Badge small text="Styled Components" color="black" className="me-2" />
							</div>
						</MaxWidthContainer>
					</Section>
					<Section lessPadding background="lightGrey" bordered>
						<MaxWidthContainer>
							<Work
								role="UX/UI Designer"
								company="The One Off"
								duration="4 Days"
							/>
							<Paragraph color="black" className="pb-2">
                                Supporting UX/UI design for a successful design agency, working with a large client in the tobacco space.
                                Collaborating with existing UX designers to meet tight deadlines.
							</Paragraph>
							<div className="d-flex align-items-baseline flex-wrap">
								<Badge small text="Figma" color="burntOrange" className="me-2" />
                                <Badge small text="UX/UI Design" color="burntOrange" className="me-2" />
							</div>
						</MaxWidthContainer>
					</Section>
					<Section lessPadding>
						<MaxWidthContainer>
							<Work
								role="Frontend Developer"
								company="Eyekandy Ltd"
								duration="4 Days"
							/>
							<Paragraph color="black" className="pb-2">
								In June 2022 I worked on a small project with Eyekandy - an AR company making a
								microsite for their client: Durex. Here I was tasked with building out their github
								project into a microsite, with a product demo gallery to showcase the release of some
								new products.
							</Paragraph>
							<div className="d-flex align-items-baseline flex-wrap">
								<Badge small text="ReactJS" color="black" className="me-2" />
								<Badge small text="ES6 Javascript" color="black" className="me-2" />
								<Badge small text="HTML" color="black" className="me-2" />
								<Badge small text="git" color="black" className="me-2" />
								<Badge small text="npm" color="black" className="me-2" />
								<Badge small text="Bootstrap" color="black" className="me-2" />
								<Badge small text="CSS / SCSS / SASS" color="black" className="me-2" />
								<Badge small text="Styled Components" color="black" className="me-2" />
							</div>
						</MaxWidthContainer>
					</Section>
					<Section lessPadding background="lightGrey" bordered>
						<MaxWidthContainer>
							<Work
								role="Frontend Developer"
								company="Lumos/Nimble Innovation"
								duration="5 Months (Jan 2022 - May 2022)"
							/>
							<Paragraph color="black" className="pb-2">
								In 2022 I started contracting and quickly landed a frontend role with London-based
								Crypto startup - Lumos. Here I dealt with project management, planning and build of
								frontend technologies, devops (AWS) and working with Junior Backend developers to create
								a P2P Solana exchange. I also created weekly dev update videos with voiceover, wrote job
								specs and helped hire the right people to accelerate MVP to product.
							</Paragraph>
							<div className="d-flex align-items-baseline flex-wrap">
								<Badge small text="ReactJS" color="black" className="me-2" />
								<Badge small text="ES6 Javascript" color="black" className="me-2" />
								<Badge small text="HTML" color="black" className="me-2" />
								<Badge small text="git" color="black" className="me-2" />
								<Badge small text="npm" color="black" className="me-2" />
								<Badge small text="nodejs" color="black" className="me-2" />
								<Badge small text="Bootstrap" color="black" className="me-2" />
								<Badge small text="CSS / SCSS / SASS" color="black" className="me-2" />
								<Badge small text="Styled Components" color="black" className="me-2" />
								<Badge small text="Wireframing" color="burntOrange" className="me-2" />
								<Badge small text="Figma" color="burntOrange" className="me-2" />
							</div>
						</MaxWidthContainer>
					</Section>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Section lessPadding>
						<MaxWidthContainer>
							<Work
								role="Frontend Developer"
								company="Clicktech / Adzooma"
								duration="May 2019 - Oct 2021 (2½ Years) "
							/>
							<Paragraph color="black" className="pb-2">
								In May 2019 I joined Nottingham-based company Clicktech Solutions (Adzooma) as a mid
								level developer. Whilst working here I have massively improved my development skills and
								gained invaluable experience with production web app development. Here I learned ES6
								Javascript, REST, React Redux as well as charting libraries such as HiCharts. I was
								utilised for wireframing and designing new features and widgets, development of
								microsites (gatsby) and development and review of production code and standards.
							</Paragraph>
							<div className="d-flex align-items-baseline flex-wrap">
								<Badge small text="ReactJS" color="black" className="me-2" />
								<Badge small text="ES6 Javascript" color="black" className="me-2" />
								<Badge small text="HTML" color="black" className="me-2" />
								<Badge small text="Agile" color="black" className="me-2" />
								<Badge small text="git" color="black" className="me-2" />
								<Badge small text="npm" color="black" className="me-2" />
								<Badge small text="Bootstrap" color="black" className="me-2" />
								<Badge small text="CSS / SCSS / SASS" color="black" className="me-2" />
								<Badge small text="Styled Components" color="black" className="me-2" />
								<Badge small text="Wireframing" color="burntOrange" className="me-2" />
								<Badge small text="HiFi Design" color="burntOrange" className="me-2" />
							</div>
						</MaxWidthContainer>
					</Section>
					<Section background="lightGrey" bordered lessPadding>
						<MaxWidthContainer>
							<Work
								role="IT Engineer"
								company="Rightindem Ltd"
								duration="Apr 2018 - Apr 2019 (1 Year)"
							/>
							<Paragraph color="black" className="pb-2">
								After a downsize in the company I looked at other roles where I could provide value. In
								this role I managed internal infrastructure, handled equipment maintainence and repair,
								provided hardware &amp; software support for developers, set up testing stations for
								dev/design and managed various admin subscriptions.
							</Paragraph>
							<div className="d-flex align-items-baseline flex-wrap">
								<Badge small text="Infrastructure" color="black" className="me-2" />
								<Badge small text="Hardware Repair" color="black" className="me-2" />
								<Badge small text="Microsoft Azure" color="black" className="me-2" />
							</div>
						</MaxWidthContainer>
					</Section>
					<Section lessPadding className="mb-32">
						<MaxWidthContainer>
							<Work
								role="Junior Designer &amp; Developer / Junior Graphic Designer"
								company="Buying Butler Ltd / Rightindem Ltd"
								duration="Nov 2014 - Apr 2018 (4 Years)"
							/>
							<Paragraph color="black" className="pb-2">
								In November 2014 after an initial placement and internship I joined Nottingham-based
								tech startup Buying Butler as a Junior Designer &amp; Developer, where I helped design
								and develop their first product iteration, provided graphic design for business
								purposes, built employee workstations and started using wireframing tools and Bohemian
								Sketch for web design.
							</Paragraph>
							<Paragraph color="black" className="pb-2">
								In 2016 Buying Butler decided to merge into a new Company called Rightindem Ltd with
								another co-founder. At Rightindem I provided graphic design, web development and built
								styled components for their app projects.
							</Paragraph>
							<div className="d-flex align-items-baseline flex-wrap">
								<Badge small text="HTML" color="black" className="me-2" />
								<Badge small text="CSS" color="black" className="me-2" />
								<Badge small text="Wireframing" color="burntOrange" className="me-2" />
								<Badge small text="HiFi Design" color="burntOrange" className="me-2" />
							</div>
						</MaxWidthContainer>
					</Section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Experience;
