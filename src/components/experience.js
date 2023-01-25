// Core
import React, { useState } from "react";
import styled, { css } from 'styled-components';

// Components
import Heading from "./heading";
import Paragraph from "./paragraph";
import { Section } from "../components/homepage";
import Badge from "./badge";
import { MaxWidthContainer } from "../components/homepage";
import { Contracts, Perms } from "../constants";

const reversedContracts = Contracts.map(contract => contract).reverse();
const reversedPerms = Perms.map(perm => perm).reverse();

const JobInfo = ({ role, company, duration }) => (
	<div className="pb-3 row">
		<div className="col-12 col-md-4 pb-2 pb-md-0">
			<Paragraph subtext color="burntOrange" className="mb-0">
				Role
			</Paragraph>
			<Heading as="h4" color="burntOrange">
				{role}
			</Heading>
		</div>
		<div className="col-12 col-md-4 pb-2 pb-md-0">
			<Paragraph subtext color="black" className="mb-0">
				Company
			</Paragraph>
			<Heading as="h4" color="black">
				{company}
			</Heading>
		</div>
		<div className="col-12 col-md-4 pb-2 pb-md-0">
			<Paragraph subtext className="mb-0">
				Duration
			</Paragraph>
			<Paragraph>{duration}</Paragraph>
		</div>
	</div>
);

const WorkSection = ({ type }) => (
	type === "contracts" ? (
		reversedContracts.map((job) => (
			<Section lessPadding striped className="py-5">
				<MaxWidthContainer>
					<JobInfo
						role={job.role}
						company={job.company}
						duration={job.duration}
					/>
					<Paragraph color="black" className="pb-2">
						{job.text}
					</Paragraph>
					<div className="d-flex align-items-baseline flex-wrap">
						{job && job.tags.map((tag) => (
							<Badge small text={tag.name} color={tag.color} className="me-2" />
						))}
					</div>
				</MaxWidthContainer>
			</Section>
	))
	) : (
		reversedPerms.map((job) => (
			<Section lessPadding striped className="py-5">
				<MaxWidthContainer>
					<JobInfo
						role={job.role}
						company={job.company}
						duration={job.duration}
					/>
					<Paragraph color="black" className="pb-2">
						{job.text}
					</Paragraph>
					<div className="d-flex align-items-baseline flex-wrap">
						{job && job.tags.map((tag) => (
							<Badge small text={tag.name} color={tag.color} className="me-2" />
						))}
					</div>
				</MaxWidthContainer>
			</Section>
		))
));

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
                    <Tab onClick={() => setTab('contract')} className={`${tab === 'contract' ? 'active me-5' : 'me-5'}`}>
                        <Paragraph color="black" className="mb-0">Contract</Paragraph>
                    </Tab>
                    <Tab onClick={() => setTab('permanent')} className={`${tab === 'permanent' ? 'active' : ''}`}>
                        <Paragraph color="black" className="mb-0">Permanent</Paragraph>
                    </Tab>
                </MaxWidthContainer>
            </Section>
			{tab === "contract" ? (
				<WorkSection type="contracts" />
			) : (
				<WorkSection type="perms" />
			)}
		</React.Fragment>
	);
};

export default Experience;
