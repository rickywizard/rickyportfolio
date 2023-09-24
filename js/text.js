const glowing = {
    wordEl:'h1',
    letterEl:'span',
    output:'',
    splitWord: function() {
      let word = document.querySelector(this.wordEl)
      let wordText = word.innerHTML;
      let letters = wordText.split('');
      letters.forEach( letter => {
        this.output += `<span>${letter}</span>`; 
      })
      word.innerHTML = this.output;
      
    },
    animatedText: function() {
      var letters = document.querySelectorAll(this.letterEl);
      letters.forEach((letter,i) => {
        letter.style.transform = `scale(${(Math.random() * .5) + 1}`;
        letter.style.top = `${Math.random() * 20}px`;
        document.documentElement.style.setProperty(`--blur-${i}`, `${(Math.random() * 90) + 30}px` );
      })
    }
  }
  
  glowing.splitWord();
  
  setInterval(( ) => {
    glowing.animatedText();
  }, 1200)