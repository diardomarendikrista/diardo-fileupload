import styled, { css } from 'styled-components';
import theme from '../../config/utils/theme';

export const XS_DEVICES_WIDTH = `480px`;

// const theme = {
// 	color: {
// 		white: '#ffffff',
// 		battleShipGrey: '#6b727b',
// 		darkSlateBlue: '#27356a',
// 		lightGreen: '#7ac70c',
// 		lightGray: '#e8e9e9',
// 		blueSelect: '#edf1ff',
// 		primary: '#27356a',
// 		secondary: '#d85448',
// 		lightCoral: '#f58780',
// 		pattensBlue: '#dbfcf2',
// 		whiteSmoke: '#f7f7f7',
// 		sand: '#fffac7',
// 		semiDarkGray: '#d8d9d9',
// 		yellowFooter: '#fcf286',
// 		mandatory: '#ea2a2a',
// 		cinnabar: '#d85448',
// 		blueSkill: '#40aca4',
// 		greyTransparent: '#c7c7c7',
// 		error: '#fab8b2',
// 		success: '#edffd3',
// 		Sunflower: '#ffc107',
// 		bgBlue: '#f5f5fb',
// 		bgYellow: '#fff7e1',
// 		astronaut: '#282f6e',
// 		catskillwhite: '#e3e7f2',
// 		silverchalice: '#9d9d9d',
// 		blueKlob: '#27356a',
// 		veryLightBlue: '#edf1ff',
// 		darkGrey: '#707070',
// 		satinSheenGold: '#C8A039',
// 	},
// };

export const Wrapper = styled.div`
	width: 100%;

	.mandatory {
		color: ${theme.color.mandatory};
	}

	.error {
		color: ${theme.color.cinnabar};
	}
	.border-error {
		border: 1px solid ${theme.color.cinnabar};
	}

	.delete {
		cursor: pointer;
		opacity: 1;
		transition: 0.3s;

		:hover {
			opacity: 0.8;
			transition: 0.3s;
		}

		:active {
			opacity: 0.9;
			transition: 0.3s;
		}
	}

	.uploadText {
		opacity: 1;
	}

	.dropzone {
		border-radius: 6px;
		border: dashed 1px ${theme.color.darkSlateBlue};
		background-color: ${theme.color.blueSelect};
		color: ${theme.color.primary};
		font-size: 14px;
		font-family: 'Roboto';
		cursor: pointer;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;

		:hover .uploadText {
			opacity: 0.8;
			font-weight: bold;
		}

		.d-flex {
			display: flex;
		}

		${(props) =>
			props.disabled &&
			css`
				border: solid 1px #707070;
				background-color: #e8e9e9;
			`}

		@media (max-width: ${XS_DEVICES_WIDTH}) {
			font-size: 10px;
			padding: 11px 12px;
		}
	}

	.square {
		width: 150px;
		height: 130px;
	}

	.accept {
		border: dashed 3px ${theme.color.darkSlateBlue};

		.uploadText {
			opacity: 0.8;
			font-weight: bold;
		}
	}
	.reject {
		background-color: ${theme.color.cinnabar};
		border: dashed 3px ${theme.color.darkSlateBlue};

		.uploadText {
			opacity: 0.8;
			font-weight: bold;
		}
	}

	@media (max-width: ${XS_DEVICES_WIDTH}) {
		margin: 8px 0;

		.error {
			font-size: 10px;
		}
	}
`;

export const UploadWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	.deskripsi-uploader {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.wh-100 {
		width: 100%;
		height: 100%;
	}
`;
