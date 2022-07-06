<template>
  <div class="wrape">
    <div class="question-page">
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
  </div>
</template>

<script>
import Questions from "~/components/questions/Questions";
import QuestionsRes from "~/components/questions/Questions-res";
export default {
  name: "HomePage",

  components: {
    Questions,
    QuestionsRes
  }
};
</script>
<style>
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
</style>