const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling


    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const label_num_width = +label_width.substring(0, label_width.length -2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - label_num_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

    console.log()


    label.innerHTML = value
})


const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}