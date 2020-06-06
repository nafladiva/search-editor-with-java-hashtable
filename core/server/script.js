const table = document.querySelector("#result")
const asc = document.querySelector("#asc");
const desc = document.querySelector("#desc");
const search = document.querySelector("#search");

window.onload = function () {
    document.getElementById('asc').click();
}

asc.addEventListener("click", res => {
    fetch(`http://localhost/search-editor-with-java-hashtable/core/data/search.php`)
        .then((response) => {
            return response.json();
        })
        .then(res => {
            res.sort(ascSort("editor"));
            table.innerHTML = result(res);
        })
    res.preventDefault()
})

desc.addEventListener("click", res => {
    fetch(`http://localhost/search-editor-with-java-hashtable/core/data/search.php`)
        .then((response) => {
            return response.json();
        })
        .then(res => {
            res.sort(descSort("editor"));
            table.innerHTML = result(res);
        })
    res.preventDefault()
})

search.addEventListener("change", res => {
    fetch(`http://localhost/search-editor-with-java-hashtable/core/data/json.php?q=${res.target.value}`)
        .then((response) => {
            return response.json();
        })
        .then(res => {
            if (res.length !== 0)
                table.innerHTML = result(res)
            else
                table.innerHTML = `<thead>
                <th scope="col"class="text-center"> No Result </th>
                </thead>`
        })
    res.preventDefault()
})

let result = datas => {
    let result = `
    <thead class="thead-color">
        <tr>
            <th scope="col">No</th> 
            <th scope="col">Nama</th>
            <th scope="col">Jumlah artikel</th> 
        </tr> 
    </thead>
    <tbody>`
    datas.forEach((data, index) => {
        result +=
            `<tr>
            <th scope = "row">${index+1}</th> 
            <td>${data.editor}</td> 
            <td>${data.freq}</td>
            </tr > `
    });
    result += `</tbody>`
    return result
}

function ascSort(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}

function descSort(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return -1;
        } else if (a[prop] < b[prop]) {
            return 1;
        }
        return 0;
    }
}