let my_axios = function ({ method: md, url: ul, data: obj }) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(md, ul, true)
        xhr.send(obj)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText)
            } else {
                reject()
            }
        }
    })
}

module.exports = {
    my_axios
}

