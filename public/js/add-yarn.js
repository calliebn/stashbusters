async function newFormHandler(event) {
  event.preventDefault();

  // Get the title, url and context/description for the post
  const addYarn = document.querySelector('input[id="id"]').value;
  const company = document.querySelector('input[id="company"]').value;
  const brand = document.querySelector('input[id="brand"]').value;

  const colorway = document.querySelector('input[id="colorway"]').value;
  const grams = document.querySelector('input[id="grams"]').value;
  const weight = document.querySelector('input[id="weight"]').value;
  const skiens = document.querySelector('input[id="skiens"]').value;
  const dyeLot = document.querySelector('input[id="dye_lot"]').value;
  const userId = document.querySelector('input[id="user_id"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      addYarn,
      company,
      brand,
      colorway,
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
    document.location.replace("/homepage");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
