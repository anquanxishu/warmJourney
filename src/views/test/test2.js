import axios from 'axios'

const baseUrl = 'https://api.jsonbin.io/v3/b'
const cityDataId = '6a59c731f5f4af5e299afc29'
const x_master_key = '$2a$10$WJyRujiNUdRaXODrDFPvDuuzRB9UcdSHVN8WSCA2pPq3mdRu0FlnO'
axios
  .get(`${baseUrl}/${cityDataId}`, {
    headers: {
      'x-master-key': x_master_key,
    },
  })
  .then((res) => {
    console.log(res.data)
  })
