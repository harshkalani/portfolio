function fun(){
  alert("Download succesfully")
}

document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.style.animation = "appear 1s ease-in-out forwards";
              }
          });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  document.querySelectorAll("#block").forEach((element) => {
      observer.observe(element);
  });
});
