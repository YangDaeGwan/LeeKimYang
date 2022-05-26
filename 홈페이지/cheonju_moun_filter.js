
var mountain = [
    {id : 0, local : 서원구, title : '팔봉산', height : 297.4 },
    {id : 1, local : 서원구, title : '망월산', height : 367.1 },
    {id : 2, local : 서원구, title : '용덕산', height : 440.7 },
    {id : 3, local : 서원구, title : '봉무산' },
    {id : 4, local : 서원구, title : '부모산' },
    {id : 5, local : 서원구, title : '명심산' },
    {id : 6, local : 서원구, title : '은적산' },
    {id : 7, local : 서원구, title : '두루봉산' },
    {id : 8, local : 서원구, title : '병마산' },
    {id : 9, local : 서원구, title : '동림산' },
    {id : 10, local : 서원구, title : '망덕산' },
    {id : 11, local : 서원구, title : '마봉산' },
    {id : 12, local : 서원구, title : '돛대산' },
    {id : 13, local : 서원구, title : '아미산' },
    {id : 14, local : 서원구, title : '망덕산' },
    {id : 15, local : 서원구, title : '계미산' },
    {id : 16, local : 서원구, title : '학천산' }
  ]


  function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("box");
    if (c == "all") c = "";
    for(i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
  }

  function addClass(element, name){
    var i, ar1, arr2;
    arr1 = element.className.Split(" ");
  }

