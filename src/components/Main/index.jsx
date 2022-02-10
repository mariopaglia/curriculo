import React from 'react';
import { LeftContainer } from '../LeftContainer';
import { RightContainer } from '../RightContainer';
import styled from './styles.module.scss';

export function Main() {
	return (
		<main className={styled.container}>
			<LeftContainer />
			<RightContainer />
		</main>
	);
}
