module.exports = {
    url: "http://elec.chungbuk.ac.kr/bbs/bbs.php?db=notice",
    site_id: 130301,
    getData: function getData() {
        var list = document.querySelectorAll('#subContent > table:nth-child(7) > tbody > tr')
        let i = 4;
        let data = []
        while (i < list.length) {
            let td = list[i].querySelectorAll('td')
            data.push({
                site: "전자공학부",
                category: "공지사항",
                site_id:130301,
                title: td[2].innerText.trim(),
                url: td[2].querySelector('a').href.trim(),
                date: td[6].innerText.trim()
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
        return document.querySelector('#articles').outerHTML
    }
}