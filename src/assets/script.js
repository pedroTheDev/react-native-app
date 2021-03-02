//O sistema só poderá exibir planos que tenham schedule.startDate válidos (menor que a data atual).
//O sistema só poderá exibir 1 única vez planos que tenham os mesmos : name, localidade dando preferência quem possuir o schedule.startDate mais recente.
//Note que o campo localidade possui uma hierarquia (PAÍS -> ESTADO -> CIDADE). Esta hierarquia deverá ser respeitada, de maneira que a cidade terá maior prioridade que estado e  país. O sistema só poderá exibir 1 única vez planos que tenham os mesmos : name  dando preferência a hierarquia de localidades.

const data = {  
      "Aparelho" : {
        "name": "Samsung Galaxy S8" 
      },

      "plans":[  
        {  
            "id":1,
            "type":"pos",
            "name":"Família 50GB",
            "phonePrice":2899,
            "phonePriceOnPlan":2229,
            "installments":12,
            "monthly_fee":499,
            "schedule":{  
              "startDate":"2019-06-23 00:00"
            },
            "localidade": {
              "nome": "BRASIL",
              "prioridade" : 1
            }
        },
        {  
            "id":2,
            "type":"pos",
            "name":"Família 50GB",
            "phonePrice":2899,
            "phonePriceOnPlan":2229,
            "installments":12,
            "monthly_fee":499,
            "schedule":{  
              "startDate":"2019-05-23 00:00"
            },
            "localidade": {
              "nome": "MINAS GERAIS",
              "prioridade" : 2
            }
        },
        {  
            "id":3,
            "type":"pos",
            "name":"Família 50GB",
            "phonePrice":2899,
            "phonePriceOnPlan":2229,
            "installments":12,
            "monthly_fee":499,
            "schedule":{  
              "startDate":"2019-05-23 00:00"
            },
            "localidade": {
              "nome": "BELO HORIZONTE",
              "prioridade" : 3
            }
        }, 
        {  
            "id":4,
            "type":"controle",
            "name":"Controle 2GB",
            "phonePrice":2799,
            "phonePriceOnPlan":2129,
            "installments":12,
            "monthly_fee":39.99,
            "schedule":{  
              "startDate":"2022-01-01 00:00"
            },
            "localidade": {
              "nome": "MINAS GERAIS",
              "prioridade" : 2
            }
        },
        {  
            "id":5,
            "type":"controle",
            "name":"Controle 2GB",
            "phonePrice":2899,
            "phonePriceOnPlan":2229,
            "installments":12,
            "monthly_fee":49.99,
            "schedule":{  
              "startDate":"2019-01-01 00:00"
            },
            "localidade": {
              "nome": "MINAS GERAIS",
              "prioridade" : 2
            }
        },
        {  
            "id":6,
            "type":"controle",
            "name":"Controle 2GB",
            "phonePrice":2899,
            "phonePriceOnPlan":2229,
            "installments":12,
            "monthly_fee":44,
            "schedule":{  
              "startDate":"2019-05-23 00:00"
            },
            "localidade": {
              "nome": "BELO HORIZONTE",
              "prioridade" : 3
            }
        }
      ]
    }

    const today = new Date()
    const obj={};

    function startDate(date){
      return new Date(date) < today;
    }

    const newData = data.plans.filter((element) => startDate(element.schedule.startDate))
                              .sort((a, b) => ((new Date(b.schedule.startDate)) - (new Date(a.schedule.startDate))))
                              .sort((c, d) => d.localidade.prioridade - c.localidade.prioridade)
                              
    const filteredData = newData.filter((item, i) => {
      let exists = obj.hasOwnProperty(item.name)
      return exists ? false : obj[item.name] = 1
    })
    console.log((filteredData))

    const info = filteredData.map((element) =>{
      console.log(element.name)
      console.log(element.phonePrice)
      console.log(element.phonePriceOnPlan)
      console.log(element.monthly_fee)
    } )

    //utilizando uma serie de HOFs com condicionais para ordens de prioridade é possível a realização 
    // do desafio.
    // parei na definição da ordem de prioridade dentro do for loop

    //https://docs.google.com/document/d/1URFZ17lOf7-V6FShkO8Eof-O31XYBZQRjzxxn3MswvA/edit#
    //rafael.peregrino@4yousee.com.br
