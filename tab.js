
(()=>{
  //ここに命令をかく
  const $doc = document;
  const $tab = $doc.getElementById('js-tab')
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  
  // 初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  // クリックしたら怒るイベント
  const handleClick = (e) => {
    e.preventDefault();
    
    
    // クリックされたnavとそのdataを取得
      const $this = e.target;
      const targetVal = $this.dataset.nav;

      // 対象外のnav,content全て一旦リセットさせる
      let index = 0;
      while(index < $nav.length){
        $content[index].style.display = 'none';
        index++;
      }

      // 対象のコンテンツをアクティブ化させる
      $tab.querySelectorAll('[data-content= "' + targetVal + '"]')[0].style.display = 'block';
      $nav[targetVal].classList.add('is-active');
      
  };
  
  // 全nav要素に対して関数を適応
  let index = 0;
  while(index < $nav.length){
  $nav[index].addEventListener('click', (e) => handleClick(e));
  index++;
  }


})();