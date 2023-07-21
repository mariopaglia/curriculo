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
        Desde que descobri minha paixão por programação aos 13 anos, segui um caminho de aprendizado e aperfeiçoamento
        contínuos. Com o primeiro contato com HTML, CSS e Javascript em 2007 na Impacta Tecnologia, a chama foi acesa -
        e tem crescido desde então.
        <br /> <br />
        Com mais de 7 anos de experiência direta como Desenvolvedor Front-end, tenho o prazer de criar interfaces de
        usuário atraentes e intuitivas que enriquecem a experiência do usuário. Essa paixão é alimentada pelo meu
        compromisso em permanecer na vanguarda das tendências tecnológicas, aprimorando constantemente minhas
        habilidades e conhecimentos.
        <br /> <br />
        Além da minha paixão por desenvolvimento, tenho uma afeição particular por liderar e orientar equipes para
        alcançar seus melhores resultados. Acredito firmemente que os melhores resultados são alcançados através da
        sinergia do trabalho em equipe e da liderança eficaz.
        <br /> <br />
        Se você está em busca de um profissional apaixonado, dedicado e com habilidades comprovadas, convido você a
        explorar mais sobre minha jornada e conquistas na programação. Estou sempre aberto a novas oportunidades e
        conexões no campo da tecnologia.
      </p>
      <br />

      <h1>Experiência profissional</h1>
      <br />

      <div className={styled.experience}>
        <h3>Consorciei</h3>
        <p className={styled.job}>Desenvolvedor Front-end</p>
        <p className={styled.time}>{experiencePeriod('07/03/2022', '')}</p>
        <p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
        <p className={styled.jobDescription}>
          Como Desenvolvedor Front-end na Consorciei, meu papel vai além do desenvolvimento - é também uma questão de
          liderança e entrega de excelência. Dedico-me ao desenvolvimento de sistemas sofisticados que atendem às
          necessidades dos nossos principais parceiros, como Itaú, Santander e Porto Seguro.
          <br /> <br />
          Com um foco incansável na qualidade, garanto a entrega eficaz de projetos dentro do prazo, utilizando
          tecnologias avançadas para otimizar sistemas internos e externos de gestão de compras, vendas e transferências
          de cotas de consórcio.
          <br /> <br />
          Minha abordagem de desenvolvimento é embasada em uma variedade de ferramentas modernas como ReactJS, NextJS,
          Styled Components, Context API, Hooks, TypeScript, Axios, AWS Lambda, Terraform, Backend for Frontend (BFF),
          Jest, Cypress e Testing Library. Com elas, sou capaz de criar soluções escaláveis, altamente desempenháveis e
          com interfaces de usuário eficientes e intuitivas.
          <br /> <br />
          Com a liderança da equipe como parte integral da minha função, conduzo a equipe com um equilíbrio eficaz entre
          orientação, autonomia e uma visão estratégica clara.
        </p>
      </div>

      <div className={styled.experience}>
        <h3>Agência H1 Code</h3>
        <p className={styled.job}>Desenvolvedor Front-end</p>
        <p className={styled.time}>{experiencePeriod('09/01/2016', '01/03/2022')}</p>
        <p className={styled.location}>Jundiaí, São Paulo, Brasil</p>
        <p className={styled.jobDescription}>
          No papel de Desenvolvedor Front-end na Agência H1 Code, conduzi o desenvolvimento e a manutenção de uma
          variedade de projetos web, que abrangiam desde sites e lojas virtuais até blogs, landing pages e dashboards.
          <br /> <br />
          Em minha atuação, empreguei uma ampla gama de tecnologias para garantir soluções robustas e de alta qualidade.
          Entre elas, HTML, CSS, SASS, JavaScript, Git, GitHub, Bootstrap, jQuery, ReactJS, NextJS, TypeScript, Redux e
          Styled Components.
          <br /> <br />
          Para otimizar a comunicação entre front-end e back-end, apliquei minha experiência com o Axios, realizando
          requisições HTTP e integrando eficientemente nossas soluções com APIs externas. Essas habilidades se mostraram
          essenciais para criar interfaces de usuário intuitivas e para assegurar a máxima funcionalidade de nossas
          soluções web.
          <br /> <br />
          Nesta posição, não só aprimorei minhas habilidades técnicas, mas também aprendi a adaptar-me rapidamente a
          novos desafios, sempre buscando a excelência em cada projeto que me foi confiado.
        </p>
      </div>

      <div className={styled.experience} style={{ marginBottom: 0 }}>
        <h3>SKY Brasil</h3>
        <p className={styled.time}>{experiencePeriod('01/01/2008', '08/01/2016')}</p>

        <p className={styled.job}>Líder de equipe</p>
        <p className={styled.time}>{experiencePeriod('01/01/2014', '08/01/2016')}</p>
        <p className={styled.location}>São Paulo, São Paulo, Brasil</p>
        <p className={styled.jobDescription}>
          Como Líder de Equipe na SKY Brasil, assumi responsabilidades de gestão e liderança, coordenando uma equipe
          interna de controladores. Sob minha orientação, planejamos estratégias para alcançar metas e prazos rigorosos,
          melhorando a eficiência e a produtividade da equipe. Além disso, liderei o processo de recrutamento e seleção
          para fortalecer ainda mais nossa equipe. Representei nossa unidade em eventos, reuniões e treinamentos
          externos, reforçando a imagem positiva e profissional da nossa equipe e da empresa como um todo.
        </p>
        <br />

        <p className={styled.job}>Controlador técnico</p>
        <p className={styled.time}>{experiencePeriod('01/01/2008', '01/01/2014')}</p>
        <p className={styled.location}>São Paulo, São Paulo, Brasil</p>
        <p className={styled.jobDescription}>
          Como Controlador Técnico, gerenciei e supervisionei uma equipe de mais de 30 técnicos responsáveis pela
          instalação e assistência técnica dos produtos SKY em residências. Além disso, proporcionava um atendimento ao
          cliente excepcional, agendando visitas técnicas para montagem e instalação de equipamentos.
          <br /> <br />
          Esta experiência me proporcionou habilidades valiosas em liderança de equipe, gerenciamento de projetos,
          atendimento ao cliente e comunicação efetiva, competências que se provaram inestimáveis em minha carreira
          subsequente como desenvolvedor.
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
