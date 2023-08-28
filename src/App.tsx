import { gsap } from 'gsap'
import './App.css'

function App() {

  gsap.fromTo('.logo-name',
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 3.5,
    }
  );

  return (
    <>
      <main>
        <div className="loading-page">
          <svg id="svg" viewBox="0 0 1920 1677" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1920 0C1920 210.905 1749.03 381.878 1538.12 381.878H859.227C753.773 381.878 668.287 467.364 668.287 572.818C668.287 678.271 753.773 763.757 859.227 763.757H1159.54L1219.89 530.387H1601.77L1442.65 1145.64H859.227C542.868 1145.64 286.409 889.176 286.409 572.818C286.409 256.459 542.868 0 859.227 0C860.996 0 862.764 0.00802755 864.531 0.0240482L864.53 0H1920ZM0 1676.02C0 1465.12 170.973 1294.14 381.878 1294.14H1400.22L1304.75 1676.02H0Z" fill="#E7FF52" />
          </svg>

          <div className="name-container">
            <div className="logo-name">
              <p>Lucas Goulart</p>
              <small>Desenvolvedor Front-end & UI/UX Designer</small>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
