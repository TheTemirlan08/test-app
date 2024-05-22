import { useState } from "react"
import { Timer } from "./timer/timer"

export const LookBook = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const formData = {
            name,
            email,
            password
        }
        console.log(formData)

        setName('')
        setEmail('')
        setPassword('')
        
        
    }

    return (
        <div className="container">
            <form className="input__form" onSubmit={handleClick}>
                <p className="input__reg">Регистрация</p>
                <input className="input__desc" placeholder="имя" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="input__desc" placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="input__desc" placeholder="пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="form__btn">Войти</button>
            </form>
            <Timer />
        </div>
    )
}