
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

  function layout(items){
    items.forEach(item => {
      let template =`
      <div class="moun">
        <img src="https://via.placeholder.com/300"></img>
        <div class="moun-body">
          <h5 class="title">${item.title}</h5>
          <h5 class="local">지역 : ${item.local}</h5>
          <p class="height">높이 : ${item.height}</p>
          <button class="btn">세부사항</button>
        </div>
      </div>
      `
      $('#items').append(template)
    });
  }

  $('#high').click(function(){
    let mountainHeight = mountain.slice();
    mountainHeight.sort(function(item1,item2){
      return item1.height-item2.height;
    });

    $('#items').html('');

    layout(mountainHeight);
    $('.height').css('background','#FFFF9A');
  })

