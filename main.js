let data = JSON.stringify({
    "body": {
      "services": [
        {
          "name": "ВКонтакте",
          "description": "Самая популярная соцсеть и первое суперприложение в России",
          "link": "https://vk.com/",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/vk.png"
        },
        {
          "name": "My.Games",
          "description": "Игры для ПК, консолей и смартфонов, в которые играют сотни миллионов геймеров",
          "link": "https://my.games/",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/mygames.png"
        },
        {
          "name": "Сферум",
          "description": "Онлайн-платформа для обучения и образовательных коммуникаций",
          "link": "https://sferum.ru/?p=start",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/sferum.png"
        },
        {
          "name": "Юла",
          "description": "Сервис объявлений на основе геолокации и интересов",
          "link": "https://youla.ru/",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/youla.png"
        },
        {
          "name": "Самокат",
          "description": "Онлайн-ретейлер с доставкой товаров за 15 минут",
          "link": "https://samokat.ru/",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/samokat.png"
        },
        {
          "name": "Ситидрайв",
          "description": "Каршеринг-сервис в крупнейших российских городах",
          "link": "https://citydrive.ru/",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/citydrive.png"
        },
        {
          "name": "Облако",
          "description": "Сервис для хранения файлов и совместной работы с ними",
          "link": "https://cloud.mail.ru/home/",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/cloud.png"
        },
        {
          "name": "Все аптеки",
          "description": "Онлайн-сервис для поиска и щзаказа лекарств по лучшей цене",
          "link": "https://vseapteki.ru/",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/apteki.png"
        },
        {
          "name": "Календарь",
          "description": "Планирование дня и эффективное управление временем",
          "link": "https://calendar.mail.ru/",
          "icon_url": "https://publicstorage.hb.bizmrg.com/sirius/calendar.png"
        }
      ]
    },
    "status": 200
  })

  let res = JSON.parse(data)
  let mainDiv = document.createElement('div');
  mainDiv.className="scroll-table"
    document.body.append(mainDiv);
    const ddd = document.querySelector('.scroll-table');
    console.log(ddd);
    let dd = document.createElement('div');
    dd.className='scroll-table-body'
    ddd.appendChild(dd)
    const dddd = document.querySelector('.scroll-table-body');
    let tt = document.createElement('table');
    mainDiv.className="table table-dark table-sm"
    console.log(Object.keys(res));
    res.body.services.forEach(el => {
        console.log(el.link);
        tt.innerHTML+=`<tbody>
        <tr 
            onclick="location.href='${el.link}'"
            style="cursor:pointer"
        >
            <td>
                <img src="${el.icon_url}">
            </td>
            <td>
                <p class="p-head">${el.name}</p>
                <p>${el.description}</p>
            </td>
            </tr>
            </tbody>`
        });
        dddd.appendChild(tt)