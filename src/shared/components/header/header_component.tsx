import Logo from '../../../../public/logo.svg'
import MobileMenuIcon from '../../../assets/icons/mobile-menu.svg'
import './header_component.scss'

function HeaderComponent() {
  return (
    <header>
      <div className="container">
        <div className="content">
          <div className="logo">
            <img src={Logo} alt="Logo do Lucas Goulart" />
          </div>
          <div className="navmenu">
            <nav>
              <img src={MobileMenuIcon} alt="" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent