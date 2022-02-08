import styled from 'styled-components';
import theme from '../../config/utils/theme';
import { XS_DEVICES_WIDTH } from '../../config/utils/constant';

export const DeleteButton = styled.div`
	font-size: 12px;
	cursor: pointer;
	position: absolute;
	background-color: white;
	color: red;
	padding: 5px 7px;
	border-radius: 5px;
	top: 10px;
	right: 10px;
	z-index: 1;
	opacity: 0;
	transition: 0.1s;

	:hover {
		background-color: #e8e8e8;
		transition: 0.2s;
	}

	:active {
		background-color: #fff;
		opacity: 1;
	}

	@media (max-width: ${XS_DEVICES_WIDTH}) {
		opacity: 1;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	height: 130px;

	:hover ${DeleteButton} {
		opacity: 1;
		transition: 0.1s;
	}
`;

export const VideoWrapper = styled.div`
	/* height: 130px; */
	width: 100%;

	:hover ${DeleteButton} {
		opacity: 1;
		transition: 0.1s;
	}
`;

export const VideoDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  
	p {
		margin: 0;
		padding: 0;
	}
`;

export const NotImage = styled.div`
	width: 100%;
	border: dashed 1px ${theme.color.darkSlateBlue};
	background-color: ${theme.color.blueSelect};
	border: dashed 1px #058e91;
	border-radius: 10px;
	padding: 16px 20px;
`;

export const DeleteFileButton = styled.div`
	cursor: pointer;
	opacity: 1;

	p {
		margin: 0;
		padding: 0;
		color: red;
	}

	:hover {
		opacity: 0.8;
	}

	:active {
		opacity: 1;
	}
`;
