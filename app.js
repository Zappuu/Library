class Media {
    constructor(title, movieCast) {
      this._title = title;
      this._isCheckedout = false;
      this._ratings = []
    }
  
    //getters
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    get ratings() {
      return this._ratings 
    }
    get movieCast() {
      return this._movieCast
    }
  
    //setters
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    //methods
    toggleCheckOutStatus() {
      if (this._isCheckedOut) {
        this._isCheckedOut = false;
      } else {
        this._isCheckedOut = true;
      }
    }
  
    getAverageRating() {
     let avg = this.ratings.reduce((a, b) => a + b, 0) / this._ratings.length;
     return avg;
    }
  
    addRating(value) {
      this.ratings.push(value)
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  //testing the functionality of the class
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  //testing the functionality of the class
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut)
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  class CD extends Media {
    constructor(title) {
      super(title)
      this._songTitles = []
    }
  
    addTracks(value) {
      this._songTitles.push(value)
    }
  
    shuffle() {
      return this._songTitles[Math.floor(Math.random() * this._songTitles.length)];
    }
  }
  
  const mb = new CD('My mix');
  console.log(mb.ratings)
  //testing the functionality of the class
  mb.addTracks('apple');
  mb.addTracks(1);
  mb.addTracks('cinammon');
  console.log(mb.shuffle())
  console.log(mb)
  mb.addRating(5)
  mb.addRating(5)
  mb.addRating(5)
  mb.addRating(4)
  console.log(mb.getAverageRating())
  
  class Catalog extends Media {
  
  }
  