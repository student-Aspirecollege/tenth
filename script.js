let btn = document.querySelector('button');
let header = document.querySelector('header');
let text = document.querySelector('.text');


const singleHexColorGenerator = () => {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let generateColor = Math.floor(Math.random() * hex.length);
        hexColor += hex[generateColor];
    }
    return hexColor;
}

const colorGenerator = () => {
    let colorPalette = [];
    for (let i = 0; i < 6; i++) { // Generate 6 colors
        colorPalette.push(singleHexColorGenerator());
    }
    return colorPalette;
}

const clicker = () => {
    let colorContainer = document.querySelector('.colors-section');
    colorContainer.innerHTML = "";

    // Array of names or any other text you want to use
    let names = ['A', 'H', 'E', 'S', 'H', 'A']; 
    
    // Generate an equal number of colors for background and text
    let backgroundPalette = colorGenerator();
    let fontPalette = colorGenerator();

    names.forEach((name, i) => {
        let nameSpan = document.createElement('span');
        nameSpan.id = `name${i+1}`;
        btn.style.backgroundColor = fontPalette[i];
        header.style.backgroundColor = fontPalette[i];
        nameSpan.style.backgroundColor = 'white'; 
        nameSpan.style.color = fontPalette[i];
        text.style.color = fontPalette[i];
         // Set text color
        nameSpan.textContent = name; // Set text content

        colorContainer.append(nameSpan);
    });

    console.log({ backgroundPalette, fontPalette });
}

btn.addEventListener('click', clicker);

document.querySelector('.text').addEventListener('click', function() {
    btn.classList.add('animate');
    
    // Hide the button after animation
    setTimeout(() => {
        btn.style.display = 'none';
    }, 500); // Matches the duration of the CSS transition
});
