import React from 'react'
import { motion } from 'framer-motion'
import pencil from '../assets/pencil.png'
import triangle from '../assets/triangle.png'


const V4 = () => {
  // Data for the team members
 const teamMembers = [
    { name: 'sudy', imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAVEBAVECAbEBUVDRsQEA4WIB0iIiAdHx8kKDQsJCYxJx8fLTItMSsuMDAwIys2ODMtNzQuLisBCgoKDQ0OFRAQFSsZFRktMjcrNzcrLTc3LTAtLSstKzcuLjcrLTctLS0tKysrLSs3KystKysrNysrKysrKysrK//AABEIARgArQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEcQAAIBAgQDBQMIBggFBQAAAAECAwARBAUSITFBUQYTImFxMoGRFCNCUnKhscEHYtHh4vAVFiQzZJKjpENEc4OiU2OChJP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQACAgICAgMBAQAAAAAAAAAAAQIRAxIhMUFRBBMiFGH/2gAMAwEAAhEDEQA/ANSqVKq0qrUirUlCKtPC0oFPAoAQLS2pwFdQA21JanUhoAbamkU80hoAZalpbV1qAG2rrU61LagQzTSaaktS0ARFKaUqa1dppgVylRslWytMZaBFB46rtHRF0qB0pgXlFPApAKcKkoUU4U0U4UALXVwrqBCV1qWkoAbakNPtTTQA21LXAUtqBDaWlrqAEpa6lpgJS11dQB1qaRTqQ0AQutQMtWmFQsKYE4pRTAacDUlDhThTQacKAHV1JS0COpKWuoEJSWpTQztDnkGBhMszfYUHxyHoKACNqW1eJ5p23mxMgdyVA9iNHKIg8yNyfOkg7aYhWOiVgOHtkj13NA6PbK6vMMv7fSk+Ni2+/hAHpXoWU5nHiY1kjPEbi+6npTCi7XV1dQI6lrq6mAlNNONMNACMaiY09jURoAeGpwasEM4xNL/TeI6VnsXqb4NTg1ef/wBP4jpXHtJiB9Giwo9BDUuqvOH7WTj6NQ/1znuBp4mnsGp6bqrtVYvHZ1LGivxuN6Gr2rmIuBSUxuFG9zLMEw8TzSEBVW56nyHnXgmd4vEZhiXe7uC3gDn2F6W4AUZ7XZ/LidEB2UNqI6nlRHIcGsajbe2/nRKVKwjC3QDwXY6Rhcvv5CrknYV7Ao5vbpW5wS7UWw0V7betYfbKzpWGNHk8eQ4mM2I1W9xolluMeBtXFkbw3U3U9D5V6th8pRzcjes7+kTsqTAcTEdLpbWoG0gvx9160hNvsyyQS6C3Z7ORiY9RAVx7QB++iuqvL+zM80YZhq4Wtyo4c1xHStNjHU2mqu1edYk5tiOlMbOMR0o2DU25emlx1rCPneI6VWl7Q4gcvvp7BqegNIOtRGQda85l7TYkcvvqq/anFeXxo2DU1Hc00wVPM9gSN6ETZvItvmyd+lTaRVNl1oKieCq0mZvt82d/KunzBgL6CfdRsg1ZXxUNDHTxD1onHiDKCdBHqKrPA2oeE8elMQczhLwL9mheDg8FG81X5lfs0OjOmEta9hes4mkjH5hGWxbKOIIA9bUZjx4jOlUaUjjpGw99VcHh2bFTSMLWNx7xtVybDTXtGq2tsGk0BzRJpjimgvk3aAMwRo2Q8r1ssNKoUuT4QN68snMiMtlCvfcK+pa9CDtHgQ2nUx487bVlNV0bQla5CeB7VYIsV70I3DxC1FM/mDYNyLMrLsQbhga8xyyZJZHEsBsN9YhBUfmfdWyw8ITAzRqSUBBQfV33tVR4ZEuVYFyXC/Nk24nar5w9SZUloYx+rVorW9HPYNbD1BJh6LMlQSJTpCsCzwULxUdaKeM9KEYyBuSn4UgAGIWqLrRmfCSH6B+FUnwMl/YPwpFBqXESBtN9r1dEbWHD4U14byD1o2cPsNuVRFWipOmBmVuVr1Ckj7g2JFEcTgje4NhTcPg7EnjVai2Bz4qReAWq39KS6gLLxoljIaESJ4h60UhWzQZsbxKT0oZKD8nNhc3+FFM2/uV+zVbDRhorHgaiPkt+DOZbJaSVSb2kG/UWFayNkKbgWtuSKxWJbuMUyMdmAN6sZxmbjRFHuNGo+d6mUG2aRmkgkyo8gCiy6tzXpeW4VThgrAEDrzrxHBnFd4rAXF72Vq3OX9ssUp0thXVByAN2HXhQ4ApmiwmVqj+BmQXvYOdNFcdhVXDyAm4YC/W+oVn8s7QpJMIxfxcARYg9KO43EgvDCGF9ep/1Aovv77VC75Lk00Ac5DpMyJZUUAKBwtbaqRkl+tRfFxKXOkkgbAni1udVmirpS4OWT5B5ll+tTDNN1q+0NRMdO3WnQrBkmLl+sPhVKfMZhzHworPDQnFpRQWU5s4nHMfCqj57iOq/5aXELVCUUhm6A+cHrWhCbD0rPI/zg9a0WoWFLH0E+yDEx+E+lVYVslEB4riqmIawrQgE42g05Adb7b0Wkku1qzGfsflMAH1t6zcuaNFHizXZv/dL9moMF/dipc3PzS/ZqDCH5sVMByMn23itJE45oRfzBv8AnVbATicKjcRGQT6G4ov2qjWZe7HtqNQ8ulY7LZe7ls11sbN+yrq0TdP/AA9N7MsjDRLhYWK8WExhL8eAsQOPWtPKoMTrhcMBIUsrfKjojNrXuBvbc15nhc2kQrp0uD8R5VqsJ2oZISGKgkbBRY2rN36NU17BuWXhxTySyGWSKOysRbvZDsDb41eyYvI7Ssb72JJ4nnQnC4BsXKUQktI/hJPsdfgKMZ7gzh0SJSQQ25H0/P31SiQ5Gk1r1HxqMkdR8awU80g+mfjTsqxMhmQFyRfrV2Z0borQle81vqXb6NEYEO+9TGM0W2Okge8LEcKFYvBSHgtaB0PWq0wbrT5EZWfLJT9CqUmUTfU++tJipHH0jQ18XJf2zSGWXntIPWjsGNVtibbbVn4zKTuoqUYrcqV3HGog/CLnHyzUYKUb3NLje6IN2saAR4k/VNS94DxW9aWzOkUdQ7w2NxQXNUBxMZ6NWoREvtHv6Ur4GI+Jksw4bX3qFjlKVov7IxjTIc6PzaAbnTyqrHJpQA7G3DnVjEysdrkD4G1UMCved4fOwreGCuzGWa+gHJLfFSAnjGPxNVc2yfvDrSwb6Q5P++ruaYcpiI35MhHvBonh4dQrHJ+ZGuP9RRj4IJY+KMLHkL70cy3KsVi5EEcTebFSqDzJNafLFCjcbE8a1mWYlQLINutZvJXg0jism7MZNHg1CizSf8R7bnyHQVQwuGTMcIhvplW/dtyI3IB8quZrjxDDK99wh/Ch36Ozpwyg8Qu/l4bitvjLa7M/k/mqMvm2UTxXLRmw4keNfiKo5Svz6etb/G4pls4PDZh16fd+FOw2W4bFRjECLu5VO5TYt5kcDW88FdHPDN7G4SPY1OUp8EOkGx1e6x+FRTzqoJJ2FZa12abX0I6VUnjobL2kXWVCk+6p4c0VzYjSfOptDplLHR8aByLvWhx/OgUg3oY0EMDIGVW8qV8OBNfkwqhk8MkalWsd9t6J4hyQpA8QNc8PzI6J8xL8WFHSnwd2ZDFfx22B4MelVkx7AG62FtzVfMoNCpJGSdPiXe/DjXdjinycOSTXAZay2utrmxtyNRyLa/3edXI9M0YI3utxVCEHU6HcgbeldaRzNsC5n4Vc8DapOzcQEYvxJvc8K7PYGMYsLgtvWb7TRlmjhBOiNRw4GTiT6jh7qh8Mpco2YyhJQquL3G31lPIihM+CbDvofn7J5OOopcj7WxoAmL1B1AAkCau8tzNudbzMcJHMlnUOP5sR0rHNjU+Ub4puPBk4mCoBer2Fm247CplyBCbLMyi2wNm/ZV+HsixG2IUf9v8AfXE8E/R2rPEyfaSdpl7kE2I8Z6Lz/ZRrshfVptYBNXry/bVfNoEDHCwfOaTeaQ/TfkPSqmFzWXDlSkYkCraYA+IG+1jy2338q7cGPVHFnybMI5he8icmNt+R5Gl7G4u+qM7dR5iqWOzaGYFl1Kb8GiNx5UOwWZWxAdAVBWz3+metq6GcyNjLiSsjE+7an4uCOSC8w8R3Ug6WFRKBKFPxqTHklxH5C350nFPhlKTXKMrnOWth2STTrjIHiC+wejedDMzxdypjWzX3rfSpHKjxObCQWVvqm/hPxrB4hCsxjfZ0Yqw6EGuHLj1fHk7MU1JchCSXUgJ423oVJxq9iZ1AsCKFvML8aTGPCNrAueNGkw7dTVCIgSC5tvR8TR/WFRBWipvkHSLvpJv1qbD30NC3EC8Z+svMVFMbS+ouKIYeISJddnQ3XyrvxxpHDklbGdlpfmzGeMbkD7PEfjVzHRfOxsv0tqC4Zu4xQvtHMLD9SQbgVo1Qs4B4xtc+hG331sjNkWMhGydB8DWax+Wb8K1GKk+cXow+/hTcVAG1W4gUyTz/ADHK7oGA5WNHuxfaTRpwuJJte0Lk7L+oT+Bq3FhdSzJzVrj0IoHmmWCxYD3VEo+jSMvZ6FNdWolisf3WFLj222S/AHqfIcaxXZjNXljMMpLSReyx4vGeF/MUW7UYlUw0GpgqksGJNgBsTWVc8mzfHBnII9QlYXID7Mdi7kbkeVvxq52ewwEU5POT8qnVkeFShBUvcW6AVNkyWw8n2zW6quDnd3yDXhF2UbGhyw6Jk2210Xc/OL50k+CLyqBx1A03ySicYkw4sLfwsbEUfnT57UfZA1fdesvnZti4/tCtLnAPycldndQqnoCdz8L1L7KXRTyoHETA/wDBhN2PJ25L7qF9vJIYMQkjp/frfUPrrsfyrQZQViw6qg+nb1qHtdki4zAuDvJC3eJbiNvEPePwFY5o2jbFKjBf0nhTfwk1E2Nwn1TQDCxhSwBuL7HrSuK5dUdOxtGyck3vThk56n41phBSTJpVm6KT91LRD3Zl4GLWUblD4P1h0/ZRDBT6HVx7DbN5VUymEMxXjqXruDVwRlg4PtcHHX9YV3w6OKfZD2nwusaF9osCpBtpI3vRnKS8jGQsCDDpI02JYc6DSzlu6Y7soKuPMfuo/kC2DNuAd7FbXtVEgvHYwLpvxViB+G9XRjF8IOxKktvy2od3omkLAFQ0WsAjcU6OT0J09N6q01ZPTplvC6Wmuu6vEb+oNU8fCAu/W33Gr8JtOigAWiPLa+xqHPVsVtzY/eppAB8ACs6MNgRZvQ7fsrSZyqth4dQBAZuIv0oRhYgdDbg3At7xRXONsOn/AFW/Koa/RoncWVnSyRjqSdvQU3DNbCsf/cNI7XWPyUn7hSYe/wAmAHNzVozKU8oBja/lRvBniVUt4BZgNiee9DOzhDa1cAlZCL6d7EVqkU6R6UbWOjzzMsS7Ykbbg++tXnWMZYYAwIFvq8duvxrHQz95jJFI3BH33/ZW8xAWeFkJA0qLE/RIsQaVp8hTXA7AaVjRj7K7r5tVnL8QQsrHgzAC/M0Ill1HuxsAQFH50/Gy3aGBOOsXtQ0NM8qzNBDNLGLkLKyj0DG1VGxA6GvUc4yCPvpbqCS5N7cb70NbIIfqD4VwO7O1VRrQlUs8JED24mw+JokBQjtTMVhAHFnHwG9aLsh9GVwsrROJBybxCtFMwa0se4Iv+0UMw6LIL241PgEMTaeMbH/KetdMVRzSI8xgS4dheJ/C/wCqeVTdjcOyPiY0lb5uTwhnLqykAgG/LfiOFWcygHdTKd1K39Lcf21S7Hzn5RJq9oxKr+ZQkX94IqmJF/GsBLfuyrWIsE1cfMVWwgbc6TcGwOnb3UUzsFWDDpUJYMARw07VRJ0ItMhPMEG/Gkzo7J1D/dvT4yNYvy4VBnjbxDzN/wDK1IYzCvsgsTsDuB/PKifaNdMIHSY2+FDcELgHnYA89gdqKdtvFBG0f0nuv+Wolwy48pgNJdgOeirmEFowpoDk8krsokXRuQBq1e/yo6G2NVF2rIaplPE4Jkk7yN9BIuejb8x760mFlcpYix032fZvShQa+nnvbh1FE8M+wB42tTAwEA/t0gC2+ds1z/PWtAJ3ZQqlbBvFpOzWOw91DZ4tGYTEjYuje4i35VZ7PlRAADwHHyoiEgxiJwg1HiBU3ZWAyzmd/wD4is/PNqu7GyDhfnW17INrgEpGm+1vfSm6Q4LkTO0Be45bGhLJRLEy3lmQ8dmH8++qjLXLONM6YS4LorOdrJPFGOQW595/dWkoB2mAUo7C6sNLW4gjcH8acewl0Cct2uORNF44ehoPhLJ9IW871pY4CLbbW610I5mRiPUpQ8wQPQ1lcocx4hG+tGVb7Smx/CtRPJYcwbbbXrN57ilEL4mNfnE3ZRzJIBPvFU+rEvRqM1lDQhvhVLD+wOgFqz2Rdp454zE59PrKfOr2IxWkoASBp33tvSTTVoGmnyGpUBBKnmL+RodmE5buwfaD/HwtUuAzBGOlnAc8ATuwqrmyeNCOpvv+q1qYifAMADYfS9eYoljWL4CLqhP3UBgnIG9wbjpvuKJYnEFcFNp2aNrMDyuLVEzSHQNw8oDof1gaKw+InyrJ/LksLMCSNxxINSyZlKVURK99V2NtIoeSK7YLHJ9I1ZAC3J3H5Gu+VCwINZRMJjnBLOsd/VzbpVrDZbIAO8ldjysdI+6sZfKgjaPxZsizHOkkxMgKFHjQBieDgm4+G9UOz8xEZ8V9zbzBPCnZvlSAM2mxt7R9v40HyNJGjUX07kX5mx5UYs+7FkwaI0KM2KlWJfZB8ZHACvU8AgjhRV2AFefZR3UK6EYAk+Inix8zWihzN9GlFMjW2tw+NbtNmCaQjS68a9jsEOr4VOwpMsy0wo8shvNJsbcFHQU5qyyNWawToC5j2hKziGIA2PiNT9qWvhla2/eKfTY0P7JZMSPlE27Mbi9GO1Ed8LLblY/A1z45NuzoyRpUZfLBqPeOLop8I+u3T3UWzAy8CwD2uxP93h16kcz5UGy3UEAvsDt5VPm2LZ41jvvLKFJ63NdsXwcclyanJl0QByLPKduoBPhHw39TSYvKo5JrlASVtIBsCPPzqbAAFYRyVrWq7HvKSOvxpDMrmP6OMI3jikkw8gHhYPrF/MHlWSmwmLRiupMQg4Sbxl/cb7V6RnuLIV1B4+EeX1j8PxoBGgNcebLo6idmHFurkYvMcqxMrK0dlPm/D0tVwwY0gAyhSBxFz5VqdK2NNNiAefPzrD+jIbfzYzPDCYgnxTE9LALU4gZiTIzNq2a7E39aLNGDSPFtytUvLN9suOKC6RQjwKodgLdOYq3ARcWFutIx6+406G16ztmlIPYWK4FztzqyYQLgVUwlgR4hYjffhUWbY8RX8QvbYA31elKmxtpdgjtHIiq2ogbVk8pMmgbd2Lnci+19rD0othbTtqxQurNdR9Qcr1oBl+izIqkEbELxFej8fC48s835GZSdIo5Flhd1ITwji7DxH0rZYaJUsOdVconRxb2XHI86JNFex+FdLZzpDsbtpHleqRq1jvbI6AD7qqNWDNkWI0CqFHAC1JPCJEdDwZSD7xSlqetZwVI0m7Z57CSoseIax9aXSGlgBOyOGI9+1XM/g7rEyD6L+Nffx++9Q5XCGlcn6oIroT4OdqmanK8SBLobbxXXpei+G+mejbVloJD3qnja5otDjAkMrnYKtyPTh8ap+yUvAFz7FAzMg9lNj5txP5D3VSSbbY0NlnJuxN2JuT5k701JjtbpvXlTltJs9aEdYpBTv+dNTEAel9/Kh+s2/CkH31BVhEYgWsOVNXFcfvobNiFS1zvb31Rmx7ngNAP+b91Og2DEmYBSE4sx2W1yb1WM8skc7hu77uwUD2rk23NB0mANxx4gnjflRzKGWVpgfYkj1W+sQb6fj+FdOCEW+TlzzmlwEMuy8OxjBdpClwdZ8JI606LBlTcFdXUpd/iavYGTu0UjYq41W/CuzBSWDqPA4uPXmPj+Nd8YRXSOGUpPyVHVgfEiP6jeiWCzRAAjroAFgCLAVSAfmLgHY86k4jdT7xVMlBdIEchozv1FG4Re1+N6yGGUodSX8xWoy6a9ieQ3qJFxIsY13c/rVUc0+R+Jqs7VibE6YhT9IfGp0lHUfGsgkpqwk56mkMKdo8sOIVGjsZE5XtrU8qzkRMLXcFeTArYii6YlupqPMcyZIybgsdkBF9zVRdEyiVcDiQG3O5FQdoMyCwrHcjvJLnY+yv7T+FU8PEVF7707+mFXwNEGKrZWDEfGrlG40zOMqdgyIsFBINj7JI9qu+UgXJNh6cKled5X1OdwLAclHQVUzABUNc/80e7Oj+mRagxAcXFyL2HK/OiuXYMPIik2B42HKhOXQ2Ea29lbtvzbf8LVpsoB1swF+Q6DrWscEErozeacnVljEdmIJN7aT1W4obiuyB30TbdGX861DynraodOo7kkUnji/BanJHn2MyKZDawc/qm96owGfDPcowF9xp3HmK9SmhFrLZV52HiNDsRlkbciffWf1au0VvapgXBY8OpF/aF/586JYbEsInRxcKLjrtz/AJ51TxOViNWZRp6eZqzlyk6+8BBKgA2vpIOwrojJnPKJPh4DILpKCOQYbna43Hlamd6ymxI9xven5Vh5IvA4spkIQg+yt9h/PKkwUSyTOrj0IG9acsydIsYeYeVGsPKBGfMWFUGypVAIkfjaw0j8qkFlFhw9b1En4NYR8jpGqq770sklVJJN6yNDRj9H/wDiv9v/ABU8dgv8T/t/4q2tZzMu0oWOR4UZu7xccTkpqViZ0icAA3uLm1x0tcVlbLooDsL/AIn/AEP4qrYn9HmtlJxWwGw+T8+vtVpMN2ghdglnV7SFlZLMndadQPn41t1BoZiO14CYh44JHSPDRyI1gA/eAkX325ffQmwpMHn9Hv8Aiv8Ab/xVRl/RZqYn5bb/AOr/AB1rj2jgEwgOpX1KrXUARSOAVQ78TccLjcb71Hg+1MMvcaElPfrqhBi0l0AW7C54DWPPjYEb1X2S9k/XFGWj/Rda/wDbeP8Ahf46jxX6KdYA+W2HP+yXv/51q8J2lVlbVDIH+UvFEioGeYoWuRvyCkm9h61Zw3aCGVkWISSllDNpiNoFLFRrvw3Vhbj4TRvIeiMrF+jbSzN8r9o8Pk3Dy9uiWC7Fd0gUYi/U9xa//lRPsxngxcSE7yCMGYovzSMeC3vxtvbkLX4injtFCUMgSQoX0xMItsQxbSAnXfrYW34b0fZL2ChFFH+qXWe//a/fT/6rdJv9L99TTdqsOoBKy30yF1EV3hERUSahytrB8xwvte7lubRz95pDIUtqDpoOlhdW9CP32pby9jpAs9les3+l++l/qqP/AFtv+l++is+JeSFXwjRPrtokY64Qp4t4T4tuAuL9aASdocR3MMllUNJIHnXAzYmAxobK4VDdQ3EEtawO540bMKQ6TsaGcM09wPZXudgevtUPx36PWkYMmMMbBtSn5PqF/TVRSftBMO9lTunw0EsaS+E659aozOh1WUASKQCGvY7ioh2knCR4hkjaGdJTh0F0kUojOupybHUqG+w0nrxo3YtUJD2LAkaRsQW1cR3VgDYcPF1Fx767D9i9Ehk+UcTw7n+KpcozvE4lZhE0LspjtKYXijQOCWvGW1GwH1gGvysabLnuK+R/Kh3CKveF5Gid0mCtpQooNwHG9yTbb2r3prJJdMThF+CzL2aJWwmt4r37q/51AeyTH/mB/wDh/FUuNzjERvhiREsc0karGdTyvrtrIcEKum+wIOq2x3FMy/Pp3OHkZEaLFK5w6KCsqFVLKGYmx1KDyXSevGls2UopELdjCf8AmP8AQ/iqJuwxP/M/7f8Aio52dx8s8TtMqJIs8iMIyWQaHK8Tx4cdvQcKLUtmFI6gc3ZmJ5XmeSQuzob2jS3dyrKo2UXF1A8Vza9iLk0ldSGLP2bjZ2kWWWN2dyWUobiQIHXdTsdC+Ytxpn9VYtDxiWUI+FSFgCm4QWV76b6hf7PlXV1AE8ORKs3fCaTUxUygrFad1UKGPguDYD2So2FRSdmYmgw2GMkndQKoUWjLPotYklbg7cV08TXV1ACns4gJZJ5kbv2ljI7smFnvrAuhuDqOzauVrU7B9nY4WRoZZYiECyAFGGJAZmu91O92bddPtHysldQB2Xdm4sOAIJZYhZQ9ivzpVrgtdeJHhJFrr6AhF7NoE7oTzCNXDQLeP+ysG1AqdNz0s2oW2pK6gBB2Xh8V3kZ3ilSRyy6pO+0a2Nltcd2oFgAOlEMHlqRPI6liXVFYEgiyAgW2866uoAjzfKVxEBw4keCM2B7nQpKj6O6kaTzFtxtw2qGTJXaIRHG4gAAhiFgRnU/RNowBbkQAd+NdXUARt2Zh1eFpEiuheFWXuZTGAELXBbYKg2YX0i96jbsnAwZHeR4SkixxF17uASXDabAHgSBcmwO1q6uoATFdl1kWVXxWILyhFkkvEHaNCxCW0adN2a/h3vY7bVPLkTMiocZiAQrKWHdKZEa3hKiPTtbYhQw611dQAjdnYyUAlmECmMiDWDCTFp0cQWFtCmwYA23G5u7Bdn44nVlklIQN8nQlTHhdfHT4b+Q1FrDYV1dQBPk+V/JhIomklDyFz3mjwsxJa2lV4k0Srq6gD//Z' },
    { name: 'shruti', imgSrc: 'data:image/jpeg;base64,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' },
    { name: 'manan', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6erEmf458vAzAqw-5IfrN4zClf0YQF28Xg&s' },
    { name: 'aadil', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuER7LQ6juguDuROGNtgYU_BU6UYCmnahvg&s' },
  ];



  return (
    <section className="min-h-screen w-full bg-gray-100 overflow-x-hidden pb-10">
      <div className="w-full flex items-center justify-between px-10 pt-10">
        <h1 className='font-mono text-4xl'>Some tings we do...</h1>
        <button className='bg-black text-white px-6 py-2 text-xl'>
          View our works
        </button>
      </div>

      <div className='w-full flex '>
        <div className='w-80 h-60 bg-[#fffb00] mt-10 ml-10'>
          <p className='pt-4 pl-4 text-3xl font-mono'> We've</p>
          <p className='pl-4 text-3xl font-mono '>got goss !</p>
          <p className='pt-4 text-sm p-3'>we got the total amount of requirements and your work done</p>
          <div className='px-3'>
            <div className='w-full h-[1px] bg-black'></div>
          </div>
          <p className='pt-4 text-sm p-3'>offering core services like digital marketing</p>
        </div>
        <div className="w-[520px] h-60 border-2 border-dotted border-gray-500 mt-10 ml-10 flex flex-col items-start p-2 space-y-2 relative">
          <div className="flex items-center space-x-4">
            <motion.img
              src={triangle}
              alt="Triangle 2"
              className="w-30 h-30 absolute top-25 -left-8 rotate-[-10deg] z-1"
              initial={{ opacity: 0, x: -50, rotate: -45 }}
              whileInView={{ opacity: 1, x: 0, rotate: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.img
              src={triangle}
              alt="Triangle 1"
              className="pl-2 absolute top-20 w-30 h-30 left-10 rotate-[20deg] z-0"
              initial={{ opacity: 0, x: 50, rotate: 45 }}
              whileInView={{ opacity: 1, x: 0, rotate: 20 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <p className='absolute right-40 top-5 w-40 h-80 font-mono font-bold'>This one's for you, our future clients, 'Cos if we didn't win any, how would we start our introduction with "Award winning agency...</p>
          </div>
        </div>
      </div>

      <div className='w-full mt-5 font-mono flex'>
        <div className='w-1/3 m-10'>
          <h1 className='text-4xl pt-10'>about us</h1>
          <p className='text-xl pt-10'>#Rambles</p>
          <motion.img
            src={pencil}
            alt=""
            className='w-60 h-50'
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          />
        </div>
        <div className=' w-1/3 m-10'>
          <p>We’re 9-years-old! A Gen-Alpha organisation powered by Millennial and Gen-Z masterminds.</p>
          <p className='mt-10'>Today, we work closely with India’s top advertisers breaking down the silos in marketing. We help our clientele achieve a unified view of their campaign, across various marketing channels and devices.</p>
        </div>
        <div className='w-1/3 m-10'>
          <p>The Friday Code was founded in July 2016, with a mission to aid growth of traditional and new age brands, build platforms, and transform organizations for the digital age.</p>
          <p className='mt-10'>Through various content solutions, we help brands to amplify their campaigns. </p>
        </div>
      </div>

      {/* START: RECREATED SECTION FROM IMAGE */}
      <div className="w-full px-5 lg:px-10 mt-10">
        <div className="border-t-4 border-b-4 border-black py-8">
            <h2 className='font-mono font-bold text-center text-lg md:text-xl mb-8'>
                the ones responsible for selling things you don't want to buy
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
                {/* Team Member Cards with Flip Animation */}
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full h-56 md:h-64 group"
                        style={{ perspective: 1000 }} // Adds depth for the 3D effect
                        initial={{ opacity: 0, rotateY: 90 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0" />
                            <div className="absolute bottom-0 left-0 w-full bg-[#fffb00] text-black text-center py-2">
                                <p className="font-mono font-bold">{member.name}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Meet the Others Card with fade-in animation */}
                <motion.div
                    className="bg-[#fffb00] w-full h-56 md:h-64 p-6 flex flex-col justify-between"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: teamMembers.length * 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div>
                        <p className="font-mono font-bold text-2xl">meet</p>
                        <p className="font-mono font-bold text-2xl">the other</p>
                        <p className="font-mono font-bold text-2xl">500</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
      {/* END: RECREATED SECTION FROM IMAGE */}

    </section>
  )
}

export default V4

