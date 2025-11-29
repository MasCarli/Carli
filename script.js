const WA = "6283125648754";

function rupiah(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function order(product, price) {
  let msg =
    `Halo Admin, saya ingin order:\n` +
    `• Produk: ${product}\n` +
    `• Harga: Rp ${rupiah(price)}\n`;

  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`);
}

document.getElementById("year").textContent = new Date().getFullYear();

// Navbar shrink saat scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 20) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});