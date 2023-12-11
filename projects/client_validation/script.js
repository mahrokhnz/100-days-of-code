const email = document.getElementById("email");
const inputs = document.getElementsByTagName('input')

console.log(Array.isArray(inputs))


inputs?.map((input) => {
    console.log(input)
    // input.addEventListener("input", () => {
    //     console.log(input.type)
    // })
})