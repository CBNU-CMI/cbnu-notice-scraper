## CBNU Notice Watcher

**CBNU Notice Watcher** walks through the subscribed notice websites every 1 minutes and checks whether there are any new notices or not.

### Example

Here is an example for the notice of CBNU CS(소프트웨어학과).

```ts
module.exports = {
    url: "https://software.cbnu.ac.kr/bbs/bbs.php?db=notice&pgID=ID12415888101",
    site_id: 130101,
    getData: function getData() {
        var list = document.querySelectorAll('#content > table:nth-child(8) > tbody > tr')
        let i = 3;
        let data = []
        while (i < list.length) {
            let td = list[i].querySelectorAll('td')
            data.push({
                site: "소프트웨어학과",
                category: "공지사항",
                site_id: 130101,
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
        return document.querySelector('#content > table > tbody > tr:nth-child(8)').outerHTML
    }
}
```

#### `site: string`

It is a site name that will be displayed on the users.

#### `category: string`

It is a specific site name that will be displayed on the users.

#### `sited_id: number`

It is a unique key string indicating the notice target. 

#### `title: string`

It it a notice title.

#### `url: string`

The URL where the notice page resides.

#### `date: Date`

The date when the notice be posted.

### Developer Guides

1. Create a file with the name of the department. 
2. Inside the source file, writing code with **javascript**.
3. If you're done, request PR.

> If you don't know how to do it, refer to other existing files.
