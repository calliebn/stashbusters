async function newFormHandler(event) {
  event.preventDefault();

  // Get the title, url and context/description for the post
  const company = document.querySelector('#company').value;
  const brand = document.querySelector('#brand').value;
  const colorway = document.querySelector('#colorway').value;
  const yardage = document.querySelector('#yardage').value;
  const grams = document.querySelector('#grams').value;
  const weight = document.querySelector('#weight').value;
  const skeins = document.querySelector('#skeins').value;
  const dyeLot = document.querySelector('#dye_lot').value;
  // const userId = session.user_id.value;

  const response = await fetch(`/api/yarn`, {
    method: "POST",
    body: JSON.stringify({
      company,
      brand,
      colorway,
      yardage,
      grams,
      weight,
      skeins,
      dyeLot,
      // userId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/yarn");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".add-yarn-form")
  .addEventListener("submit", newFormHandler);
