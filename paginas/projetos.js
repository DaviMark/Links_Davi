
          // Começo do Loading
          window.addEventListener('load', function() {
            const overlay = document.querySelector('.overlay');
            overlay.classList.add('active');
          
            // Remove the spinner after a short delay (e.g., 3 seconds)
            setTimeout(function() {
                overlay.classList.remove('active');
                setTimeout(function() {
                    document.body.style.overflow = 'auto'; // Restore scrolling
                }, 1000); // Allow time for the opacity transition to complete
            }, 1000); // 3000 milliseconds = 3 seconds
          });

          function toggleText() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");
        
            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Ver mais";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Ver menos";
                moreText.style.display = "inline";
            }
        }
          