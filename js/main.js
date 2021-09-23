/*****************Declaraciones*************************/

/*Declaraciones header*/
const imageEditorPanel = document.getElementById('image-editor-panel');
const textEditorPanel = document.getElementById('text-editor-panel');
const asideContainer = document.getElementById('aside-panel-container');
const imgButton = document.getElementById('image-button');
const memeContainer = document.getElementById('meme-container');
const downloadButton = document.getElementById('button-download');
const textButton = document.getElementById('text-button');
const lightButton = document.getElementById('light-button');
const darkButton = document.getElementById('dark-button');

/*Declaraciones Aside-imagen*/
const asideButton = document.getElementById('aside-button');
const memeImage = document.getElementById('meme-image');
const urlImage = document.getElementById('url');
const backColorImg = document.getElementById('input-back-color');
const blendBackColor = document.getElementById('blend-back-color');
// ojo con la mayuscula aca. Las variables que empiezan con mayuscula significan algo muy especifico: 
// una clase o un componente, que veremos mas adelante
const SelectBackColor = document.getElementById('select-back-color');
const brightnessFilter = document.getElementById('brightness');
const opacityFilter = document.getElementById('opacity');
const contrastFilter = document.getElementById('contrast');
const blurFilter = document.getElementById('blur');
const grayscaleFilter = document.getElementById('grayscale');
const sepiaFilter = document.getElementById('sepia');
const hueFilter = document.getElementById('hue');
const saturateFilter = document.getElementById('saturate');
const invertFilter = document.getElementById('invert');
const resetButton = document.getElementById('reset-button');

/*Declaraciones Aside-texto*/
const inputTopText = document.getElementById('top-aside-text');
const inputBottomText = document.getElementById('bottom-aside-text');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const withoutTopText = document.getElementById('without-top-text');
const withoutBottomText = document.getElementById('without-bottom-text');
const fontType = document.getElementById('font-type');
const fontSize = document.getElementById('font-size');
const textAlignLetf = document.getElementById('button-text-left');  
const textAlignCenter = document.getElementById('button-text-center');  
const textAlignRight = document.getElementById('button-text-rigth');
const fontColor = document.getElementById('font-color');
const fontBackgroundColor = document.getElementById('font-back');
const withoutBackColor = document.getElementById('without-back-color');
const textFontColor = document.getElementById('font-color-text');
const textBackColor = document.getElementById('font-back-text');
const withoutBack = document.getElementById('without-back-color');
const outlineNone = document.getElementById('no-outline-text');
const lightOutline = document.getElementById('light-outline-text');
const darkOutline = document.getElementById('dark-outline-text');
const fontSpacing = document.getElementById('font-spacing');
const lineSpacing = document.getElementById('line-height');

/********************Inicialización********************/

/*Inicialización header*/
//Botón imagen-header
// Ojo la sintaxis, deja espacios en tus funciones: () => {
imgButton.addEventListener('click', ()=>{
    asideContainer.style.display = 'block';
    imageEditorPanel.classList.remove('display-none');
    textEditorPanel.classList.add('display-none');
});

//Botón text-header
textButton.addEventListener('click', ()=>{
    asideContainer.style.display = 'block';
    textEditorPanel.classList.remove('display-none');
    imageEditorPanel.classList.add('display-none');
});

//Cambio modo claro/ modo oscuro
lightButton.addEventListener('click', ()=>{
    lightButton.classList.add('display-none');
    darkButton.classList.remove('display-none');
    document.body.classList.add('dark-mode');
});

darkButton.addEventListener('click', ()=>{
    lightButton.classList.remove('display-none');
    darkButton.classList.add('display-none');
    document.body.classList.remove('dark-mode');
});

/*************************************************/

/***Inicialización contenedor principal/ Edition section***/

//Botón de descarga
downloadButton.addEventListener('click', ()=>{
    domtoimage.toBlob(memeContainer)
    .then(function (blob) {
        saveAs(blob, 'mi-meme.png');
    });
});

/*************************************************/

/***Inicialización aside- panel imagen***/

// Boton cerrar barra lateral

asideButton.addEventListener('click', ()=>{
    asideContainer.style.display ='none';
});

//Imagen URL

urlImage.addEventListener('keyup', (e)=>{
    // esto no hace nada aqui! lo usamos para prevenir el envio del form, pero vos no tenes ninguno
    e.preventDefault();
    const valueUrl = urlImage.value;
    memeImage.style.backgroundImage = `url("${valueUrl}")`;
    memeImage.style.backgroundPosition = 'center';
});

//Fondo 

SelectBackColor.addEventListener('change',()=>{  
    memeImage.style.backgroundBlendMode = SelectBackColor.value;
});

backColorImg.addEventListener('input', ()=>{
    const valueImageBack = backColorImg.value;
    memeImage.style.backgroundColor = valueImageBack;
    backColorImg.innerHTML = valueImageBack.toUpperCase();
});

// Filtros de la imágen

const filtrosImagen = () =>{
    // Cuando es muy largo, deja saltos de linea:
    // memeImage.style.filter = `
    //     brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) 
    //     contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) 
    //     grayscale(${grayscaleFilter.value}%) sepia(${sepiaFilter.value}%)
    //     hue-rotate(${hueFilter.value}deg) saturate(${saturateFilter.value}%) 
    //     invert(${invertFilter.value})
    //     `;
    memeImage.style.filter = `brightness(${brightnessFilter.value}) opacity(${opacityFilter.value}) contrast(${contrastFilter.value}%) blur(${blurFilter.value}px) grayscale(${grayscaleFilter.value}%) sepia(${sepiaFilter.value}%) hue-rotate(${hueFilter.value}deg) saturate(${saturateFilter.value}%) invert(${invertFilter.value})`;
};

brightnessFilter.addEventListener('change', filtrosImagen);
opacityFilter.addEventListener('change', filtrosImagen);
contrastFilter.addEventListener('change', filtrosImagen);
blurFilter.addEventListener('change', filtrosImagen);
grayscaleFilter.addEventListener('change', filtrosImagen);
sepiaFilter.addEventListener('change', filtrosImagen);
hueFilter.addEventListener('change', filtrosImagen);
saturateFilter.addEventListener('change', filtrosImagen);
invertFilter.addEventListener('change', filtrosImagen);

//Reestablecer Filtros

resetButton.addEventListener('click', ()=>{
    brightnessFilter.value = '1';
    opacityFilter.value= '1';
    contrastFilter.value= '100';
    blurFilter.value= '0';
    grayscaleFilter.value = '0';
    sepiaFilter.value = '0';
    hueFilter.value= '0';
    saturateFilter.value = '100';
    invertFilter.value = '0';
    filtrosImagen();
});

/*********************************************************/

/***Inicialización aside- panel texto***/

//Texto superior e inferior del meme
//Top text input
inputTopText.addEventListener('keyup', () => {
    const changedTopText = inputTopText.value;
    topText.innerHTML = changedTopText;
});

//Bottom text input
inputBottomText.addEventListener('keyup', () => {
    const changedBottomText = inputBottomText.value;
    bottomText.innerHTML = changedBottomText;
});

//checkbox sin texto superior
withoutTopText.addEventListener('change',()=>{
    // ojo con los espacios
    // if ()
    // else {
    if(withoutTopText.checked){
        topText.classList.add('display-none');
    } else{
        topText.classList.remove('display-none');
    }
});

//checkbox sin texto inferior
withoutBottomText.addEventListener('change',()=>{
    if(withoutBottomText.checked){
        bottomText.classList.add('display-none');
    } else{
        bottomText.classList.remove('display-none');
    }
});

//Tipo de fuente del texto meme

fontType.addEventListener('change',()=>{
    // no es necesaria la interpolacion aca!
    // topText.style.fontFamily = fontType.value;
    // bottomText.style.fontFamily = fontType.value;
    topText.style.fontFamily = `${fontType.value}`;
    bottomText.style.fontFamily = `${fontType.value}`;
});

//Tamaño de fuente del texto meme

const fontSizeImput = () =>{
    topText.style.fontSize = `${fontSize.value}px`;
    bottomText.style.fontSize = `${fontSize.value}px`;
}
fontSize.addEventListener('input', fontSizeImput);

//Alineación del texto meme

textAlignLetf.addEventListener('click', ()=>{
    topText.style.textAlign = 'left';
    bottomText.style.textAlign= 'left';
});

textAlignCenter.addEventListener('click', ()=>{
    topText.style.textAlign = 'center';
    bottomText.style.textAlign= 'center';
});

textAlignRight.addEventListener('click', ()=>{
    topText.style.textAlign = 'right';
    bottomText.style.textAlign= 'right';
});

//Color del texto y color del fondo del texto

fontColor.addEventListener('input',()=>{
    const selectedColor = fontColor.value;
    topText.style.color = selectedColor;
    bottomText.style.color = selectedColor;
    textFontColor.innerHTML = selectedColor.toUpperCase();
});

fontBackgroundColor.addEventListener('input',()=>{
    if(!withoutBackColor.checked){
        const selectedBackColor = fontBackgroundColor.value;
        topText.style.backgroundColor = selectedBackColor;
        bottomText.style.backgroundColor = selectedBackColor;
        textBackColor.innerHTML = selectedBackColor.toUpperCase();
    }
});

//Fondo transparente

withoutBack.addEventListener('change',()=>{
    if(withoutBack.checked){
        topText.style.backgroundColor = 'transparent';
        topText.style.position = 'absolute';
        topText.style.top = '0';
        bottomText.style.backgroundColor = 'transparent';
        bottomText.style.position = 'absolute';
        bottomText.style.bottom = '0';

    }else{
        // No es necesaria la interpolacion aca
        topText.style.backgroundColor = `${fontBackgroundColor.value}`;
        topText.style.position = 'static';
        bottomText.style.backgroundColor = `${fontBackgroundColor.value}`;
        bottomText.style.position = 'static';
    }
});

//Contorno del texto

outlineNone.addEventListener("click", () => {
    topText.style.textShadow = "none";
    bottomText.style.textShadow = "none";
  });
  
  lightOutline.addEventListener("click", () => {
    topText.style.textShadow =
      "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
    bottomText.style.textShadow =
      "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
  });
  
  darkOutline.addEventListener("click", () => {
    topText.style.textShadow =
      "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
    bottomText.style.textShadow =
      "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
  });

// Espaciado del texto

const spacing = () =>{
    topText.style.padding = `${fontSpacing.value}px 40px`;
    bottomText.style.padding = `${fontSpacing.value}px 40px`;
}
fontSpacing.addEventListener('input', spacing);

// Interlineado del texto

lineSpacing.addEventListener('change', ()=>{
    // No es necesaria la interpolacion aca
    topText.style.lineHeight = `${lineSpacing.value}`;
    bottomText.style.lineHeight = `${lineSpacing.value}`;
});