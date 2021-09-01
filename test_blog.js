const btn = document.getElementById("submitButton");
btn.addEventListener("click", function(){
    const title = document.getElementById("title");
    const content = document.getElementById("content");

    if(title.value === ""){
        alert("You need to enter a title.");
    }
    else if(content.value === ""){
        alert("You need to enter some content.")
    }
    else{
        let articleList = document.getElementById("articleList");
        articleList.innerHTML += `
        <div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>
        `;
        title.value = "";
        content.value = "";
    }
})

