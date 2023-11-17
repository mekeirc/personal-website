// Core
import React, { useState } from "react";
import styled, { css } from "styled-components";

// Components
import Heading from "./heading";
import Paragraph from "./paragraph";
import { Section } from "../components/homepage";
import Badge from "./badge";
import { MaxWidthContainer } from "../components/homepage";
import { JobList } from "../constants";

const CardBase = styled.div(
	({ theme }) => css`
		border: 1px solid ${theme.colors.cardBorder};
		border-radius: 0.25rem;
		background: ${theme.colors.white};
	`
);

export const FullWidthBase = styled.div(
	({ theme, background }) => css`
		background: ${theme.colors[background]};
	`
);

const ExperienceBase = ({ children }) => <div className="d-flex flex-row flex-wrap my-5">{children}</div>;

const RoleCard = ({ role, company, duration, location, type, description, tags }) => (
	<div className="col-12 col-lg-6 col-xl-4 p-2">
		<CardBase className="p-3 h-100 d-flex flex-column justify-content-between">
			<div class="wrapper">
				<div className="row">
					<div className="col-12">
						<Paragraph color="black" className="mb-0">
							{role}
						</Paragraph>
					</div>
					<div className="col-12">
						<Paragraph color="burntOrange">{company}</Paragraph>
					</div>
				</div>
				<div className="row">
					<div className="col-4">
						<div className="d-flex align-items-center">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.7498 13.9167L13.9165 12.7501L10.8332 9.66675V5.83341H9.1665V10.3334L12.7498 13.9167ZM9.99984 18.3334C8.84706 18.3334 7.76373 18.1147 6.74984 17.6772C5.73595 17.2397 4.854 16.6459 4.104 15.8959C3.354 15.1459 2.76025 14.264 2.32275 13.2501C1.88525 12.2362 1.6665 11.1529 1.6665 10.0001C1.6665 8.8473 1.88525 7.76397 2.32275 6.75008C2.76025 5.73619 3.354 4.85425 4.104 4.10425C4.854 3.35425 5.73595 2.7605 6.74984 2.323C7.76373 1.8855 8.84706 1.66675 9.99984 1.66675C11.1526 1.66675 12.2359 1.8855 13.2498 2.323C14.2637 2.7605 15.1457 3.35425 15.8957 4.10425C16.6457 4.85425 17.2394 5.73619 17.6769 6.75008C18.1144 7.76397 18.3332 8.8473 18.3332 10.0001C18.3332 11.1529 18.1144 12.2362 17.6769 13.2501C17.2394 14.264 16.6457 15.1459 15.8957 15.8959C15.1457 16.6459 14.2637 17.2397 13.2498 17.6772C12.2359 18.1147 11.1526 18.3334 9.99984 18.3334ZM9.99984 16.6667C11.8471 16.6667 13.42 16.0174 14.7186 14.7188C16.0172 13.4202 16.6665 11.8473 16.6665 10.0001C16.6665 8.15286 16.0172 6.57994 14.7186 5.28133C13.42 3.98272 11.8471 3.33341 9.99984 3.33341C8.15261 3.33341 6.5797 3.98272 5.28109 5.28133C3.98248 6.57994 3.33317 8.15286 3.33317 10.0001C3.33317 11.8473 3.98248 13.4202 5.28109 14.7188C6.5797 16.0174 8.15261 16.6667 9.99984 16.6667Z"
									fill="black"
								/>
							</svg>
							<Paragraph subtext color="black" className="ms-2 mb-0">
								{duration}
							</Paragraph>
						</div>
					</div>
					<div className="col-4">
						<div className="d-flex align-items-center">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.1668 7.5H15.8335V5.83333H14.1668V7.5ZM14.1668 10.8333H15.8335V9.16667H14.1668V10.8333ZM14.1668 14.1667H15.8335V12.5H14.1668V14.1667ZM14.1668 17.5V15.8333H17.5002V4.16667H10.0002V5.33333L8.3335 4.125V2.5H19.1668V17.5H14.1668ZM0.833496 17.5V9.16667L6.66683 5L12.5002 9.16667V17.5H7.50016V13.3333H5.8335V17.5H0.833496ZM2.50016 15.8333H4.16683V11.6667H9.16683V15.8333H10.8335V10L6.66683 7.04167L2.50016 10V15.8333Z"
									fill="black"
								/>
							</svg>
							<Paragraph subtext color="black" className="ms-2 mb-0">
								{location}
							</Paragraph>
						</div>
					</div>
					<div className="col-4">
						<div className="d-flex align-items-center">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 18.3334C4.30556 18.3334 3.71528 18.0904 3.22917 17.6042C2.74306 17.1181 2.5 16.5279 2.5 15.8334V13.3334H5V1.66675H17.5V15.8334C17.5 16.5279 17.2569 17.1181 16.7708 17.6042C16.2847 18.0904 15.6944 18.3334 15 18.3334H5ZM15 16.6667C15.2361 16.6667 15.434 16.5869 15.5938 16.4272C15.7535 16.2674 15.8333 16.0695 15.8333 15.8334V3.33341H6.66667V13.3334H14.1667V15.8334C14.1667 16.0695 14.2465 16.2674 14.4063 16.4272C14.566 16.5869 14.7639 16.6667 15 16.6667ZM7.5 7.50008V5.83341H15V7.50008H7.5ZM7.5 10.0001V8.33341H15V10.0001H7.5ZM5 16.6667H12.5V15.0001H4.16667V15.8334C4.16667 16.0695 4.24653 16.2674 4.40625 16.4272C4.56597 16.5869 4.76389 16.6667 5 16.6667ZM5 16.6667H4.16667H12.5H5Z"
									fill="black"
								/>
							</svg>
							<Paragraph subtext color="black" className="ms-2 mb-0">
								{type}
							</Paragraph>
						</div>
					</div>
					<div className="col-12">
						<Paragraph subtext color="black" className="mb-0 mt-3">
							{description}
						</Paragraph>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="d-flex align-items-baseline flex-wrap mt-4">
					{tags.map((tag) => (
						<Badge small text={tag.name} color={tag.color} className="me-2" />
					))}
				</div>
			</div>
		</CardBase>
	</div>
);

const Experience = () => (
	<MaxWidthContainer>
		<Section background="greyDarker">
			<Heading color="burntOrange">Experience</Heading>
			<ExperienceBase>
				{JobList.map((job) => (
					<RoleCard
						role={job.role}
						company={job.company}
						duration={job.duration}
						location={job.location}
						type={job.type}
						description={job.description}
						tags={job.tags}
					/>
				))}
			</ExperienceBase>
		</Section>
	</MaxWidthContainer>
);

export default Experience;
