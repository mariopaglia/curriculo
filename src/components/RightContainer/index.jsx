import React from 'react';
import styled from './styles.module.scss';
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function RightContainer() {

	const experiencePeriod = (primaryDate, secondaryDate) => {
		return formatDistance(new Date(primaryDate), secondaryDate ? new Date(secondaryDate) : new Date(), { locale: ptBR })
	};
	
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
				Apaixonado pela programação e front-end desde meus 13 anos quando fiz meu primeiro curso de HTML e CSS pela Impacta Tecnologia em 2009, desde então nunca deixei de estudar e realizar alguns projetos freelance em paralelo, quando em 2016, ao encerrar meu ciclo na SKY Brasil, decidi focar integralmente nessa área que me fascina, atuando de 2016 até 2022 pela Agência H1 Code.
				<br /> <br />
				Em 2022 iniciei minha jornada como Desenvolvedor Front-end Pleno na Consorciei, responsável por todos os sistemas internos e externos para gestão de compras, vendas e transferências de cotas de consórcio, atuando com as tecnologias mais atuais do mercado.
			</p>
			<br />

			<h1>Experiência profissional</h1>
			<br />

			<div className={styled.experience}>
				<h3>Consorciei</h3>
				<p className={styled.job}>Desenvolvedor Front-end Pleno</p>
				<p className={styled.time}>mar de 2022 - o momento • {experiencePeriod('03/07/2022', '')}</p>
				<p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Desenvolvedor front-end responsável por todos os sistemas internos e externos da Consorciei para gestão de compras, vendas e tranferências de cotas de consórcio. Atuando com tecnologias como: ReactJS, NextJS, Styled Components, Context API, Hooks, TypeScript, Axios, AWS Lambda, Backend for Frontend (BFF) etc</p>
			</div>

			<div className={styled.experience}>
				<h3>Agência H1 Code</h3>
				<p className={styled.job}>Desenvolvedor Front-end</p>
				<p className={styled.time}>set de 2016 - mar de 2022 • {experiencePeriod('09/01/2016', '01/03/2022')}</p>
				<p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Atuo como desenvolvedor front-end criando e realizando manutenções em sites, lojas virtuais, blogs, landing pages, dashboards etc. De acordo com o projeto utilizo tecnologias como: HTML, CSS, SASS, JavaScript, Git, GitHub, Bootstrap, jQuery, consumo de API, ReactJS, NextJS, TypeScript, Redux, Styled Components e Axios.</p>
			</div>

			<div className={styled.experience}>
				<h3>Paglia Host</h3>
				<p className={styled.job}>CEO</p>
				<p className={styled.time}>set de 2016 - jan de 2021 • {experiencePeriod('09/01/2016', '01/01/2021')}</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Atuei diretamente com infraestrutura de redes, servidores dedicados, cloud computing, virtualização, gerenciamento de servidores Linux, hospedagem de sites, registro de domínios, além de atendimento e suporte aos clientes da empresa.</p>
			</div>

			<div className={styled.experience} style={{marginBottom: 0}}>
				<h3>SKY Brasil</h3>
				<p className={styled.time}>8 anos 8 meses</p>

				<p className={styled.job}>Líder de equipe</p>
				<p className={styled.time}>jan de 2014 - ago de 2016 • {experiencePeriod('01/01/2014', '08/01/2016')}</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Como líder de equipe, meu principal trabalho era gerenciar e treinar toda equipe interna de controladores, bem como fazer reuniões para traçar estratégias para atingimento de metas e prazos, realizar recrutamento e seleção de novos controladores, participar e representar a equipe em eventos, reuniões e treinamentos externos etc.</p>
				<br />

				<p className={styled.job}>Controlador técnico</p>
				<p className={styled.time}>jan de 2008 - jan de 2014 • {experiencePeriod('01/01/2008', '01/01/2014')}</p>
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
				<p className={styled.time}>jan de 2012 - jan de 2022</p>
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
