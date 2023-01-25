import React from 'react';
import styled from './styles.module.scss';

export function RightContainer() {

	const experiencePeriod = (date1, date2) => {
		date1 = date1 ? new Date(date1.split("/").reverse().join("-")) : new Date();
		date2 = date2 ? new Date(date2.split("/").reverse().join("-")) : new Date();
		if (!date1.getTime()) {
			return "Data inicial inválida";
		}
		if (date1.getTime() > date2.getTime()) {
			return "Data final é menor que a data inicial";
		}
		let years = date2.getFullYear() - date1.getFullYear();
		let months = (date2.getMonth() - date1.getMonth()) + (12 * years);
		years = Math.floor(months / 12);
		months = months - (years * 12);
		if (years > 0) {
			return `${date1.toLocaleString('pt-BR', { month: 'short' })} de ${date1.getFullYear()} - ${date2.toLocaleString('pt-BR', { month: 'short' })} de ${date2.getFullYear()} · ${years} ano${years > 1 ? "s" : ""} ${months} meses`;
		}
		return `${date1.toLocaleString('pt-BR', { month: 'short' })} de ${date1.getFullYear()} - ${date2.toLocaleString('pt-BR', { month: 'short' })} de ${date2.getFullYear()} · ${months} meses`;
	}

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
				<p className={styled.time}>{experiencePeriod('07/03/2022')}</p>

				<p className={styled.job}>Desenvolvedor Front-end Pleno II</p>
				<p className={styled.time}>{experiencePeriod('23/01/2023')}</p>
				<p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Como Desenvolvedor Front-end Pleno II na Consorciei, sou responsável por liderar o desenvolvimento e manutenção de sistemas internos e externos de gestão de compras, vendas e transferências de cotas de consórcio. Utilizo tecnologias avançadas como ReactJS, NextJS, Styled Components, Context API, Hooks, TypeScript, Axios, AWS Lambda, Terraform, Backend for Frontend (BFF), Jest, Cypress e Testing Library para criar soluções escaláveis e altamente desempenháveis. Além disso, lidero a equipe para garantir a entrega de projetos no prazo e com alta qualidade.</p>
				<br />

				<p className={styled.job}>Desenvolvedor Front-end Pleno I</p>
				<p className={styled.time}>{experiencePeriod('07/03/2022', '23/01/2023')}</p>
				<p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Como Desenvolvedor Front-end Pleno I na Consorciei, sou responsável por desenvolver e manter sistemas internos e externos de gestão de compras, vendas e transferências de cotas de consórcio. Utilizo tecnologias modernas como ReactJS, NextJS, Styled Components, Context API e Hooks para criar interfaces de usuário eficientes e intuitivas. Além disso, trabalho com TypeScript para garantir qualidade no código e Axios para realizar requisições HTTP.</p>
			</div>

			<div className={styled.experience}>
				<h3>Agência H1 Code</h3>
				<p className={styled.job}>Desenvolvedor Front-end</p>
				<p className={styled.time}>{experiencePeriod('09/01/2016', '01/03/2022')}</p>
				<p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Atuei como desenvolvedor front-end, criando e realizando manutenções em projetos web, incluindo sites, lojas virtuais, blogs, landing pages e dashboards. Utilizei tecnologias como HTML, CSS, SASS, JavaScript, Git, GitHub, Bootstrap, jQuery, ReactJS, NextJS, TypeScript, Redux e Styled Components para desenvolver esses projetos. Além disso, utilizei o Axios para realizar requisições HTTP e integrar com APIs externas.</p>
			</div>

			<div className={styled.experience}>
				<h3>Paglia Host</h3>
				<p className={styled.job}>Administrador de rede</p>
				<p className={styled.time}>{experiencePeriod('09/01/2016', '01/01/2021')}</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Atuei como profissional de infraestrutura de redes, gerenciando servidores dedicados, computação em nuvem, virtualização, administração de sistemas Linux, hospedagem de sites e registro de domínios. Além disso, forneci suporte e atendimento aos clientes da empresa.</p>
			</div>

			<div className={styled.experience} style={{ marginBottom: 0 }}>
				<h3>SKY Brasil</h3>
				<p className={styled.time}>{experiencePeriod('01/01/2008', '01/08/2016')}</p>

				<p className={styled.job}>Líder de equipe</p>
				<p className={styled.time}>{experiencePeriod('01/01/2014', '08/01/2016')}</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Como líder de equipe, minhas principais responsabilidades incluíam gerenciar e treinar uma equipe interna de controladores, planejar estratégias para alcançar metas e prazos, realizar recrutamento e seleção de novos controladores, e representar a equipe em eventos, reuniões e treinamentos externos.</p>
				<br />

				<p className={styled.job}>Controlador técnico</p>
				<p className={styled.time}>{experiencePeriod('01/01/2008', '01/01/2014')}</p>
				<p className={styled.location}>São Paulo, São Paulo, Brasil</p>
				<p className={styled.jobDescription}>Como controlador técnico, minhas responsabilidades incluíam supervisionar e gerenciar uma equipe de mais de 30 técnicos que realizavam instalações e assistência técnica dos produtos da SKY em residências. Além disso, também atendia aos clientes, agendando visitas técnicas para montagem e instalação dos equipamentos.</p>
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
