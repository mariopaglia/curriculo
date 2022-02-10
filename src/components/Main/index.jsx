import React from 'react';
import styled from './styles.module.scss';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaBehanceSquare } from 'react-icons/fa';
import { Chip } from '@mui/material';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiSass, DiGitBranch, DiJqueryLogo, DiBootstrap, DiPhp, DiMysql } from 'react-icons/di';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

export function Main() {
	return (
		<>
			<main className={styled.container}>
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

				<section className={styled.rightContainer}>
					<h1>Mario Paglia</h1>
					<p className={styled.currentJob}>Desenvolvedor Front-end</p>
					<br />

					<h1>Resumo</h1>
					<br />
					<p className={styled.resume}>
						Apaixonado por programação e gerenciamento de pessoas e equipes, estudo e atuo como desenvolvedor front-end desde 2007, minha primeira experiencia e base profissional foi na SKY Brasil, onde atuei de 2008 até 2016 como gerente de equipes e projetos, adquirindo um vasto conhecimento em gerenciamento de pessoas, liderança, resolução de problemas, recrutamento, seleção, atingimento de metas, treinamentos etc, nunca deixando a programação e principalmente o front-end de lado,
						sempre estudando e realizando diversos projetos na área. Em 2016 optei por me dedicar integralmente a programação, donde venho atuando desde então pela Agência H1 Code.
					</p>
					<br />

					<h1>Experiência</h1>
					<br />

					<div className={styled.experience}>
						<h3>Agência H1 Code</h3>
						<p className={styled.job}>Desenvolvedor Front-end</p>
						<p>Setembro de 2016 - Momento (5 anos e 6 meses)</p>
						<p>Jundiaí, São Paulo, Brasil</p>
					</div>

					<div className={styled.experience}>
						<h3>Paglia Host</h3>
						<p className={styled.job}>CEO</p>
						<p>Setembro de 2016 - Janeiro de 2021 (4 anos 5 meses)</p>
						<p>São Paulo, São Paulo, Brasil</p>
					</div>
					<div className={styled.experience}>
						<h3>SKY Brasil</h3>
						<p>8 anos 8 meses</p>

						<p className={styled.job}>Gerente</p>
						<p>Janeiro de 2014 - Agosto de 2016 (2 anos 8 meses)</p>
						<p>São Paulo, São Paulo, Brasil</p>
						<br />

						<p className={styled.job}>Líder de equipe</p>
						<p>Janeiro de 2010 - Janeiro de 2014 (4 anos 1 mês)</p>
						<p>São Paulo, São Paulo, Brasil</p>
						<br />

						<p className={styled.job}>Controlador técnico</p>
						<p>Janeiro de 2008 - Janeiro de 2010 (2 anos 1 mês)</p>
						<p>São Paulo, São Paulo, Brasil</p>
					</div>
					<br />
					<h1>Formação acadêmica</h1>
					<br />
					<div className={styled.experience}>
						<h3>Rocketseat</h3>
						<p className={styled.job}>Desenvolvimento Web</p>
						<p>Janeiro de 2020 - Momento</p>
					</div>

					<div className={styled.experience}>
						<h3>Origamid</h3>
						<p className={styled.job}>Desenvolvimento Web</p>
						<p>Janeiro de 2012 - Momento</p>
					</div>

					<div className={styled.experience}>
						<h3>Udemy</h3>
						<p className={styled.job}>Desenvolvimento Web</p>
						<p>Janeiro de 2018 - Janeiro de 2020</p>
					</div>

					<div className={styled.experience}>
						<h3>Impacta Tecnologia</h3>
						<p className={styled.job}>Desenvolvimento Web</p>
						<p>Janeiro de 2007 - Dezembro de 2009</p>
					</div>
				</section>
			</main>
		</>
	);
}
