

function populate(){
    let codeArr = [];
    try{
        let schoolNames = document.getElementById('in').value;
        let schoolArr = schoolNames.split('\n');
        schoolArr.forEach(item => {
            let tempNum = 0;
            let tempArr = item.split(' ');
            let realArr = tempArr.map(n => n.replace(/\W/g, ''));
            let finalArr = realArr.filter(f => f !== '')
            if(finalArr.length > 3) finalArr.length = 3;
            let letterArr = finalArr.map(x => x.substr(0, 1).toUpperCase());
            let lenArr = finalArr.map(f => f.length);
            let tempCode = '7' + letterArr.join('') + lenArr.join('');
            codeArr.push(tempCode);
        });
    } finally {
        document.getElementById('out').value = codeArr.join('\n');
    }
    return null;
}

function copyToClip(){
    let codes = document.getElementById('out');
    codes.select();
    document.execCommand('copy')
    let cButton = document.getElementById('copyButton');
    cButton.value = "Copied to clipboard!";
    setTimeout(function(){
        cButton.value = 'Click to copy codes to clipboard';
    }, 1500)
    
    return null;
}

