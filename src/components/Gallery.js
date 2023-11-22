const Gallery = () => {
    return (
        <section class="Gallery section" id="Gallery">
            <h2 class="section-title">Gallery</h2>

            <div class="Gallery_container bg">
                <div class="Gallery_img">
                    <img src="./assets/img/risna5.jpeg" alt=""></img>

                    <div class="Gallery_link">
                        <p>"Looking sunrise" </p>
                    </div>
                </div>
                <div class="Gallery_img">
                    <img src="./assets/img/risna.jpg" alt=""></img>

                    <div class="Gallery_link">
                        <p> "Holidays in Tahura"</p>
                    </div>
                </div>
                <div class="Gallery_img">
                    <img src="./assets/img/risna4.jpg" alt=""></img>

                    <div class="Gallery_link">
                        <p> " hiking in ciremai mountain"</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Gallery;