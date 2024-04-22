function showSpecies(speciesId) {  
    // 获取所有带有hidden类的元素  
    var hiddenElements = document.getElementsByClassName('hidden');  
    // 遍历这些元素并隐藏它们  
    for (var i = 0; i < hiddenElements.length; i++) {  
        hiddenElements[i].style.display = 'none';  
    }  
    // 显示被点击的树种详细信息  
    var speciesDetails = document.getElementById(speciesId);  
    speciesDetails.style.display = 'block';  
}