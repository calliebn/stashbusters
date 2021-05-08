async function addyarnform(event) {
  event.preventDefault();

  // Get the title, url and context/description for the post
  const company = document.querySelector('#company').value;
  const brand = document.querySelector('#brand').value;
  const colorway = document.querySelector('#colorway').value;
  const yardage = document.querySelector('#yardage').value;
  const dyeLot = document.querySelector('#dye_lot').value;
  const grams = document.querySelector('#grams').value;
  const weight = document.querySelector('#weight').value;
  const skiens = document.querySelector('#skiens').value;
  const dyeLot = document.querySelector('#dye_lot').value;
  const userId = req.session.user_id.value;

  const response = await fetch(`/api/yarn`, {
    method: "POST",
    body: JSON.stringify({
      company,
      brand,
      colorway,
      yardage,
      grams,
      weight,
      skiens,
      dyeLot,
      userId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".add-yarn-form")
  .addEventListener("submit", newFormHandler);
