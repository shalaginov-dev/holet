import httpClient from "./httpClient.js";

const url = 'projects'

function getMyDate(time) {
  let respDate = new Date(time)
  let year = respDate.getFullYear()
  let date = respDate.getDate()
  let mounth = respDate.getMonth()
  return `${year} ${date} ${mounth}`
}

export const projectsApi = {
  getAll() {
    try {
      return httpClient.post(`${url}/getAll`, {})
      .then(({ data }) => {
        return data = data.data.map(el => {
          console.log(data.data)
          return {
            id: el.id,
            status: 1,
            iconName: el.emoji,
            name: el.name,
            type: el.project_type_id,
            typeName: el.project_type.name,
            address: el.address,
            square: el.square,
            customer: `${el.orderersecond_namee}`,
            changed: getMyDate(el.created_at),
            created: getMyDate(el.updated_at),
            timing: 50,
            orderer: el.orderer,
            payment: 80,
            readiness: 40,
            share: [
              {
                icon: '/icons/anton.jpg',
                link: 's'
              },
              {
                icon: '/icons/stroipro.jpg',
                link: ''
              },
              {
                icon: '/icons/anton.jpg',
                link: ''
              },
              {
                icon: '/icons/anton.jpg',
                link: ''
              },
              {
                icon: '/icons/stroipro.jpg',
                link: ''
              },
              {
                icon: '/icons/stroipro.jpg',
                link: ''
              }
            ]   
          }
        })
      });
    } catch(err) {
      console.log(err)
    }
  },

  getTypes() {
    try {
      return httpClient.post(`${url}/types/get`, {})
      .then(({ data }) => {
        return data = data.data.map(el => {
          return {
            label: el.name,
            value: el.id
          }
        })
      })
    } catch(err) {
      console.log(err)
    }
  },

  createProject(formData) {
    try {
      return httpClient.post(`${url}/create`, {
        project: {
          data: {
            name: formData.name,
            address: formData.adress,
            square: formData.square,
            project_type_id: formData.project_type_id,
            orderer: formData.orderer,
            emoji: formData.emoji
          }
        }
      }).then(({ data }) => {
        return data
      })
    } catch (err) {
      console.log(err)
    }
  },

  delProject(id) {
    try {
      return httpClient.post(`${url}/delete`, {
        id: id 
      }).then(({ data }) => {
        return data
      })
    } catch (err) {
      console.log(err)
    }
  }
}