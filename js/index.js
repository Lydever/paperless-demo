  function getLiexi(){
    let zcontent = document.getElementById('zhuxi-content');
    let lxi = document.getElementsByClassName('aside-nav');
    lxi.style.display = "block";
    zcontent.style.display = "none";
  }
  function getZhuxi(){
    let zcontent = document.getElementById('zhuxi-content');
    let lxi = document.getElementsByClassName('aside-nav');
    lxi.style.display = "none";
    zcontent.style.display = "block";
  }

  function hiddenControl(){
    let control = document.getElementById('control');
    control.style.display = "none";
  }

  function changeImg(){
    let menuBtn = document.getElementById('menuBtn');
    let img = document.getElementById('img');
    let pickc = document.getElementById('pickc');
    let xinhao = document.getElementById('xinhao');
    let jizhong = document.getElementById('jizhong');
    let online = document.getElementById('online');
    let pifu = document.getElementById('pifu');
    let toutai = document.getElementById('toutai');
    let gonggao = document.getElementById('gonggao');
    let qiandao = document.getElementById('qiandao');
    let group = document.getElementById('group');
    let broadcast = document.getElementById('broadcast');
    let edit = document.getElementById('edit');
    let ed = document.getElementById('ed');
    let zj = document.getElementById('zj');
    let change = document.getElementById('change');
    let screen = document.getElementById('screen');
    let setting = document.getElementById('setting');
    let exit = document.getElementById('exit');
    let process = document.getElementById('process');
    let doc = document.getElementById('doc');
    let jiyao = document.getElementById('jiyao');
    let read = document.getElementById('read');
    let share = document.getElementById('share');
    let msg = document.getElementById('msg');
    let toupiao = document.getElementById('toupiao');
    let tongzhi = document.getElementById('tongzhi');
    let service = document.getElementById('service');
    let editBtn = document.getElementById('editBtn');
    let backBtn = document.getElementById('backBtn');
    let liexi = document.getElementById('liexi');
    let zhuxi = document.getElementById('zhuxi');
    let resc = document.getElementById('resc');

    // 集中控制菜单列表
    let welcome = document.getElementById('welcome');
    let showQ = document.getElementById('showQ');
    let showT = document.getElementById('showT');
    let showM = document.getElementById('showM');
    let restart = document.getElementById('restart');
    let end = document.getElementById('end');
    let close = document.getElementById('close');
    let allClose = document.getElementById('allClose');
    welcome.onclick = (e) => {
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
    };
    showQ.onclick = (e) => {
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
    };
    showT.onclick = (e) => {
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
    };
    showM.onclick = (e) => {
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
    };
    restart.onclick = (e) => {
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
    };
    end.onclick = (e) => {
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
    };
    close.onclick = (e) => {
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
    };
    allClose.onclick = (e) => {
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
    };

    /*批注页面返回*/
    backBtn.addEventListener('click',goBack);
    editBtn.addEventListener('click',toEdit);

    // 菜单按钮
    menuBtn.onclick = (e) => {
      let menuBtn = document.getElementById('menuBtn');
      menuBtn.style.display = "none";
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
      let nav = document.getElementById('nav');
      nav.style.display = "block";
    };

    resc.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/主席-资料控制.jpg";
    };

    pickc.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/主席-投票控制.jpg";
    };
    xinhao.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/主席-信号控制.jpg";
    };
    jizhong.onclick = (e) => {
      editBtn.style.display = "none";
      let control = document.getElementById('control');
      control.style.display = "block";
      img.src = "images/主席-集中控制1.jpg";
    };
    online.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/主席-在线控制.jpg";
    };
    pifu.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/主席-更换皮肤.jpg";
    };
    toutai.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/打开后台2.jpg";
    };
    gonggao.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/主席-发布公告.jpg";
    };
    qiandao.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/主席-签到信息.jpg";
    };
    group.onclick = (e) => {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/主席-信息组合.jpg";
    };

    function toEdit(){
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/批注.jpg";
    }

    function goBack(){
      editBtn.style.display = "block";
      hiddenControl();
      window.location.go(-1);
    }

    edit.onclick = (e) => {
      hiddenControl();
      img.src = "images/菜单-手绘批注.jpg";
      editBtn.style.display = "block";
    };
    broadcast.onclick = (e) => {
      hiddenControl();
      editBtn.style.display = "none";
      img.src = "images/菜单-同屏广播.jpg";
    };
    ed.onclick = (e) =>  {
      hiddenControl();
      img.src = "images/菜单-电子白板.jpg";
      editBtn.style.display = "block";
    };
    zj.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/main-null.jpg";
    };
    change.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/桌面切换.jpg";
    };
    screen.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/屏幕截图.jpg"
    };
    setting.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/菜单-系统设置.jpg"
    };
    exit.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/菜单-退出系统.jpg"
    };
    process.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/会议议程.jpg"
    };
    doc.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/会议资料.jpg"
    };
    jiyao.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/会议纪要.jpg"
    };
    read.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/读取U盘.jpg"
    };
    share.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/文件共享.jpg"
    };
    msg.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/发送信息.jpg"
    };
    toupiao.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/投票表决.jpg"
    };
    tongzhi.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/系统通知.jpg"
    };
    service.onclick = (e) =>  {
      editBtn.style.display = "none";
      hiddenControl();
      img.src = "images/会议服务.jpg"
    };
    liexi.onclick = (e) => {
      editBtn.style.display = "none";
      let menuBtn = document.getElementById('menuBtn');
      menuBtn.style.display = "none";
      let nav = document.getElementById('nav');
      hiddenControl();
      nav.style.display = "block";
      let zcontent = document.getElementById('zhuxi-content');
      let lxi = document.getElementById('aside-nav');
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected.jpg";
      lxi.style.display = "block";
      zcontent.style.display = "none";
    };
    zhuxi.onclick = (e) => {
      editBtn.style.display = "none";
      let menuBtn = document.getElementById('menuBtn');
      menuBtn.style.display = "none";
      hiddenControl();
      let nav = document.getElementById('nav');
      nav.style.display = "block";
      let zcontent = document.getElementById('zhuxi-content');
      let lxi = document.getElementById('aside-nav');
      lxi.style.display = "none";
      let mainMenu = document.getElementById('mainMenu-img');
      mainMenu.src = "images/菜单-selected-主席.jpg";
      zcontent.style.display = "block";
    };
  }
