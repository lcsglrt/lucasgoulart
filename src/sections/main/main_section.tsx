import './main_section.scss'
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../../assets/icons/social'

function MainSection() {
  return (
    <section>
      <div className="container">
        <div className="container-bg">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="content">
          <div className="banner-content">
            <h1>Programando funções que<br />retornam <span>resultados</span></h1>
            <p>
              Me chamo Lucas Goulart, sou desenvolvedor front-end e mobile.
              Posso ajudar a impulsionar sua presença digital através do desenvolvimento de <strong>websites institucionais</strong>, <strong>blogs</strong>, <strong>landing pages</strong> e <strong>interfaces de aplicativos móveis</strong> para sua empresa ou marca pessoal.
            </p>
            <div className="social">
              <h6>Me acompanhe nas redes sociais</h6>
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="">
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li>
                    <a href="">
                     <GitHubIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection