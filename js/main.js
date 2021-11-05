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
    },
    {
      label: "Week 3 Notes",
      url: "week3/index.html"
    },
    {
      label: "Week 3 Team Activity",
      url: "week3/teamActivity/teamActivity.html"
    },
    {
      label: "Week 4 Notes",
      url: "week4/index.html"
    },
    {
      label: "Week 4 Team Activity",
      url: "week4/teamActivity/index.html"
    },
    {
      label: "Week 5 Notes",
      url: "week5/index.html"
    }, 
    {
      label: "Week 5 Team Activity",
      url: "week5/teamActivity/index.html"
    },
    {
      label: "ToDo List",
      url: "ToDo/index.html"
    },
    {
      label: "Week 7 Notes",
      url: "week7/index.html"
    },
    {
      label: "Week 7 Team Activity",
      url: "week7/teamActivity/index.html"
    },
    {
      label: "Week 8 Notes",
      url: "week8/index.html"
    },
    {
      label: " Week 8 Team Activity",
      url: "week8/teamActivity/teamAssignment.html"
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