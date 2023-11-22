import { Icon } from '@iconify/react';
const Contact=()=>{
  return(
      <section class="contact section" id="contact">
          <h2 class="section-title">Contact Me</h2>

          <div class="contact_container bg">
            
              <div>
                    <h3 class="contact_icon"><Icon icon="mingcute:github-fill" /></h3>
                  <span class="contact_text">riznafzy</span>

                  <h3 class="contact_icon"><Icon icon="ic:twotone-email" /></h3>
                  <span class="contact_text">riznafzy@gmail.com</span>

                  <h3 class="contact_icon"><Icon icon="teenyicons:phone-solid" /></h3>
                  <span class="contact_text">+62 812 1989 3075</span>
                  
              </div>

              <form action="" class="contact_form">
                  <div class="contact_inputs">
                      <input type="text" id="name" placeholder="Name" class="contact_input"></input>
                      <input type="mail" id="email" placeholder="Email" class="contact_input"></input>
                  </div>

                  <textarea type="pesan" id="pesan" cols="0" rows="5" class="contact_input" placeholder="Massage"></textarea>

                  <input type="submit" value="Send" class="contact_button"></input>
              </form>
          </div>
      </section>
  );
}

export default Contact;