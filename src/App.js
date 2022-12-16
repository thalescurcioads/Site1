import './assets/css/styles.css';
import Container from './components/Containers/Container';
import Section from './components/Containers/Section';
import Header from './components/Containers/Header';
import Esfera from './components/Formas/Esfera';
import Box from './components/Containers/Box';
import Button from './components/Button/Button';
import Retangulo from './components/Formas/Retangulo';
import QuadradoFundo from './components/Formas/Quadrado';
import QuadradoMenorFundo from './components/Formas/QuadradoMenor';
import IcoSeta from './components/Formas/ico';
import RetanguloFundoVerde from './components/Formas/RetanguloFundo';

function App() {
  return (

    // <Button className="button-whatsapp-logo"> value="whatsapp" />
    // botáo deve ficar estatico no site até a última box de contato no rodapé da pag


    // Os espacos em branco dentro das tags de section sáo onde devem ser inseridas as imagens
    
      //section "case destaque"
    //<img src="img/Imagem 235.png"> </img>

      //section "what we do"
    //<img src="img/Grupo 3331.png"> </img>
    //<img src="img/Grupo 3332.png"> </img>
    //<img src="img/Grupo 3333.png"> </img>
    //<img src="img/Grupo 3334.png"> </img>
    //<img src="img/Grupo 3335.png"> </img>
    //<img src="img/Grupo 3336.png"> </img>

      //section "end-to-end"
    //<img src="img/Grupo 3283.png"> </img>  
    
      //section "brands"
    //<img src="img/Grupo 3308.png"> </img> https://www.ambev.com.br/
    //<img src="img/Grupo 3307.png"> </img> https://www.atuo.com.br/ *
    //<img src="img/Grupo 3306.png"> </img> https://www.bb.com.br/site
    //<img src="img/Grupo 3305.png"> </img> https://www.beatsoficial.com.br/
    //<img src="img/Grupo 3304.png"> </img> https://www.chevrolet.com.br/
    //<img src="img/Grupo 3313.png"> </img> https://www.dentsu.com/
    //<img src="img/Grupo 3312.png"> </img> https://fcagroup-me.com/en/index.html
    //<img src="img/Grupo 3311.png"> </img> https://www.fiat.com.br/
    //<img src="img/Grupo 3310.png"> </img> https://www.grupopetropolis.com.br/
    //<img src="img/Grupo 3309.png"> </img> https://www.grupobigbrasil.com.br/
    //<img src="img/Grupo 3314.png"> </img> https://havashealthandyou.com/
    //<img src="img/Grupo 3315.png"> </img> https://havascx.com/
    //<img src="img/Grupo 3316.png"> </img> https://www.isobar.com/pt-br
    //<img src="img/Grupo 3317.png"> </img> https://www.jeep.com.br/
    //<img src="img/Grupo 3322.png"> </img> https://www.hofbauerlogistica.com.br/
    //<img src="img/Grupo 3319.png"> </img> https://jussi.com.br/index.html *
    //<img src="img/Grupo 3323.png"> </img> https://monumenta.com.br/ **
    //<img src="img/Grupo 3324.png"> </img> https://www.nivea.com.br/ *
    //<img src="img/Grupo 3325.png"> </img> https://www.samsung.com/br/ *
    //<img src="img/Grupo 3326.png"> </img> https://www.seara.com.br/ **
    //<img src="img/Grupo 3327.png"> </img> https://superdigital.com.br/#
    //<img src="img/Grupo 3328.png"> </img> https://www.tim.com.br/rj
    //<img src="img/Grupo 3329.png"> </img> https://www.walmart.com/
    //<img src="img/Grupo 3330.png"> </img> https://www.wmccann.com/*

    //* Destaques que eu gostaria de copiar alguns elementos.
    //** Sites que demoram pra carregar

      //section "educators"
    //<img src="img/Imagem 238.png">  

      //section "Stories-News"
    //<img/Grupo de máscara 16.png>
    //<img/Grupo de máscara 17.png>
    //<img/Grupo de máscara 18.png>

      //section "believe"
    //<img/Interseção 1.png>

      //section "contato"
    //<img/Grupo 3346.png>
    //<img/Caminho 4338.png> https://www.instagram.com/codeandsoul/
    //<img/Caminho 4339.png> https://www.linkedin.com/company/code-and-soul/?originalSubdomain=br
    //<img/Caminho 4340.png> https://twitter.com/soulcodeacademy
    //<img/Caminho 4341.png> https://www.solutudo.com.br/empresas/sp/itapetininga/automacao-comercial-sistemas/code-and-soul-17974931


    <Container>
      
      <Section className="banner-header">
        <Header/>
        <Esfera className="esfera-1"/>
        <Box className="box-principal">
          <h1>We build digital 
            products for brands</h1>
          <Button className="button-title-banner" value="Let's Talk" />
        </Box>
      </Section>
      <Section className="banner-hello">
        <Esfera className="esfera-2"/>
        <Box className="box-hello">
          <p Align="right">Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, 
            sed diam nonumy eirmod</p>   
        </Box>
      </Section>

      <Section className="banner-hello2">
        <Box className="box-hello2">
        <h2><b>Hello, 
          nice to meet you
          </b></h2>
          <p>We’re a team of full-stack developers, specializing in quality 
            and lean development of high performance, Python, Django, 
            Graphql, React & React Native applications.</p>
        </Box>
      </Section>

      <Section className="banner-case-destaque">
      <QuadradoFundo className="Quadrado-1"/>
        <Box className="box-case-destaque">
          <h3>CASE DESTAQUE</h3>
          <h2>Lorem ipsum dolor 
            sit amet</h2>
          <p>Mussum Ipsum, cacilds vidis litro abertis. 
            Interagi no mé, cursus quis, vehicula ac nisi.Pra lá ,
            depois divoltis porris, paradis.
            A ordem dos tratores não altera o pão duris.
            Si num tem leite então bota uma pinga aí cumpadi!</p>
        </Box>
        
        <Retangulo className="Retangulo"/>
          <IcoSeta className="IcoSeta"/>
        <Esfera className="esfera-3"/>
        </Section>

        <Section className="banner-what-we-do">
          <Box className="box-what-we-do">
            <h2>What we do</h2>
            <p>Being mostly oriented to agile practices, we know exactly which development methodology, management approach and team configuration will perfectly 
              satisfy your needs, reduce time-to-market and, therefore, make the development process smoother and more cost-effective. 
              We eagerly develop different types of applications starting from simple ETL processes up to powerful SaaS and Cloud solutions.</p>
            </Box>
            <Box className="UX">
              <QuadradoMenorFundo className="QuadradoMenor1"/> 
              
              <h3>UX & UI Design</h3>
                <p>With a lot of love for design, we create 
                  a great user experience, 
                  always supported by research, data and 
                  content analysis.</p>
            </Box>
            <Box className="Web">
              <QuadradoMenorFundo className="QuadradoMenor2"/>

              <h3>Web & Mobile</h3>
                <p>We specialize in PHP, Python, Django, 
                  GraphQL, NodeJS, React & React Native. We have already delivered
                  solutions to large companies such as 
                  Banco do Brasil, Samsung and FCA.</p>
            </Box>
            <Box className="IoT">
            <QuadradoMenorFundo className="QuadradoMenor3"/>

                <h3>IoT & Smart Applications</h3>
                <p>We develop technological solutions
                   that combine IoT-based information 
                   architecture and analytical platforms to 
                   transform data into actionable 
                   business insights.</p>
            </Box>
            <Box className="Scaleble">
            <QuadradoMenorFundo className="QuadradoMenor4"/>

                  <h3>Services Tailored</h3>
                  <p>We offer a set of services adapted to 
                    your business needs. With a focus on 
                    the solution and a proven track record, 
                    we are the ideal partner for your 
                    project, from concept to production.</p>
            </Box>
            <Box className="Cloud">
            <QuadradoMenorFundo className="QuadradoMenor5"/>

                    <h3 Align="center">Cloud Solutions</h3>
                    <p>Want more performance and lower 
                      cost per execution of your 
                      application? We plan and build your 
                      cloud solution supported by our 
                      “Continuos Satisfaction” methodology.</p>
            </Box>
            <Box className="Services">
            <QuadradoMenorFundo className="QuadradoMenor6"/>

                    <h3>Scalable Platforms</h3>
                    <p>If your business needs standing
                       operations 24/7 and scaling to 
                       demand, we build smart solutions that 
                       adjust to your needs.</p>
            </Box>   
        </Section>
        <Esfera className="esfera-4"/>

        <Section className="banner-end-to-end">
        <RetanguloFundoVerde className="RetanguloFundoVerde1"/>
        
          <Box className="box-end-to-end">
            <h3>END-TO-END</h3>
            <h2>We operate in the full cycle, 
            from project to final delivery 
            of the digital product</h2>

            <h3>Through a multidisciplinary team (Product/Project 
              Managers, Data Scientists, Designers, Engineers and 
              Programmers) we work in the research and design stages, 
              data immersion and consumer journeys, prototyping and 
              validation, MVP prioritization, UX/UI, coding , QA, deploys 
              and tech + SEO support.</h3> 
              
              <Button className="button-title-banner" value="Let's Talk" />

          </Box>
        </Section>

        <Section className="banner-we">
          <Box className="box-we">
            <h1>We are the most important 
              partner for our customers</h1>
          </Box>
        </Section>

        <Section className="banner-brands">
          <Box className="box-brands">
            <h2 Align="left">Tailor-made solutions for brands 
              with complex problems</h2>
            <p>We question and deepen the problem, in search of more 
              human experiences.</p>


          </Box>
        </Section>

        <Section className="banner-educators">
          <Box className="box-educators"/>
          <Esfera className="esfera-4"/>
          <Retangulo className="Retangulo2"/>

          <h1>We are educators</h1>
          <p1>We share strategy and expertise through our thought 
            leadership and training</p1>
            <Button className="button-title-banner" value="Get Started Now" />
          <Box/>
        </Section>

        <Section className="banner-stories-news">
          <Box className="box-stories-news">
            <h2>Our Stories & Latest News</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
               sed diam nonumy eirmod tempor invidunt ut .</p>
          </Box>
          <Box className="box-insights">
             
             <h3>Code and Soul Insights</h3>
             <h2>Lorem ipsum dolor sit amet, consetetur</h2>
             <p>Lorem ipsum dolor sit amet, consectetur
               adipiscing elit. Sed congue sem vitae
                hendrerit consequat.</p> 
          </Box>
          <Box className="box-insights">
             
             <h3>Inspiration</h3>
             <h2>Lorem ipsum dolor sit amet, consetetur</h2>
             <p>Lorem ipsum dolor sit amet, consectetur
               adipiscing elit. Sed congue sem vitae
                hendrerit consequat.</p> 
          </Box>
          <Box className="box-insights">
             
             <h3>Innovation</h3>
             <h2>Lorem ipsum dolor sit amet, consetetur</h2>
             <p>Lorem ipsum dolor sit amet, consectetur
               adipiscing elit. Sed congue sem vitae
                hendrerit consequat.</p> 
          </Box>
          <Esfera className="esfera-5"/>

        </Section>

          <Section className="bammer-email">
            <Box className="box-email">
            <Retangulo className="Retangulo-3"/>
            <h2>Stay up to date with 
              our news, ideas and 
              updates</h2>
              <p> 
                Your email address<br /> 
                <input type="text" size="30" name="email"/> 
              </p> 
              <Button className="button-title-banner" value="Subscribe Now" />
            </Box>
          </Section>

            <Section className="banner-believe">
            <Retangulo className="Retangulo-4"/>
                <Box className="box-believe">
                  <h1>We believe in the 
                    potential of your 
                    startup</h1>
                  <p>We are the partner you are looking for to achieve 
                    exponential growth. We have special conditions for 
                    startups that have received Angel Investment.
                  </p>  
                  <Button className="button-title-banner" value="I'm interested"/>
                </Box>
            </Section>

            <h1>hello@codeandsoul.com</h1>
            <Esfera className="esfera-6"/>

            <Section className="banner-contato">
                <Box>
                  <p>We build digital products for brands</p>

                  <p>Code and Soul 2023</p>

                  <h4>São Paulo, BR</h4>
                  <h4>+55 11 3136-1830</h4>

                  <h4>Want to be part of our team?</h4>
                  <h4>jobs@codeandsoul.com</h4>

                  <p>Cookie Policy</p>
                  <p>Privacy Policy</p>

                </Box>
                

            </Section>
          

    </Container>
  );
}

export default App;
