<template>
  <div class="wrape">

    <section class="header-section" id="header">
      <div class="container-fulid">
        <Header />
      </div>
    </section>

    <section class="loadApp-section padding" id="loadApp">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <Slider />
          </div>
          <div class="col-md-8 content">
            <loadApp />
          </div>
        </div>
      </div>
    </section>

    <section class="screens-section padding">
      <h2 class="head-title">شاشات التطبيق</h2>
      <div class="container">
        <Screens />
      </div>
    </section>

    <section class="Advantages-section padding" id="advantages">
      <h2 class="head-title">المزايا</h2>
      <div class="container">
        <Advantages />
      </div>
    </section>

    <section class="questions-section padding" id="questions">
      <div class="container">
        <h2>اسئله متكررة</h2>
        <div class="slider">
        <Questions />
        </div>
        <div class="questions-res">
          <QuestionsRes />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/header';
import Slider from '~/components/load-app/Slider'
import loadApp from '~/components/load-app/Load-app'
import Advantages from '~/components/Advantages'
import Questions from '~/components/questions/Questions'
import QuestionsRes from '~/components/questions/Questions-res'
import Screens from '~/components/screens'

export default {
  name: 'HomePage',

  components: {
    Header,
    Slider,
    loadApp,
    Advantages,
    Questions,
    QuestionsRes,
    Screens
  }
}
</script>

<style>


  .padding{
    padding: 69px 0;
  }
  @media only screen and (max-width: 991.98px){
    .header-section{
      padding: 30px 0;
    }
  }
  .loadApp-section{
    background-color: #f26725;

  }
  .loadApp-section .content{
    align-items: center;
    display: flex;
  }
  .screens-section .head-title{
      text-align: center;
    font-size: 33px;
    padding-bottom: 30px;
  }
  .Advantages-section{
    background-color: #f26725;
    color: #fff;
  }
  .Advantages-section .head-title{
    text-align: center;
    font-size: 33px;
    padding-bottom: 30px;
    }

  .questions-section{
    background-color: #F5F5F7;
  }
  .questions-section h2{
    padding-bottom: 30px;
    font-size: 33px;
    text-align: center;
  }
  .questions-section .questions-res{
    display: none;
  }

  @media only screen and (max-width: 991.98px) {
  .questions-section .slider{
    display: none;
  }
  .questions-section .questions-res{
    display: block;
  }
}
.contact-us-section{
  background-color: #f26725;
}

.contact-us-section h2{
  padding-bottom: 30px;
  text-align: center;
  color: #fff;
}
</style>
