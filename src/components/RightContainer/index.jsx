import React from 'react';
import styled from './styles.module.scss';

export function RightContainer() {
	return (
		<section className={styled.rightContainer}>
			<h1>Mario Paglia</h1>
			<p className={styled.currentJob}>Desenvolvedor Front-end</p>
			<br />

			<h1>Resumo</h1>
			<br />
			<p className={styled.resume}>
				Apaixonado por programação e gerenciamento de pessoas e equipes, estudo e atuo como desenvolvedor front-end desde 2007, minha primeira experiencia e base profissional foi na SKY Brasil, onde atuei de 2008 até 2016 como gerente de equipes e projetos, adquirindo um vasto conhecimento em gerenciamento de pessoas, liderança, resolução de problemas, recrutamento, seleção, atingimento de metas, treinamentos etc, nunca deixando a programação e principalmente o front-end de lado, sempre
				estudando e realizando diversos projetos na área. Em 2016 optei por me dedicar integralmente a programação, donde venho atuando desde então pela Agência H1 Code.
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
	);
}
