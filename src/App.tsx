import { gsap } from 'gsap'
import './App.css'

function App() {

  gsap.fromTo('.comming-soon',
  { 
    opacity: 1 
  },
  {
    opacity: 0,
    duration: 1,
    delay: 1.5,
  }
);

gsap.fromTo('.loading-page',
  { 
    opacity: 0 
  },
  {
    opacity: 1,
    duration: 1,
    delay: 3.5,
  }
);

gsap.fromTo('.logo-name', 
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 1.5,
  }
);

  return (
    <>
      <main>
        <div className="comming-soon">
          <p>Em breve...</p>
        </div>
        <div className="loading-page">
          <svg id="svg" width="350" height="306" viewBox="0 0 350 306" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M159.117 1.51824L159.117 1.5H348.484C347.686 38.4252 317.503 68.1133 280.387 68.1133H156.63C136.578 68.1133 120.323 84.3682 120.323 104.42C120.323 124.472 136.578 140.727 156.63 140.727H211.374H212.535L212.826 139.602L223.537 98.1851H290.052L261.822 207.34H156.63C99.7887 207.34 53.7099 161.261 53.7099 104.42C53.7099 47.5788 99.7887 1.5 156.63 1.5C156.948 1.5 157.266 1.50144 157.583 1.50432L159.117 1.51824ZM1.51619 304.025C2.31401 267.1 32.4967 237.412 69.6133 237.412H253.327L236.674 304.025H1.51619Z" stroke="#E7FF52" strokeWidth="3" />
          </svg>
          <div className="name-container">
            <div className="logo-name">
              <p>Lucas Goulart</p>
              <small>Front-end Developer & UI/UX Designer</small>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
