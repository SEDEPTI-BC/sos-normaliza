<template>
  <div class="scheduling">
    <div>
      <form id="scheduling">
        <ul id="progressbar" aria-hidden="true">
          <li class="active">Informações pessoais</li>
          <li :class="{active: institutionalActive}">Informações institucionais</li>
          <li :class="{active: schedulingActive}">Informações do agendamento</li>
        </ul>
        <fieldset class="animate__animated animate__fadeInLeft" v-if="showPersonal">
          <h2 class="fs-title nexa-bold">Informações pessoais</h2>
          <h3 class="fs-subtitle nexa-bold">Primeiramente, precisamos de algumas informações sobre você</h3>
          <input type="text" name="nameUser" placeholder="Insira seu nome completo" aria-label="Insira o seu nome completo" v-model="nameUser">
          <input type="text" name="phoneUser" placeholder="Insira seu telefone/celular" aria-label="Insira seu número de telefone ou celular" v-model="phoneUser">
          <input type="email" name="emailUser" id="emailUser" aria-label="Insira o e-mail, de preferência institucional" aria-describedby="emailHelpId" placeholder="Insira seu e-mail" v-model="emailUser">
          <small id="emailHelpId" class="form-text text-muted nexa-bold">Por favor, utilize preferencialmente o seu e-mail institucional</small>
          <input type="button" name="next" class="next action-button" value="Próximo" aria-label="Ir para o próximo passo" @click="toInstitutional()">
        </fieldset>
        <fieldset class="animate__animated animate__fadeInLeft" v-if="showInstitutional">
          <h2 class="fs-title nexa-bold">Informações institucionais</h2>
          <h3 class="fs-subtitle nexa-bold">Agora precisamos conferir se realmente você é um estudante da UFPA</h3>
          <select name="courseUser" v-model="courseUser">
            <option disabled selected>Selecione o seu curso</option>
            <option v-for="(course, index) in courses" :key="index" :value="course">{{ course }}</option>
          </select>
          <select name="campusUser" v-model="campusUser">
            <option disabled selected>Selecione o seu instituto ou campus</option>
            <option v-for="(unit, index) in units" :key="index" :value="unit">{{ unit }}</option>
          </select>
          <input type="text" name="registryUser" placeholder="Informe a sua matrícula" aria-label="Informe o seu número de matrícula" v-model="registryUser">
          <input type="button" name="previous" class="previous action-button-previous" value="Anterior" aria-label="Voltar para o passo anterior" @click="backToPersonal()">
          <input type="button" name="next" class="next action-button" value="Próximo" aria-label="Ir para o próximo passo" @click="toScheduling()">
        </fieldset>
        <fieldset class="animate__animated animate__fadeInLeft" v-if="showScheduling">
          <h2 class="fs-title nexa-bold">Informações do agendamento </h2>
          <h3 class="fs-subtitle nexa-bold">Por fim, conte um pouco para nós sobre as suas dúvidas</h3>
          <textarea name="messageUser" cols="30" rows="3" placeholder="Deixe uma mensagem para que possamos entender melhor suas necessidades" v-model="messageUser"></textarea>
          <input type="button" name="previous" class="previous action-button-previous" value="Anterior" aria-label="Voltar para o passo anterior" @click="toInstitutional">
          <input type="submit" name="submit" class="submit action-button" value="Agendar" aria-label="Concluir agendamento">
        </fieldset>
      </form>
    </div> 
  </div>
</template>

<script>
import useVuelidate from '../../node_modules/vuelidate/dist/vuelidate.min.js';
import { required, email } from '../../node_modules/vuelidate/dist/validators.min.js';
import { courses } from '../../static/js/academic/courses';
import { units } from '../../static/js/academic/units';

export default {
  name: 'Scheduling',
  
  validators() {
    return {
      nameUser: { required },
      phoneUser : { required },
      emailUser: { email },
      courseUser: { required },
      campusUser: { required },
      registryUser: { required },
      messageUser: { required },
    }
  },
  data() {
    return {
      courses: courses,
      units: units,
      nameUser: '',
      phoneUser: '',
      emailUser: '',
      courseUser: 'Selecione o seu curso',
      campusUser: 'Selecione o seu instituto ou campus',
      registryUser: '',
      messageUser: '',
      institutionalActive: false,
      schedulingActive: false,
      showPersonal: true,
      showInstitutional: false,
      showScheduling: false,
    }
  },
  methods: {
    backToPersonal() {
      this.showPersonal = true;
      this.showInstitutional = false;
      this.showScheduling = false;
      this.institutionalActive = false;
      this.schedulingActive = false;
    },
    backToInstitutional() {
      this.showPersonal = true;
      this.showInstitutional = true;
      this.showScheduling = false;
      this.institutionalActive = true;
      this.schedulingActive = false;
    },
    toInstitutional() {
      this.showPersonal = false;
      this.showInstitutional = true;
      this.showScheduling = false;
      this.institutionalActive = true;
      this.schedulingActive = false;
    },
    toScheduling() {
      this.showPersonal = false;
      this.showInstitutional = false;
      this.showScheduling = true;
      this.institutionalActive = true;
      this.schedulingActive = true;
    }
  }
}
</script>

<style scoped>
  #scheduling {
    text-align: center;
    position: relative;
    margin-top: 30px;
  }

  #scheduling fieldset {
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

  #scheduling fieldset:not(:first-of-type) {
    display: none;
  }

  #scheduling input, 
  #scheduling textarea,
  #scheduling select {
    padding: 15px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 0;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    color: rgb(44, 62, 80);
    font-size: 1rem !important;
  }

  #scheduling select {
    background-color: rgb(255, 255, 255) !important;
  }

  #scheduling textarea {
    resize: none !important;
  }

  #scheduling input:focus,
  #scheduling textarea:focus,
  #scheduling select:focus {
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

  #scheduling .action-button {
    width: 100px;
    background: var(--main-bg);
    font-weight: bold;
    color: rgb(255, 255, 255);
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
  }

  #scheduling .action-button:hover, #scheduling .action-button:focus {
    box-shadow: 0 0 0 2px rgb(255, 255, 255), 0 0 0 3px var(--main-bg);
  }

  #scheduling .action-button-previous {
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

  #scheduling .action-button-previous:hover, #scheduling .action-button-previous:focus {
    box-shadow: 0 0 0 2px rgb(255, 255, 255), 0 0 0 3px var(--main-color);
  }

  .fs-title {
    font-size: 1.3rem;
    text-transform: uppercase;
    color: rgb(44, 62, 80);
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .fs-subtitle {
    font-weight: normal;
    font-size: 1.2rem;
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
    font-size: 0.8rem;
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
    color: var(--main-bg);
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 5px 25px;
    font-size: 12px;
  }

  .dme_link a:hover, .dme_link a:focus {
    background: var(--main-color);
    text-decoration: none;
  }
</style>