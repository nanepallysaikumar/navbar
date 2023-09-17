import React from "react"
import "./Connect.scss"


const Connect = () => {
    return (
        <main className="main">
            <div className='content'>
                <section className='input-container'>
                    <div>
                        <p>System</p>
                        <input type='text' />
                        <input type='text' />
                    </div>
                    <div>
                        <p>Type of System</p>
                        <select>
                            <option value="microsoftCrm">Microsoft CRM</option>
                        </select>
                        <select>
                            <option value="microsoftCrm">Microsoft CRM</option>
                        </select>
                    </div>
                    <div>
                        <p>Connection String</p>
                        <input type='text' />
                        <input type='text' />
                    </div>
                    <div>
                        <p>Connection Status</p>
                        <input type='button' />
                        <input type='button' />
                    </div>
                </section>
                <section className='button-container'>
                    <button>Connect</button>
                    <button>Connect</button>
                </section>
            </div>
            <div className='submit-container'>
                <button>Connect</button>
            </div>
        </main>
    )
}

export { Connect }