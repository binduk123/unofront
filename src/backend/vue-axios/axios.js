/* global localStorage */

import axios from 'axios'

const API_URL = 'https://multivendor.dev.api.unoapp.io/api/application/admin/login'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})
