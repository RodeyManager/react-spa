/**
 * 动态加载初始资源
 */
(function (document) {
  // 资源列表
  var resList = {
    js: ['./assets/js/manifest.js', './assets/js/libs.js', './assets/js/app.js']
  };

  var bodyDom = document.querySelector('body');

  function createScript(index) {
    var script = document.createElement('script');
    script.src = resList.js[index] + '?_vc_=' + Date.now();
    return script;
  }

  // 脚本
  var isLoad = false;
  document.onreadystatechange = function () {
    if (!isLoad && (document.readyState === 'interactive' || document.readyState === 'complete')) {
      isLoad = true;
      var i = 0,
        _script = null,
        createScripts = function () {
          if (i >= resList.js.length) {
            document.onreadystatechange = null;
            return;
          }
          _script = createScript(i);
          _script.onload = function () {
            i++;
            createScripts();
          };
          bodyDom.appendChild(_script);
        };
      createScripts();
    }
  };
}.call(window, document));
