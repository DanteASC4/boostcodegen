

function populate(){
    let codeArr = [];
    try{
        let startingNum = document.getElementById('startNum').value;
        let schoolNames = document.getElementById('in').value;
        let schoolArr = schoolNames.split('\n');
        schoolArr.forEach(item => {
            let tempStr = '';
            let tempArr = item.split(' ');
            tempArr.forEach(subItem => tempStr += subItem.substr(0, 1).toUpperCase());
            tempStr += startingNum;
            startingNum++;
            codeArr.push(tempStr);
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

