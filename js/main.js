const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 Notes",
      url: "week2/index.html"
    },
    {
      label: "Week 2 Team Activity",
      url: "week2/teamActivity.html"
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