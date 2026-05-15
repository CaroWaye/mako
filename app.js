import { promptList } from './data/prompts.js';

if (document.readyState !== 'loading') {    
  loadPrompt();
} else {    
  document.addEventListener('DOMContentLoaded', function () { loadPrompt() });
}

function loadPrompt() {
  var seedDate = new Date(2025, 4, 27, 0, 0, 0, 0);
  
  function Na(e, a) {
      var s = new Date(e),
          t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);

      return Math.round(t / 864e5);
  }
  function findDayCount(todayDate, seedDate) {
    const seed = new Date(seedDate)
    const today = new Date(todayDate).setHours(0, 0, 0, 0) - seed.setHours(0, 0, 0, 0);
    return Math.floor(today / (1000 * 60 * 60 * 24)) + 1;
  }
  function Da(e) {
      var a,
          s = Ga(e);
      return (a = s % promptList.length), promptList[a];
  }
  function Ga(e) {
      return Na(seedDate, e);
  }
  
  var promptFromList = Da(new Date())
  var dayCount = findDayCount(new Date(), seedDate);
  document.getElementById("prompt").innerHTML = promptFromList;
  document.getElementById("dayCount").innerHTML = `Day ${dayCount}`;
}


