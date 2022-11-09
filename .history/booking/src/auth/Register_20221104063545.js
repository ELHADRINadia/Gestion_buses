import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './register.css'

function Register() {
  const exLocalStorage = localStorage.getItem('user')
  const navigate = useNavigate()

  useEffect(() => {
    if (exLocalStorage) {
      navigate('/')
    } else {
      navigate('/register')
    }
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [sectName, setSectName] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
