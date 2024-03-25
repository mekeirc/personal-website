
// Core
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import Heading from './heading';
import Paragraph from './paragraph';

// Images
import { Section } from './homepage';

const EmailIcon = () => (
	<svg width="64" height="64" viewBox="0 0 64 64" fill="#fff" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_57_2)">
			<circle cx="32" cy="32" r="31" stroke="#FF7A00" stroke-width="2" />
			<path
				d="M20 44C19.175 44 18.4688 43.7063 17.8813 43.1188C17.2937 42.5313 17 41.825 17 41V23C17 22.175 17.2937 21.4688 17.8813 20.8813C18.4688 20.2937 19.175 20 20 20H44C44.825 20 45.5313 20.2937 46.1188 20.8813C46.7063 21.4688 47 22.175 47 23V41C47 41.825 46.7063 42.5313 46.1188 43.1188C45.5313 43.7063 44.825 44 44 44H20ZM32 33.5L44 26V23L32 30.5L20 23V26L32 33.5Z"
				fill="black"
			/>
		</g>
		<defs>
			<clipPath id="clip0_57_2">
				<rect width="64" height="64" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

const PhoneIcon = () => (
	<svg width="64" height="64" viewBox="0 0 64 64" fill="#fff" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_57_8)">
			<circle cx="32" cy="32" r="31" stroke="#FF7A00" stroke-width="2" />
			<path
				d="M43.925 45.5C40.8 45.5 37.7125 44.8188 34.6625 43.4563C31.6125 42.0938 28.8375 40.1625 26.3375 37.6625C23.8375 35.1625 21.9063 32.3875 20.5438 29.3375C19.1813 26.2875 18.5 23.2 18.5 20.075C18.5 19.625 18.65 19.25 18.95 18.95C19.25 18.65 19.625 18.5 20.075 18.5H26.15C26.5 18.5 26.8125 18.6187 27.0875 18.8563C27.3625 19.0938 27.525 19.375 27.575 19.7L28.55 24.95C28.6 25.35 28.5875 25.6875 28.5125 25.9625C28.4375 26.2375 28.3 26.475 28.1 26.675L24.4625 30.35C24.9625 31.275 25.5563 32.1688 26.2438 33.0313C26.9313 33.8938 27.6875 34.725 28.5125 35.525C29.2875 36.3 30.1 37.0188 30.95 37.6813C31.8 38.3438 32.7 38.95 33.65 39.5L37.175 35.975C37.4 35.75 37.6938 35.5813 38.0563 35.4688C38.4188 35.3563 38.775 35.325 39.125 35.375L44.3 36.425C44.65 36.525 44.9375 36.7063 45.1625 36.9688C45.3875 37.2313 45.5 37.525 45.5 37.85V43.925C45.5 44.375 45.35 44.75 45.05 45.05C44.75 45.35 44.375 45.5 43.925 45.5Z"
				fill="black"
			/>
		</g>
		<defs>
			<clipPath id="clip0_57_8">
				<rect width="64" height="64" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

const GithubIcon = () => (
	<svg width="64" height="64" viewBox="0 0 64 64" fill="#fff" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_57_18)">
			<circle cx="32" cy="32" r="31" stroke="#FF7A00" stroke-width="2" />
			<g clip-path="url(#clip1_57_18)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M32 14C22.055 14 14 22.055 14 32C14 39.965 19.1525 46.6925 26.3075 49.0775C27.2075 49.235 27.545 48.695 27.545 48.2225C27.545 47.795 27.5225 46.3775 27.5225 44.87C23 45.7025 21.83 43.7675 21.47 42.755C21.2675 42.2375 20.39 40.64 19.625 40.2125C18.995 39.875 18.095 39.0425 19.6025 39.02C21.02 38.9975 22.0325 40.325 22.37 40.865C23.99 43.5875 26.5775 42.8225 27.6125 42.35C27.77 41.18 28.2425 40.3925 28.76 39.9425C24.755 39.4925 20.57 37.94 20.57 31.055C20.57 29.0975 21.2675 27.4775 22.415 26.2175C22.235 25.7675 21.605 23.9225 22.595 21.4475C22.595 21.4475 24.1025 20.975 27.545 23.2925C28.985 22.8875 30.515 22.685 32.045 22.685C33.575 22.685 35.105 22.8875 36.545 23.2925C39.9875 20.9525 41.495 21.4475 41.495 21.4475C42.485 23.9225 41.855 25.7675 41.675 26.2175C42.8225 27.4775 43.52 29.075 43.52 31.055C43.52 37.9625 39.3125 39.4925 35.3075 39.9425C35.96 40.505 36.5225 41.585 36.5225 43.2725C36.5225 45.68 36.5 47.615 36.5 48.2225C36.5 48.695 36.8375 49.2575 37.7375 49.0775C44.8475 46.6925 50 39.9425 50 32C50 22.055 41.945 14 32 14Z"
					fill="#1B1F23"
				/>
			</g>
		</g>
		<defs>
			<clipPath id="clip0_57_18">
				<rect width="64" height="64" fill="white" />
			</clipPath>
			<clipPath id="clip1_57_18">
				<rect width="36" height="36" fill="white" transform="translate(14 14)" />
			</clipPath>
		</defs>
	</svg>
);

const CvIcon = () => (
	<svg width="64" height="64" viewBox="0 0 64 64" fill="#fff" xmlns="http://www.w3.org/2000/svg">
		<g clip-path="url(#clip0_57_22)">
			<circle cx="32" cy="32" r="31" stroke="#FF7A00" stroke-width="2" />
			<path
				d="M26 41H38V38H26V41ZM26 35H38V32H26V35ZM23 47C22.175 47 21.4688 46.7063 20.8813 46.1188C20.2937 45.5313 20 44.825 20 44V20C20 19.175 20.2937 18.4688 20.8813 17.8813C21.4688 17.2937 22.175 17 23 17H35L44 26V44C44 44.825 43.7063 45.5313 43.1188 46.1188C42.5313 46.7063 41.825 47 41 47H23ZM33.5 27.5H41L33.5 20V27.5Z"
				fill="black"
			/>
		</g>
		<defs>
			<clipPath id="clip0_57_22">
				<rect width="64" height="64" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

const UnstyledLink = styled.a`
    text-decoration: none;
`;


const Email = "mekeirc@gmail.com";
const PhoneNumber = "+447565253167";

const Contact = () => (
        <Section id="about" background="greyDarker">
                <Heading as="h2" color="burntOrange" className="text-center">Contact &amp; Links</Heading>
                <div className="d-flex justify-content-center text-center">
                    <div className="px-4">
                        <UnstyledLink href={`mailto:${Email}` } target="_blank">
                            <EmailIcon />
                            <Paragraph color="black" className='mt-2'>Email</Paragraph>
                        </UnstyledLink>
                    </div>
                    <div className="px-4">
                        <UnstyledLink href={`tel:${PhoneNumber}` } target="_blank">
                            <PhoneIcon />
                            <Paragraph color="black" className='mt-2'>Phone</Paragraph>
                        </UnstyledLink>
                    </div>
                    <div className="px-4">
                        <UnstyledLink href="https://github.com/mekeirc" target="_blank">
                            <GithubIcon />
                            <Paragraph color="black" className='mt-2'>Github</Paragraph>
                        </UnstyledLink>
                    </div>
                    <div className="px-4">
                        <UnstyledLink href="https://me.keirc.co.uk/cv/CV-2024-02-28.pdf" target="_blank">
                            <CvIcon />
                            <Paragraph color="black" className='mt-2'>CV</Paragraph>
                        </UnstyledLink>
                    </div>
                </div>
        </Section>
);

export default Contact;