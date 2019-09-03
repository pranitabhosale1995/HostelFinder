export function stopEvent(e) {
  try {
    e.preventDefault();
  } catch (error) {}
}

export function isOnline() {
  return navigator.onLine;
}

export function goBack() {
  try {
    history.go(-1);
  } catch (error) {
    console.log(error);
  }
  try {
    navigator.app.backHistory();
  } catch (error) {}
}


/*
 * ________________________________________FORM
 */

export function validateForm(form) {
  let firstInvalid = false;

  for (var el, i = 0;
    (el = form.elements[i]), i < form.elements.length; i++) {
    if (el.checkValidity()) {
      el.removeAttribute("aria-invalid");
    } else {
      if (!firstInvalid) {
        // announce error message
        if (el.nextElementSibling) {
          //this.fire('announce', el.nextElementSibling.getAttribute('error-message'));
        }
        if (el.scrollIntoViewIfNeeded) {
          // safari, chrome
          el.scrollIntoViewIfNeeded();
        } else {
          // firefox, edge, ie
          el.scrollIntoView(false);
        }
        el.focus();
        firstInvalid = true;
      }
      el.setAttribute("aria-invalid", "true"); 
    }
  }
  return !firstInvalid;
}

export function getSavedForm(form) {
  let itemObj = {};

  for (let el, i = 0;
    (el = form.elements[i]), i < form.elements.length; i++) {
    if (el.type == "checkbox") {
      if (el.checked) {
        let chkArr = itemObj[el.name];
        if (chkArr) {
          itemObj[el.name].push(el.value);
        } else {
          itemObj[el.name] = [];
          itemObj[el.name].push(el.value);
        }
      }
    } else if (el.type == "radio") {
      if (el.checked) {
        itemObj[el.name] = el.value;
      }
    } else {
      if (el.name) {
        itemObj[el.name] = el.value ? el.value : null;
      }
    }
  }
  return itemObj;
}

export function resetForm(form) {
  if (form) {
    for (
      let el, i = 0;
      (el = form.elements[i]), i < form.elements.length; i++
    ) {
      el.removeAttribute("aria-invalid");
    }
    form.reset();
  }
}