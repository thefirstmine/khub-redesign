const loginValue = document.cookie.match('(^|;)\\s*' + "login" + '\\s*=\\s*([^;]+)')?.pop() || ''

if (!loginValue) window.location.href = "./login.html";