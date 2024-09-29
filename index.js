//append the style
const head = document.head;
const link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";

const scripts = document.getElementsByTagName("script");
const src = scripts[scripts.length - 1].src;
const pathname = src.substring(0, src.lastIndexOf("/"));
link.href = pathname + "/css/style.css";

head.appendChild(link);
