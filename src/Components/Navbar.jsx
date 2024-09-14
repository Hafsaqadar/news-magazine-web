

 const Navbar = (setCategory) => {
   

  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <button  className="nav-link"onClick={()=>setCategory("technology")} >technology</button>
        </li>
        <li className="nav-item">
          <button className="nav-link"onClick={()=>setCategory("business")} >business</button>
        </li>
        <li className="nav-item">
          <button className="nav-link"onClick={()=>setCategory("health")} >health</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("science")}>science</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("sports")}>sports</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</button>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}


export default Navbar