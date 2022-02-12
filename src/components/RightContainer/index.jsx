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
				Minha primeira experiência e base profissional ocorreu na SKY Brasil, permanecendo de 2008 até 2016 como líder de equipe e projetos, adquirindo vasto conhecimento em gestão, liderança, resolução de problemas, recrutamento, seleção, atingimento de metas, treinamentos etc.
				<br /> <br />
				Apaixonado pela programação e front-end desde meus 13 anos quando fiz meu primeiro curso de HTML e CSS pela Impacta Tecnologia em 2009, desde então nunca deixei de estudar e realizar alguns projetos freelance em paralelo, quando em 2016, ao encerrar meu ciclo na SKY Brasil, decidi focar integralmente nessa área que me fascina, atuando desde então pela Agência H1 Code.
			</p>
			<br />

			<h1>Experiência profissional</h1>
			<br />

			<div className={styled.experience}>
				<h3>Agência H1 Code</h3>
				<p className={styled.job}>Desenvolvedor Front-end</p>
				<p className={styled.time}>set de 2016 - o momento • 5 anos 6 meses</p>
				<p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Atuo como desenvolvedor front-end criando e realizando manutenções em sites, lojas virtuais, blogs, landing pages, dashboards etc. De acordo com o projeto utilizo tecnologias como: HTML, CSS, SASS, JavaScript, Git, GitHub, Bootstrap, jQuery, consumo de API, ReactJS, NextJS, TypeScript, Redux, Styled Components e Axios.</p>
			</div>

			<div className={styled.experience}>
				<h3>Paglia Host</h3>
				<p className={styled.job}>CEO</p>
				<p className={styled.time}>set de 2016 - jan de 2021 • 4 anos 5 meses</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Atuei diretamente com infraestrutura de redes, servidores dedicados, cloud computing, virtualização, gerenciamento de servidores Linux, hospedagem de sites, registro de domínios, além de atendimento e suporte aos clientes da empresa.</p>
			</div>

			<div className={styled.experience} style={{marginBottom: 0}}>
				<h3>SKY Brasil</h3>
				<p className={styled.time}>8 anos 8 meses</p>

				<p className={styled.job}>Líder de equipe</p>
				<p className={styled.time}>jan de 2014 - ago de 2016 • 2 anos 8 meses</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Como líder de equipe, meu principal trabalho era gerenciar e treinar toda equipe interna de controladores, bem como fazer reuniões para traçar estratégias para atingimento de metas e prazos, realizar recrutamento e seleção de novos controladores, participar e representar a equipe em eventos, reuniões e treinamentos externos etc.</p>
				<br />

				<p className={styled.job}>Controlador técnico</p>
				<p className={styled.time}>jan de 2008 - jan de 2014 • 6 anos 1 mês</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Minha primeira experiência profissional aos 14 anos, onde realizava elaboração, estruturação e controle em tempo real de uma equipe com mais de 30 técnicos onde realizavam instalação e assistência técnica do produto da SKY na casa dos consumidores. Também realizava atendimento aos clientes com agendamentos prévios das visitas técnicas para montagem e encaixe dos roteiros.</p>
			</div>
			<br />
			<h1>Formação acadêmica</h1>
			<br />
			<div className={styled.experience}>
				<h3>Rocketseat</h3>
				<p className={styled.job}>Desenvolvimento Web</p>
				<p className={styled.time}>jan de 2020 - o momento</p>
			</div>

			<div className={styled.experience}>
				<h3>Origamid</h3>
				<p className={styled.job}>Desenvolvimento Web</p>
				<p className={styled.time}>jan de 2012 - o momento</p>
			</div>

			<div className={styled.experience}>
				<h3>Udemy</h3>
				<p className={styled.job}>Desenvolvimento Web</p>
				<p className={styled.time}>jan de 2018 - jan de 2020</p>
			</div>

			<div className={styled.experience}>
				<h3>Impacta Tecnologia</h3>
				<p className={styled.job}>Desenvolvimento Web</p>
				<p className={styled.time}>jan de 2007 - dez de 2009</p>
			</div>
		</section>
	);
}
