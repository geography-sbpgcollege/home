function navigateWithLoader(targetPage) {
  sessionStorage.setItem("nextPage", targetPage);
  window.location.href = "loader.html";
}
