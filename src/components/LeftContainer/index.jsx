import React from 'react';
import styled from './styles.module.scss';

import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaBehanceSquare } from 'react-icons/fa';
import { Chip } from '@mui/material';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiSass, DiGitBranch, DiJqueryLogo, DiBootstrap, DiPhp, DiMysql } from 'react-icons/di';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

export function LeftContainer() {
    return (
		<section className={styled.leftContainer}>
			<h3>Contato</h3>
			<br />

			<div className={styled.contact}>
				<p>
					<FaMapMarkerAlt /> Jundiaí/SP
				</p>
				<p>
					<FaEnvelope />{' '}
					<a href="mailto:mpagliajr@gmail.com" target="_blank" rel="noreferrer">
						mpagliajr@gmail.com
					</a>
				</p>
				<p>
					<FaLinkedin />{' '}
					<a href="https://linkedin.com/in/mpagliajr" target="_blank" rel="noreferrer">
						linkedin.com/in/mpagliajr
					</a>
				</p>
				<p>
					<FaGithub />{' '}
					<a href="https://github.com/mariopaglia" target="_blank" rel="noreferrer">
						github.com/mariopaglia
					</a>
				</p>
				<p>
					<FaBehanceSquare />{' '}
					<a href="https://www.behance.net/mariopaglia" target="_blank" rel="noreferrer">
						behance.net/mariopaglia
					</a>
				</p>
			</div>

			<br />

			<h3>Principais competências</h3>
			<br />
			<div className={styled.skills}>
				<Chip icon={<DiHtml5 />} color="primary" size="medium" label="HTML" variant="outlined" />
				<Chip icon={<DiCss3 />} color="primary" label="CSS" variant="outlined" />
				<Chip icon={<DiJavascript />} color="primary" label="JavaScript" variant="outlined" />
				<Chip icon={<DiReact />} color="primary" label="ReactJS" variant="outlined" />
				<Chip icon={<SiNextdotjs />} color="primary" label="NextJS" variant="outlined" />
				<Chip icon={<SiTypescript />} color="primary" label="TypeScript" variant="outlined" />
				<Chip icon={<DiSass />} color="primary" label="SASS" variant="outlined" />
				<Chip icon={<DiGitBranch />} color="primary" label="Git/GitHub" variant="outlined" />
				<Chip icon={<DiJqueryLogo />} color="primary" label="jQuery" variant="outlined" />
				<Chip icon={<DiBootstrap />} color="primary" label="Bootstrap" variant="outlined" />
				<Chip icon={<DiPhp />} color="primary" label="PHP" variant="outlined" />
				<Chip icon={<DiMysql />} color="primary" label="MYSQL" variant="outlined" />
			</div>
			<br />

			<h3>Certificações</h3>
			<br />

			<ul>
				<li>
					<span>HTML, CSS e Javascript</span>
					<p>Impacta</p>
				</li>
				<li>
					<span>React Completo</span>
					<p>Origamid</p>
				</li>
				<li>
					<span>ReactJS</span>
					<p>Rocketseat</p>
				</li>
				<li>
					<span>NextJS</span>
					<p>Rocketseat</p>
				</li>
				<li>
					<span>JavaScript</span>
					<p>Origamid</p>
				</li>
				<li>
					<span>SASS</span>
					<p>Rocketseat</p>
				</li>
				<li>
					<span>JamStack</span>
					<p>Rocketseat</p>
				</li>
				<li>
					<span>Git e Github</span>
					<p>Udemy</p>
				</li>
				<li>
					<span>Bootstrap</span>
					<p>Udemy</p>
				</li>
				<li>
					<span>jQuery</span>
					<p>Udemy</p>
				</li>
				<li>
					<span>Desenvolvimento Web</span>
					<p>Udemy</p>
				</li>
				<li>
					<span>PHP</span>
					<p>Udemy</p>
				</li>
				<li>
					<span>MYSQL</span>
					<p>Udemy</p>
				</li>
				<li>
					<span>Liderança e Gestão de Pessoas</span>
					<p>SKY Brasil</p>
				</li>
				<li>
					<span>Google Adwords</span>
					<p>Goobec</p>
				</li>
			</ul>
		</section>
	);
}