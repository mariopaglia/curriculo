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
				Minha primeira experiência profissional foi na SKY Brasil, onde trabalhei de 2008 a 2016 como líder de equipe e projetos. Durante esses anos, adquiri amplo conhecimento em gestão, liderança, resolução de problemas, recrutamento, seleção, atingimento de metas e treinamentos.
				<br /> <br />
				Desde os meus 13 anos, tenho paixão por programação e front-end, tendo realizado meu primeiro curso de HTML e CSS pela Impacta Tecnologia em 2009. Desde então, nunca deixei de estudar e participar de projetos freelance paralelamente. Em 2016, quando encerrei minha jornada na SKY Brasil, decidi me dedicar integralmente a esta área que tanto me fascina e, desde então, atuei pela Agência H1 Code até 2022.
				<br /> <br />
				Em 2022, comecei a trabalhar como Desenvolvedor Front-end Pleno na Consorciei, onde sou responsável por todos os sistemas internos e externos de gestão de compras, vendas e transferências de cotas de consórcio, utilizando as tecnologias mais atuais do mercado.
				<br /> <br />
				Sou apaixonado por criar interfaces de usuário atraentes e intuitivas, e tenho uma habilidade particular para transformar designs em código limpo e eficiente. Além de meu trabalho como desenvolvedor, também sou um entusiasta de tecnologia em geral e adoro compartilhar meus conhecimentos com outros profissionais da área.
			</p>
			<br />

			<h1>Experiência profissional</h1>
			<br />

			<div className={styled.experience}>
				<h3>Consorciei</h3>
				<p className={styled.job}>Desenvolvedor Front-end Pleno</p>
				<p className={styled.time}>mar de 2022 - o momento • {experiencePeriod('03/07/2022', '')}</p>
				<p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Como Desenvolvedor Front-end na Consorciei, sou responsável por todos os sistemas internos e externos de gestão de compras, vendas e transferências de cotas de consórcio. Utilizo as seguintes tecnologias: ReactJS, NextJS, Styled Components, Context API, Hooks, TypeScript, Axios, AWS Lambda, Terraform, Backend for Frontend (BFF), Jest, Cypress e Testing Library.</p>
			</div>

			<div className={styled.experience}>
				<h3>Agência H1 Code</h3>
				<p className={styled.job}>Desenvolvedor Front-end</p>
				<p className={styled.time}>set de 2016 - mar de 2022 • {experiencePeriod('09/01/2016', '01/03/2022')}</p>
				<p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Atuei como Desenvolvedor Front-end, criando e realizando manutenções em sites, lojas virtuais, blogs, landing pages e dashboards, entre outros. De acordo com o projeto, utilizava tecnologias como HTML, CSS, SASS, JavaScript, Git, GitHub, Bootstrap, jQuery, consumo de API, ReactJS, NextJS, TypeScript, Redux e Styled Components, bem como Axios para realizar requisições HTTP.</p>
			</div>

			<div className={styled.experience}>
				<h3>Paglia Host</h3>
				<p className={styled.job}>CEO</p>
				<p className={styled.time}>set de 2016 - jan de 2021 • {experiencePeriod('09/01/2016', '01/01/2021')}</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Durante minha experiência profissional, atuei diretamente com infraestrutura de redes, servidores dedicados, cloud computing, virtualização, gerenciamento de servidores Linux, hospedagem de sites, registro de domínios, além de prestar atendimento e suporte aos clientes da empresa.</p>
			</div>

			<div className={styled.experience} style={{ marginBottom: 0 }}>
				<h3>SKY Brasil</h3>
				<p className={styled.time}>jan de 2008 - ago de 2016 • {experiencePeriod('01/01/2008', '01/08/2016')}</p>

				<p className={styled.job}>Líder de equipe</p>
				<p className={styled.time}>jan de 2014 - ago de 2016 • {experiencePeriod('01/01/2014', '08/01/2016')}</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Enquanto líder de equipe, meu principal trabalho era gerenciar e treinar toda a equipe interna de controladores, além de realizar reuniões para traçar estratégias para atingimento de metas e prazos. Também era responsável por realizar recrutamento e seleção de novos controladores, participando e representando a equipe em eventos, reuniões e treinamentos externos, entre outras atividades.</p>
				<br />

				<p className={styled.job}>Controlador técnico</p>
				<p className={styled.time}>jan de 2008 - jan de 2014 • {experiencePeriod('01/01/2008', '01/01/2014')}</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Minha primeira experiência profissional foi aos 14 anos, onde me responsabilizava por elaborar, estruturar e controlar em tempo real uma equipe com mais de 30 técnicos que realizavam instalação e assistência técnica do produto da SKY na casa dos consumidores. Além disso, também realizava atendimento aos clientes agendando visitas técnicas para montagem e encaixe dos roteiros.</p>
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
