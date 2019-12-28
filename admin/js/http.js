/* 沙箱模式 */
(function(w) {
  const token = localStorage.getItem("token");
  $.ajaxSetup({
    beforeSend(xhr) {
      if (!token) {
        location.href = "./login.html";
      }
      if (location.href.indexOf("login.html") === -1) {
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });
})(window);
