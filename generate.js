document.addEventListener("DOMContentLoaded", function(event) {
  let you = document.getElementById("you");
  let them = document.getElementById("them");

  for (let group of people) {
    for (let name in group) {
        let person = group[name];
        let option = document.createElement("option");
        option.value = person.bugzilla_nick;
        option.textContent = person.full;
        you.appendChild(option);
    }
  }

  document.addEventListener("change", e => {
    let person_reviewing = you.value;
    them.innerHTML = null;
    if (!person_reviewing) {
        return;
    }
    for (let group of people) {
        if (person_reviewing in group) {
            for (let name in group) {
                if (name == person_reviewing) {
                    continue;
                }
                let person = group[name];
                let btn = document.createElement("a");
                btn.className = "btn btn-success";
                btn.href = `${form.url}?${form.field}=${person.bugzilla_nick}`;
                btn.textContent = person.full;
                them.appendChild(btn);
                them.appendChild(document.createElement("br"));
            }
        }
    }
  });
});
