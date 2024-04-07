// Core
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

// Components
import Heading from "./heading";
import { Section } from "./homepage";
import Badge from "./badge";
import { MaxWidthContainer } from "./homepage";
import { ShowcaseItems } from "../constants";

const CardBase = styled.div(({ theme }) => css`
	border-radius: 0.25rem;
	background: ${theme.colors.white};
`);

export const FullWidthBase = styled.div(({ theme, background }) => css`
	background: ${theme.colors[background]};
`);

const ShowcaseCover = styled.img(({ theme }) => css`
	height: 20vh;
	
	@media screen and (min-width: ${theme.breakPoints.md}){
		height: 15vh;
		height: 15vh;
	}
`);

const ButtonBase = styled.button(({ theme }) => css`
	border: 5px solid ${theme.colors.black};
	
	&:focus {
		outline-color: ${theme.colors.burntOrange};
	}
`);

const ShowcaseBase = ({ children }) => <div className="d-flex flex-row flex-wrap my-3">{children}</div>;

const ShowcaseCard = ({ title, tags, onClick, cover }) => (
	<ButtonBase onClick={onClick} className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 p-3 mb-1 bg-white">
			<CardBase className="h-100 w-100 d-flex flex-column">
				<ShowcaseCover src={cover} className="w-100" />
				<div class="pt-3">
					<div className="row">
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
	</ButtonBase>
);

const Showcase = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState(ShowcaseItems[0]);
	const toggle = () => (setIsOpen(!isOpen));
	const toggleModalContent = (item) => (setModalContent(item));

	const closeBtn = (
		<button className="close border-0 bg-white" onClick={toggle} type="button">
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
		</button>
	);

	return (
		<Section background="black" id="showcase">
			<MaxWidthContainer background="black">
				<Section background="black" className="px-0">
					<Heading color="sunburstOrange" className="mb-4">Showcase</Heading>
					<ShowcaseBase>
						{ShowcaseItems.map((item) => (
							<ShowcaseCard title={item.title} tags={item.tags} cover={item.cover} onClick={() => { toggleModalContent(item); toggle();}} />
						))}
					</ShowcaseBase>
				</Section>
			</MaxWidthContainer>
			{modalContent.content && (
				<Modal isOpen={isOpen} toggle={toggle} size="lg" >
					<ModalHeader toggle={toggle} close={closeBtn}>{modalContent.title}</ModalHeader>
					<ModalBody className="w-100">
						{modalContent.content.map((item) => (
							<img src={item.src} alt={item.alt} className="w-100 pb-3" />
						))}
					</ModalBody>
				</Modal>
			)}
		</Section>
	);
};

export default Showcase;
