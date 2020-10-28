
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

      // 対象のコンテンツをアクティブ化させる
      $tab.querySelectorAll('[data-content= "' + targetVal + '"]')[0].style.display = 'block';
      $nav[targetVal].classList.add('is-active');
      console.log('$nav[targetVal.classList]', $nav[targetVal.classList]);
  };
  
  // 全nav要素に対して関数を適応
  let index = 0;
  while(index < $nav.length){
  $nav[index].addEventListener('click', (e) => handleClick(e));
  index++;
  }


})();