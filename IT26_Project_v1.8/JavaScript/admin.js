

//For Side Bar Toggle
function show(){

  document.getElementById('sidebar-wrapper').classList.toggle('active');
  
  var containerOuterElements = document.getElementsByClassName('container_outer');
  for(var i = 0; i < containerOuterElements.length; i++){
      containerOuterElements[i].classList.toggle('active');
  }
  
  }


  class mySideBar extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <div class="sidebar-heading">
        <hr>
        <h3>Welcome!<h3>
        <p class="normal plus" id="user-display-name"><i class="bi bi-person-fill"> </i>John Doe<p>
        <p class="normal" id="user-display-name">ID#100012<p>
        <hr>
        </div>

        <div class="list-group list-group-flush">
            <a href="../admin-portal/admin-dashboard.html" class="list-group-item list-group-item-action"><i class="bi bi-clipboard2-data"> </i>Dashboard</a>
            <a href="../admin-portal/admin-books.html" class="list-group-item list-group-item-action"><i class="bi bi-book"> </i>Books</a>
            <a href="../admin-portal/admin-transaction.html" class="list-group-item list-group-item-action"><i class="bi bi-arrow-left-right"> </i>Transactions</a>
            <a href="../admin-portal/admin-pending-returns.html" class="list-group-item list-group-item-action"><i class="bi bi-hourglass-split"> </i>Pending Returns</a>
            <a href="../admin-portal/admin-fines.html" class="list-group-item list-group-item-action"><i class="bi bi-exclamation-triangle"> </i>Fines</a>
        </div>
        `;

    }
}    


customElements.define('my-side-bar', mySideBar);







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
                <img src="../Assets/Library_Logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
              </a>

          <a class="navbar-brand" href="index.html">THE BOOK VAULT</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../user-portal/user-home.html"><i class="bi bi-house"></i>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"><i class="bi bi-question-circle"></i>Help</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html"><i class="bi bi-clock-history"></i>New Books</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="features.html"><i class="bi bi-map"></i>Library Map</a>
              </li>

            </ul>



            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person-fill"> </i>Account
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="admin.html">Account Details</a></li>
                  <li><a class="dropdown-item" href="user.html">Change Username</a></li>
                  <li><a class="dropdown-item" href="user.html">Change Password</a></li>
                </ul>
                
                <li class="nav-item">
                  <a class="nav-link" href="../user.html"><i class="bi bi-box-arrow-left"> </i>Sign Out</a>
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