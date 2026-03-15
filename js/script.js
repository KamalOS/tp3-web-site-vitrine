document.addEventListener("DOMContentLoaded", () => {
    // Interactive gallery click effect
    const galleryImages = document.querySelectorAll(".gallery-grid img")
    galleryImages.forEach((img) => {
        img.addEventListener("click", () => {
            img.style.transform = "scale(1.1) rotate(2deg)"
            setTimeout(() => {
                img.style.transform = ""
            }, 300)
        })
    })
})
