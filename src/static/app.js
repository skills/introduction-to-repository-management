document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const messageDiv = document.getElementById("message");
  const modal = document.getElementById("registration-modal");
  const modalActivityName = document.getElementById("modal-activity-name");
  const signupForm = document.getElementById("signup-form");
  const activityInput = document.getElementById("activity");
  const closeModal = document.querySelector(".close-modal");

  // Function to fetch activities from API
  async function fetchActivities() {
    try {
      const response = await fetch("/activities");
      const activities = await response.json();

      // Clear loading message
      activitiesList.innerHTML = "";

      // Populate activities list
      Object.entries(activities).forEach(([name, details]) => {
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";

        const spotsLeft = details.max_participants - details.participants.length;
        const isFull = spotsLeft <= 0;

        activityCard.innerHTML = `
          <h4>${name}</h4>
          <p>${details.description}</p>
          <p><strong>Schedule:</strong> ${details.schedule}</p>
          <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
          <div class="participants-list">
            <h5>Current Participants:</h5>
            <ul>
              ${details.participants.map(email => `
                <li>
                  ${email}
                  <span class="delete-participant" title="Unregister participant" data-activity="${name}" data-email="${email}">
                    ✖
                  </span>
                </li>
              `).join("")}
            </ul>
          </div>
          <div class="activity-card-actions">
            <button class="register-button" data-activity="${name}" ${isFull ? 'disabled' : ''}>
              ${isFull ? 'Activity Full' : 'Register Student'}
            </button>
          </div>
        `;

        // Add click handlers for delete buttons
        const deleteButtons = activityCard.querySelectorAll(".delete-participant");
        deleteButtons.forEach(button => {
          button.addEventListener("click", handleUnregister);
        });

        // Add click handler for register button
        const registerButton = activityCard.querySelector(".register-button");
        if (!isFull) {
          registerButton.addEventListener("click", () => {
            openRegistrationModal(name);
          });
        }

        activitiesList.appendChild(activityCard);
      });
    } catch (error) {
      activitiesList.innerHTML = "<p>Failed to load activities. Please try again later.</p>";
      console.error("Error fetching activities:", error);
    }
  }

  // Open registration modal
  function openRegistrationModal(activityName) {
    modalActivityName.textContent = activityName;
    activityInput.value = activityName;
    modal.classList.remove("hidden");
  }

  // Close registration modal
  function closeRegistrationModal() {
    modal.classList.add("hidden");
    signupForm.reset();
  }

  // Event listener for close button
  closeModal.addEventListener("click", closeRegistrationModal);

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeRegistrationModal();
    }
  });

  // Handle unregistration
  async function handleUnregister(event) {
    const activity = event.target.dataset.activity;
    const email = event.target.dataset.email;

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(activity)}/unregister?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (response.ok) {
        showMessage(result.message, "success");
        // Refresh the activities list
        fetchActivities();
      } else {
        showMessage(result.detail || "An error occurred", "error");
      }
    } catch (error) {
      showMessage("Failed to unregister. Please try again.", "error");
      console.error("Error unregistering:", error);
    }
  }

  // Show message function
  function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.classList.remove("hidden");

    // Hide message after 5 seconds
    setTimeout(() => {
      messageDiv.classList.add("hidden");
    }, 5000);
  }

  // Handle form submission
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const activity = activityInput.value;

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(activity)}/signup?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (response.ok) {
        showMessage(result.message, "success");
        closeRegistrationModal();
        // Refresh the activities list after successful signup
        fetchActivities();
      } else {
        showMessage(result.detail || "An error occurred", "error");
      }
    } catch (error) {
      showMessage("Failed to sign up. Please try again.", "error");
      console.error("Error signing up:", error);
    }
  });

  // Initialize app
  fetchActivities();
});
