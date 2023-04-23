const toggleSwitch = document.querySelector("#toggle");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    header1.textContent = 'Бидний үзүүлэх үйлчилгээ';
    header2.textContent = 'Бидэнтэй холбогдох';
    text1.textContent = "Dark Side Heading";
    text2.textContent = "Another Dark Side Heading";
    
  } else {
    header1.textContent = 'Sunny Side Heading';
    header2.textContent = 'Another Sunny Side Heading';
    text1.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa repudiandae quisquam sunt nemo? Possimus perspiciatis quam pariatur, tempora nobis magni earum nostrum quisquam maxime, inventore, ipsam aliquam temporibus optio cumque?";
    text2.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt officiis ratione inventore accusantium magnam consectetur voluptatem esse, reiciendis natus! Consequuntur possimus, suscipit nihil distinctio velit alias minima nobis! Mollitia, recusandae?";
    
  }
});
