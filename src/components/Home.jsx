import AboutMe from "./Aboutme"
import Skills from "./Skills"
import Project from "./Project"
import Contact from "./Contact"

function Home(){
    return(
        <>
  <nav className="navbar   navbar-expand-lg fixed-top">
    <div className="container ">
      <a className="navbar-brand" href="#">
        <h1 className="logo">
          <span className="port">Kiran</span>Ashfaq.
        </h1>
      </a>
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon bg-white text-black"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul
          className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll"
          style={{ "--bs-scroll-height": "100px" }}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              style={{ "--i": 1 }}
              aria-current="page"
              href="#"
            >
              <span className="li home">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              style={{ "--i": 2 }}
              aria-current="page"
              href="#aboutme"
            >
              <span className="li">About Me</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ "--i": 3 }} href="#skill">
              <span className="li">Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ "--i": 4 }} href="#pro">
              <span className="li">Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ "--i": 5 }} href="#contactus">
              <span className="li">Contact Me</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br /><br /><br /><br /><br /><br /><br /><br /> <br /><br />
                                                     {/* home section  */}
  <div className="container text-center home-main-div">
  <div className=" home-main-div">
    <div className=" ">
      <h4 className="home-heading">Hello I'M</h4>
      {/* <h1 className="home-name">KIRAN ASHFAQ</h1> */}
      <h1 className="home-name ">KIRAN ASHFAQ</h1>

      <h4 className="home-content">I'm a Developer</h4> <br />
      <button className="hire"><a href="img/Kiranashfaq.pdf" download='kiranashfaq'>Download CV</a></button> 
      {/* <button className="hire ms-4">Hire me</button>  */}
          <br /> <br />

      <a href="https://www.instagram.com/kiran_.ashfaq/">
        <i className="fa-brands fa-brande fa-instagram fa-lg" style={{ color: "#ffffff" }}></i>
      </a>
      <a href="https://www.twitter.com/KiranAshfaq5704">
        <i className="fa-brands fa-brande fa-twitter ,fa-twi fa-lg" style={{ color: "#ffffff" }}></i>
      </a>
      <a href="https://www.linkedin.com/in/kiranashfaq/">
      
      <i className="fa-brands fa-brande fa-linkedin fa-lg" style={{ color: "#ffffff" }}></i>
      </a>
      <a href="https://github.com/kiranashfaq">
        <i className="fa-brands fa-brande fa-github fa-lg" style={{ color: "#ffffff" }}></i>
      </a>
    </div>

    <div className="  home-img text-start">
      <div className="glowing-circle">
        <span className="img-span"></span>
        <span className="img-span"></span>
        <div className="image">
          <img src="img/me.png" alt="" className="home-pic mb-auto" />
        </div>
      </div>
    </div>
  </div>
</div>
                                                
<AboutMe/>
<Skills/>
<Project/>
<Contact/>
        </>
    )
}
export default Home