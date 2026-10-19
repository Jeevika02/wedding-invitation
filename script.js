// PERSONALISE YOUR INVITATION HERE
// Both events share the same venue. Replace all sample values before publishing.
const invitation = {
  bride: "Gopika R",
  groom: "Jayanth S S",
  receptionDate: "Saturday, 12 December 2026",
  receptionTime: "7 pm Onwards",
  weddingDate: "Sunday, 13 December 2026",
  weddingTime: "7:30 AM – 09:00 AM",
  venue: "Baby Mahal",
  address: "Vellore, Tamil Nadu",
  maps: "https://maps.app.goo.gl/A2MaNzZGmi2DFZ8X8?g_st=ic"
};

const text = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};
text("heroGroom", invitation.groom);
text("heroBride", invitation.bride);
text("closingGroom", invitation.groom);
text("closingBride", invitation.bride);
text("receptionDate", invitation.receptionDate);
text("receptionTime", invitation.receptionTime);
text("weddingDate", invitation.weddingDate);
text("weddingTime", invitation.weddingTime);
text("venueReception", invitation.venue);
text("venueWedding", invitation.venue);
text("addressReception", invitation.address);
text("addressWedding", invitation.address);
document.getElementById("receptionMap").href = invitation.maps;
document.getElementById("weddingMap").href = invitation.maps;

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("navLinks");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
}
document.querySelectorAll("[data-image]").forEach(button => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.image;
    lightbox.hidden = false;
  });
});
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});
