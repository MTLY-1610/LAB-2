let date = new Date();
 /** gets time every one second */
setInterval(() => {
 date.setSeconds(date.getSeconds() + 1);
 
 let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
 document.getElementById('foo').innerText = time;
}, 1000);



let total = 158,
    buttons = document.querySelector('.button'),
    pie = document.querySelector('.pies'),
    activeClass = 'active';

let skills = {
    SWEDISH: 80,
    ENGLISH : 90,
    FRENCH: 100,
    GERMAN: 70,
    ILLUSTRATOR: 80,
    PHOTOSHOP: 70,
    INDESIGN: 70,
    XD:60,
    HTML:70,
    CSS:70,
    JAVASCRIPT:40,
    TYPESCRIPT: 40,
  };
  
  
  /** work out percentage as a result of total */
  let numberFixer = function(num){
    let result = ((num * total) / 100);
    return result;
  }
  
  
  /** create a button for each slills*/
  for(property in skills){
    let newEl = document.createElement('button');
    newEl.innerText = property;
    newEl.setAttribute('data-name', property);
    buttons.appendChild(newEl);
  }
  
  /** when you click a button setPieChart and setActiveClass */
    buttons.addEventListener('click', function(e){
      if(e.target != e.currentTarget){
        let el = e.target,
            name = el.getAttribute('data-name');
        setPieChart(name);
        setActiveClass(el);
      }
      e.stopPropagation();
    });
  
  let setPieChart = function(name){
    let number = skills[name],
        fixedNumber = numberFixer(number),
        result = fixedNumber + ' ' + total;
    
    pie.style.strokeDasharray = result;
  }
  
  let setActiveClass = function(el) {
    for(let i = 0; i < buttons.children.length; i++) {
      buttons.children[i].classList.remove(activeClass);
      el.classList.add(activeClass);
    }
  }
  
  /** Set up default settings */
  setPieChart('SWEDISH');
  setActiveClass(buttons.children[0]);
