// Theme toggle button event
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('theme-toggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');

      // Save preference
      const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', mode);
    });
  }
});
    // Show/Hide More Info
    document.addEventListener('DOMContentLoaded', function () {
      const showMoreBtn = document.getElementById('show-more-btn');
      const moreInfo = document.getElementById('more-info');

      showMoreBtn.addEventListener('click', function () {
        if (moreInfo.style.display === 'none') {
          moreInfo.style.display = 'block';
          showMoreBtn.textContent = 'Show Less';
        } else {
          moreInfo.style.display = 'none';
          showMoreBtn.textContent = 'Show More';
        }
      });
    })//portfolio;
    $(document).ready(function () {
  // Portfolio Projects Array
  const projects = [
   
    {
      title: "Weather App",
      text: "A real-time weather app using open API data.",
      image: "images/image8.jpg"
    },
    {
      title: "Portfolio Website",
      text: "A personal portfolio built with HTML, CSS, and Bootstrap.",
      image: "images/image9.jpg"
    },
    {
      title: "Task Manager",
      text: "A to-do list app with local storage and jQuery.",
      image: "images/image10.jpg"
    }
  ];

  let currentIndex = 0;

  $('#updateBtn').click(function () {
    // Move to next project
    currentIndex = (currentIndex + 1) % projects.length;

    const project = projects[currentIndex];

    // Update card content
    $('#dynamicTitle').text(project.title);
    $('#dynamicText').text(project.text);
    $('#dynamicImage').attr('src', project.image);
  });
});


  
    document.addEventListener('DOMContentLoaded', function () {
      const updateBtn = document.getElementById('update-card-btn');
      const title = document.getElementById('dynamic-title');
      const img = document.getElementById('dynamic-img');

      updateBtn.addEventListener('click', function () {
        title.textContent = 'Updated Game Project';
        img.src = 'images/image4.jpg';
      });
    });

    // Smart Page Interactions
$(document).ready(function () {
  // Live greeting
  $('#nameInput').on('keyup', function () {
    const name = $(this).val();
    $('#greetingMessage').text(name ? `Hello, ${name}!` : 'Hello, guest!');
  });

  // Hover color change
  $('#hoverBox').hover(
    function () {
      $(this).css('background-color', '#ffeeba');
    },
    function () {
      $(this).css('background-color', '#f1f1f1');
    }
  );

  // Click to animate
  $('#animateBtn').click(function () {
    $('#animatedBox')
      .stop(true, true)
      .fadeIn(300)
      .delay(1000)
      .slideUp(400);
  });
});
// FUN PAGE JS
// Wait for document to load
document.addEventListener("DOMContentLoaded", function () {
  // SlideToggle with jQuery
  $("#toggleButton").click(function () {
    $("#toggleBlock").slideToggle("fast");
  });

  // FadeIn/FadeOut on image
  $("#fadeBtn").click(function () {
    $("#funImage").fadeToggle("slow");
  });

  // Load quote via AJAX
  $("#loadQuote").click(function () {
    $.get("quote.txt", function (data) {
      $("#quoteBox").html(data);
    }).fail(function () {
      $("#quoteBox").html("Could not load quote. Check if quote.txt exists.");
    });
  });
});
