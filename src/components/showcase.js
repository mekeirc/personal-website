// Core
import React, { useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

// Components
import Heading from "./heading";
import Paragraph from "./paragraph";
import { Section } from "./homepage";
import Badge from "./badge";
import { MaxWidthContainer } from "./homepage";
import { ShowcaseItems } from "../constants";

const CardBase = styled.div(
	({ theme }) => css`
		border-radius: 0.25rem;
		background: ${theme.colors.white};
	`
);

export const FullWidthBase = styled.div(
	({ theme, background }) => css`
		background: ${theme.colors[background]};
	`
);

const ModalBase = styled.div(
	({ theme }) => css`
		background: ${theme.colors.black};
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		overflow: hidden;
	`
);

const ModalForeground = styled.div(
	({ theme }) => css`
		background: ${theme.colors.white};
		width: 90%;
		height: 90%;
		margin: auto;
		border-radius: 4px;
		overflow-y: scroll;
	`
);

const InvisibleButton = styled.button`
	background: none;
	border: 0;
`;

const ShowcaseBase = ({ children }) => <div className="d-flex flex-row flex-wrap my-5">{children}</div>;

const ShowcaseCard = ({ title, tags, onClick }) => (
	<button onClick={onClick} className="col-12 col-lg-6 col-xl-4 p-0 border-0 rounded">
		<div>
			<CardBase className="h-100 w-100 d-flex flex-column justify-content-between">
				<div>Image here</div>
				<div class="wrapper p-3">
					<div className="row d-fixed">
						<Heading className="text-start" as="h4" color="black">
							{title}
						</Heading>
					</div>
					<div className="row">
						<div className="d-flex align-items-baseline flex-wrap mt-2">
							{tags.map((tag) => (
								<Badge small text={tag.name} color={tag.color} className="me-2" />
							))}
						</div>
					</div>
				</div>
			</CardBase>
		</div>
	</button>
);

const Showcase = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const closeBtn = (
		<button className="close border-0 bg-white" onClick={toggle} type="button">
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
		</button>
	);

	return (
		<Section background="black">
			<MaxWidthContainer background="black">
				<Section background="black" className="px-0">
					<Heading color="burntOrange">Showcase</Heading>
					<ShowcaseBase>
						{ShowcaseItems.map((item) => (
							<>
								<ShowcaseCard title={item.title} tags={item.tags} onClick={() => toggle()} />
								<Modal isOpen={isOpen} toggle={toggle} size="xl" fullScreen>
									<ModalHeader toggle={toggle} close={closeBtn}>{item.title}</ModalHeader>
									<ModalBody className="w-100">
										{item.content.map((item) => (
											<img src={item.src} alt={item.alt} className="w-100 pb-3" />
										))}
									</ModalBody>
								</Modal>
							</>
						))}
					</ShowcaseBase>
				</Section>
			</MaxWidthContainer>
		</Section>
	);
};

export default Showcase;
