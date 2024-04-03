
class myNav extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `

        <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary"> == normal -->
        <!-- <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;" data-bs-theme="light"> == white -->
        <!-- <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark"> == blue -->
        <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"> == dark -->
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            
            <a class="navbar-brand" href="index.html">
                <img src="Assets/Library_Logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
              </a>

          <a class="navbar-brand" href="index.html">THE BOOK VAULT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html"><i class="bi bi-house"></i>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"><i class="bi bi-info-circle"></i>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="features.html">Features</a>
              </li>

            </ul>



            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-box-arrow-in-right"> </i>Sign In
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="admin.html">As Admin</a></li>
                  <li><a class="dropdown-item" href="user.html">As User</a></li>
                </ul>
                
                <li class="nav-item">
                  <a class="nav-link" href="sign-up.html"><i class="bi bi-person-fill"> </i>Sign Up</a>
                </li>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
        `;

    }
}    


customElements.define('my-nav', myNav);