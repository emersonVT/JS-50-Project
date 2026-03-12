##  Demo

Below is a short demonstration of the **Expanding Cards** interaction.

When a card is clicked:

* All other cards collapse
* The selected card expands by adding the `active` class

*(See the video below for the interaction.)*

Uploading Expanding Cards.mp4…

## How It Works

* All panels are selected using `querySelectorAll`
* A `forEach` loop attaches a `click` event listener to each panel
* When a panel is clicked:

  * A helper function removes the `active` class from all panels
  * The clicked panel receives the `active` class
* This ensures that **only one card is expanded at a time**
