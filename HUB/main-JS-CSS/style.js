
// muda a classe do html
// window.addEventListener("scroll", function(){                             --->> scroll e a funcao
// var frun = document.querySelector("frun");                                --->> busca a tag frun e seleciona
// frun.classList.toggle("Active", this.window.scrollY > 0);                 --->> cria ou muda a classe do frun para Active

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("Active", this.window.scrollY > 0);
});

window.addEventListener("scroll", function(){
    var div = document.querySelector("div");
    div.classList.toggle("Active1", this.window.scrollY > 0);
})

