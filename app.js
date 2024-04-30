const text = "A ship in harbor is safe, but that is not what ship are build for."
const speed = 100 // typing speed in mille second

const typeWriterText = document.querySelector("#typeWriterText")

let i = 0

function writeText() {
    /**
     * check all the characters from the text have been displayed
     */

    if (i < text.length) {
        // Add one character from the `text` to the `typeWriterText`
        typeWriterText.textContent += text.charAt(i)

        i++ // moves to the next character
        setTimeout(writeText, speed)
    }
}

writeText()
