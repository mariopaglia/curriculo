import React from 'react';
import styled from './styles.module.scss';
import { experiencePeriod } from '../utils/helpers';

export const RightContainer = () => {
  return (
    <section className={styled.rightContainer}>
      <h1>Mario Paglia</h1>
      <p className={styled.currentJob}>Desenvolvedor Front-end</p>
      <br />

      <h1>Resumo</h1>
      <br />
      <p className={styled.resume}>
        Sou um apaixonado por programação desde os 13 anos. Desde que fiz meu primeiro curso de HTML, CSS e Javascript
        na Impacta Tecnologia em 2007, nunca mais abandonei minha paixão e o gosto pela programação. Como desenvolvedor
        front-end, tenho mais de 7 anos de experiência atuando diretamente na área, desde 2016.
        <br /> <br />
        Minha paixão é criar interfaces de usuário atraentes e intuitivas que tornem a vida dos usuários mais fácil e
        agradável. Além disso, sou apaixonado por sempre me aperfeiçoar e aprender, estudando novas tecnologias e
        aprimorando minhas habilidades.
        <br /> <br />
        Também sou apaixonado por liderar e ensinar pessoas e equipes a atingirem seus melhores resultados. Acredito que
        é através do trabalho em equipe e da liderança eficaz que conseguimos alcançar os melhores resultados.
        <br /> <br />
        Se você procura um profissional apaixonado, dedicado e com habilidades comprovadas, venha conhecer mais sobre
        minha jornada e realizações na programação.
      </p>
      <br />

      <h1>Experiência profissional</h1>
      <br />

      <div className={styled.experience}>
        <h3>Consorciei</h3>
        <p className={styled.job}>Desenvolvedor Front-end Pleno</p>
        <p className={styled.time}>{experiencePeriod('07/03/2022', '')}</p>
        <p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
        <p className={styled.jobDescription}>
          Como Desenvolvedor Front-end Pleno na Consorciei, sou responsável por desenvolver e manter sistemas internos e
          externos de gestão de compras, vendas e transferências de cotas de consórcio. Utilizo tecnologias modernas e
          avançadas, incluindo ReactJS, NextJS, Styled Components, Context API, Hooks, TypeScript, Axios, AWS Lambda,
          Terraform, Backend for Frontend (BFF), Jest, Cypress e Testing Library para criar soluções escaláveis e
          altamente desempenháveis com interfaces de usuário eficientes e intuitivas. Além disso, lidero a equipe e
          garanto a entrega de projetos no prazo e com alta qualidade.
        </p>
      </div>

      <div className={styled.experience}>
        <h3>Agência H1 Code</h3>
        <p className={styled.job}>Desenvolvedor Front-end</p>
        <p className={styled.time}>{experiencePeriod('09/01/2016', '01/03/2022')}</p>
        <p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
        <p className={styled.jobDescription}>
          Atuei como desenvolvedor front-end, criando e realizando manutenções em projetos web, incluindo sites, lojas
          virtuais, blogs, landing pages e dashboards. Utilizei tecnologias como HTML, CSS, SASS, JavaScript, Git,
          GitHub, Bootstrap, jQuery, ReactJS, NextJS, TypeScript, Redux e Styled Components para desenvolver esses
          projetos. Além disso, utilizei o Axios para realizar requisições HTTP e integrar com APIs externas.
        </p>
      </div>

      <div className={styled.experience} style={{ marginBottom: 0 }}>
        <h3>SKY Brasil</h3>
        <p className={styled.time}>{experiencePeriod('01/01/2008', '08/01/2016')}</p>

        <p className={styled.job}>Líder de equipe</p>
        <p className={styled.time}>{experiencePeriod('01/01/2014', '08/01/2016')}</p>
        <p className={styled.location}>São Paulo, São Paulo, Brasil</p>
        <p className={styled.jobDescription}>
          Como líder de equipe, minhas principais responsabilidades incluíam gerenciar e treinar uma equipe interna de
          controladores, planejar estratégias para alcançar metas e prazos, realizar recrutamento e seleção de novos
          controladores, e representar a equipe em eventos, reuniões e treinamentos externos.
        </p>
        <br />

        <p className={styled.job}>Controlador técnico</p>
        <p className={styled.time}>{experiencePeriod('01/01/2008', '01/01/2014')}</p>
        <p className={styled.location}>São Paulo, São Paulo, Brasil</p>
        <p className={styled.jobDescription}>
          Como controlador técnico, minhas responsabilidades incluíam supervisionar e gerenciar uma equipe de mais de 30
          técnicos que realizavam instalações e assistência técnica dos produtos da SKY em residências. Além disso,
          também atendia aos clientes, agendando visitas técnicas para montagem e instalação dos equipamentos.
        </p>
      </div>
      {/* <h1>Formação acadêmica</h1>
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
      </div> */}
    </section>
  );
};
