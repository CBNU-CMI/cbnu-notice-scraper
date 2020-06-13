module.exports = {
    url: "http://food.cbnu.ac.kr/?pg_idx=240",
    site_id: 30701,
    getData: function getData() {
        var list = document.querySelectorAll('#rows')
        let i = 0;
        let data = []
        while (i < list.length) {
            let div = list[i].querySelectorAll('td')
            data.push({
                site: "식품생명공학과",
                category: "공지사항",
                site_id: 30701,
                title: div[1].querySelector('a').innerText.trim().replace('new', ''),
                url: div[1].querySelector('a').href.trim(),
                date: div[2].innerText.trim(),
            })
            i++
        }
        return data
    },
    getContentsHtml: function getContentsHtml() {
        let IMG = document.querySelectorAll('img')
        for (img of IMG) {
            img.src = img.src
        }
        return document.querySelector('.rd_body').outerHTML
    },
}