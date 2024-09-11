import {
    useState
} from 'react'

const Form = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        okayToEmail: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value, type, checked } = e.target
        setUserData((prevData) => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    const passwordMatched = (password: string, confirmPassword: string): boolean => {
        return password === confirmPassword
    }

    const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
        e.preventDefault()
        if (!passwordMatched(userData.password, userData.confirmPassword)) {
            console.log('Passwords do not match')
        } else {
            console.log('Successfully signed up')
            if (userData.okayToEmail) {
                setTimeout(() => {
                    console.log('Thanks for signing up for our newsletter!')
                }, 1000)
            }
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email address"
                className="form--input"
                name="email"
                value={userData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="Password"
                className="form--input"
                name='password'
                value={userData.password}
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="Confirm password"
                className="form--input"
                name='confirmPassword'
                value={userData.confirmPassword}
                onChange={handleChange}
            />

            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    className="form--checkbox"
                    name='okayToEmail'
                    checked={userData.okayToEmail}
                    onChange={handleChange}
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>

            <button
                className="form--submit"
                type="submit"
                onClick={handleSubmit}
            >
                Sign up
            </button>
        </form>
    )

}

export default Form