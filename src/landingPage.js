import './landingPage.css'

function landingPage() {
  return (
    <div className='elements'>
      <section className='landingPage'>
        <HeaderBar />
      </section>
    </div>
  )
}

function HeaderBar() {
  return (
    <>
      <div className='header'>
        <nav className='nav'>
          {/* <h1>A</h1> */}
          <img src="/A-teal.png" alt="logo" height={60} width={60} className='logo' />
          {/* <i class="bi bi-list"></i> */}
          <label class="burger" for="burger">
            <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
          </label>
          {/* <ul>
          <li>
            About
          </li>
          <li>
            Projects
          </li>
          <li>
            Resume
          </li>
          <li>
            Contact Me
          </li>
        </ul> */}
        </nav>
      </div>
      {/* <div className='intro'> */}
      <div className='intro'>
        <p className='text-first'>Hi, I am <span className='text-second'>Aayushi Parekh</span></p>
        <br />
        <p className='text-second'>A  Full Stack Developer</p>
        <button class="btn btn-landing-page">View my work</button>
      </div>
      {/* <div className='image'><img src='/profile.jpg' alt='profile' height={400} width={400}/></div> */}
      {/* </div> */}
    </>
  )
}

export default landingPage