<template>
  <div class="scheduling">
    <!-- <div class="row">
      <div>
        <form id="msform">
          <ul id="progressbar">
            <li class="active">Informações pessoais</li>
            <li>Informações institucionais</li>
            <li>Informações do agendamento</li>
          </ul>
          <fieldset class="animate__animated animate__fadeIn">
            <h2 class="fs-title">Informações pessoais</h2>
            <h3 class="fs-subtitle">Primeiramente, precisamos de algumas informações sobre você</h3>
            <input type="text" name="fname" placeholder="Nome completo"/>
            <input type="text" name="phone" placeholder="Telefone"/>
            <input type="button" name="next" class="next action-button" value="Next"/>
          </fieldset>
          <fieldset class="animate__animated animate__fadeIn">
            <h2 class="fs-title">Informações institucionais</h2>
            <h3 class="fs-subtitle">Your presence on the social network</h3>
            <input type="text" name="twitter" placeholder="Twitter"/>
            <input type="text" name="facebook" placeholder="Facebook"/>
            <input type="text" name="gplus" placeholder="Google Plus"/>
            <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
            <input type="button" name="next" class="next action-button" value="Next"/>
          </fieldset>
          <fieldset class="animate__animated animate__fadeIn">
            <h2 class="fs-title">Informações do agendamento </h2>
            <h3 class="fs-subtitle">Fill in your credentials</h3>
            <input type="text" name="email" placeholder="Email"/>
            <input type="password" name="pass" placeholder="Password"/>
            <input type="password" name="cpass" placeholder="Confirm Password"/>
            <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
            <input type="submit" name="submit" class="submit action-button" value="Submit"/>
          </fieldset>
        </form>
      </div> 
    </div> -->
  </div>
</template>

<script>


export default {
  name: 'Scheduling',
}
</script>

<style scoped>
#msform {
  text-align: center;
  position: relative;
  margin-top: 30px;
}

#msform fieldset {
  background: rgb(255, 255, 255);
  border: 0 none;
  border-radius: 0;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  box-sizing: border-box;
  width: 80%;
  margin: 0 10%;
  position: relative;
}

#msform fieldset:not(:first-of-type) {
  display: none;
}

#msform input, #msform textarea {
  padding: 15px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 0;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  color: rgb(44, 62, 80);
  font-size: 13px;
}

#msform input:focus, #msform textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid rgb(236, 9, 119);
  outline-width: 0;
  transition: all 0.5s ease-in;
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
}

#msform .action-button {
  width: 100px;
  background: var(--main-color);
  font-weight: bold;
  color: rgb(255, 255, 255);
  border: 0 none;
  border-radius: 25px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px;
}

#msform .action-button:hover, #msform .action-button:focus {
  box-shadow: 0 0 0 2px rgb(255, 255, 255), 0 0 0 3px var(--main-color);
}

#msform .action-button-previous {
  width: 100px;
  background: rgb(197, 197, 241);
  font-weight: bold;
  color: rgb(255, 255, 255);
  border: 0 none;
  border-radius: 25px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px;
}

#msform .action-button-previous:hover, #msform .action-button-previous:focus {
  box-shadow: 0 0 0 2px rgb(255, 255, 255), 0 0 0 3px rgb(197, 197, 241);
}

.fs-title {
  font-size: 18px;
  text-transform: uppercase;
  color: rgb(44, 62, 80);
  margin-bottom: 10px;
  letter-spacing: 2px;
  font-weight: bold;
}

.fs-subtitle {
  font-weight: normal;
  font-size: 13px;
  color: rgb(102, 102, 102);
  margin-bottom: 20px;
}

#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  counter-reset: step;
}

#progressbar li {
  list-style-type: none;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 9px;
  width: 33.33%;
  float: left;
  position: relative;
  letter-spacing: 1px;
}

#progressbar li::before {
  content: counter(step);
  counter-increment: step;
  width: 24px;
  height: 24px;
  line-height: 26px;
  display: block;
  font-size: 12px;
  color: rgb(51, 51, 51);
  background: white;
  border-radius: 25px;
  margin: 0 auto 10px auto;
}

#progressbar li::after {
  content: '';
  width: 100%;
  height: 2px;
  background: rgb(255, 255, 255);
  position: absolute;
  left: -50%;
  top: 9px;
  z-index: -1; 
}

#progressbar li:first-child::after {
  content: none;
}

#progressbar li.active::before, #progressbar li.active::after {
  background: var(--main-color);
  color: rgb(255, 255, 255);
}

.dme_link {
  margin-top: 30px;
  text-align: center;
}
.dme_link a {
  background: rgb(255, 255, 255);
  font-weight: bold;
  color: var(--main-color);
  border: 0 none;
  border-radius: 25px;
  cursor: pointer;
  padding: 5px 25px;
  font-size: 12px;
}

.dme_link a:hover, .dme_link a:focus {
  background: rgb(197, 197, 241);
  text-decoration: none;
}
</style>