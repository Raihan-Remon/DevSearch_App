// Get Serch Form and page links
let searchForm = document.getElementById("searchForm");
let pageLinks = document.getElementsByClassName("page-link");

//Ensure Search Form exists
if (searchForm) {
  for (let i = 0; pageLinks.length > i; i++) {
    pageLinks[i].addEventListener("click", function (e) {
      e.preventDefault();

      //Get Data Attribute
      let page = this.dataset.page;

      //Add Hidden search input to form
      searchForm.innerHTML += `<input value=${page} name="page" hidden />`;

      //Submit Form
      searchForm.submit();
    });
  }
}
