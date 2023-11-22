const Navigation=()=>{
    return(
        <header class="navigation"> 
            <nav class="nav bg">
                <div>
                    <a href="/" class="nav_logo">PORTOFOLIO</a>
                </div>

                <div class="nav_menu" id="nav-menu">
                    <ul class="nav_list">
                        <li class="nav_item"><a href="/" class="nav_link">Home</a></li>
                        <li class="nav_item"><a href="About" class="nav_link">About</a></li>
                        <li class="nav_item"><a href="Contact" class="nav_link">Contact</a></li>
                        <li class="nav_item"><a href="Gallery" class="nav_link">Gallery</a></li>
                    </ul>
                </div>

                <div class="nav_toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;