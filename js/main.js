const links = [
    {
      label: "Week1 Notes",
      url: "week1/index.html"
    }
  ]

var orderedList = document.getElementById("ordered_list");

for(let i = 0; i < links.length; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    var label = document.createTextNode(links[i].label);
    a.href = links[i].url;
    a.appendChild(label);
    li.appendChild(a);
    orderedList.appendChild(li);
}